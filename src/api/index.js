import {
  getDataFromLocaleStorage,
  setDataToLocaleStorage,
} from '../localeStorage/index.js'
import { handleLogout } from '../helpers/index.js'

const BASE_URL = 'http://localhost:3000'

function sendRequest(url, method, data = null, isVerify = false, count = 0) {
  const options = { method }
  const accessToken = getDataFromLocaleStorage('accessToken')

  if (data) {
    options.body = JSON.stringify(data)
  }

  if (isVerify) {
    options.headers = {
      Authorization: `Bearer ${accessToken}`,
    }
  }

  return fetch(BASE_URL + url, options).then(async (response) => {
    if (response.status === 403) {
      if (count > 5) {
        throw new Error('You don"t have limits for this request')
      }

      const refreshResponse = await fetch(BASE_URL + '/refresh', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token: getDataFromLocaleStorage('refreshToken'),
        }),
      })

      const refreshData = await refreshResponse.json()

      if (refreshResponse.ok) {
        setDataToLocaleStorage('accessToken', refreshData.accessToken)
        setDataToLocaleStorage('refreshToken', refreshData.refreshToken)

        return sendRequest(url, method, data, isVerify, count + 1)
      }

      handleLogout()

      return
    }

    if (!response.ok) {
      throw new Error('Error')
    }

    return response.json()
  })
}

export const client = {
  post: (url, data, isVerify) => sendRequest(url, 'POST', data, isVerify),
  patch: (url, data) => sendRequest(url, 'PATCH', data, true),
  delete: (url, isVerify) => sendRequest(url, 'DELETE', null, isVerify),
}

export const getTodos = (userId) => {
  return client.post(`/todos/user/${userId}`, null, true)
}

export const createTodo = (data) => {
  return client.post('/todos', data, true)
}

export const deleteTodo = (id) => {
  return client.delete(`/todos/${id}`, true)
}

export const updateTodo = (id, data) => {
  return client.patch(`/todos/${id}`, data, true)
}

export const signUp = (data) => {
  return client.post(`/register`, data)
}

export const signIn = (data) => {
  return client.post(`/login`, data)
}

export const logOut = () => {
  return client.post(
    `/logout`,
    JSON.stringify({
      token: getDataFromLocaleStorage('refreshToken'),
    }),
  )
}
