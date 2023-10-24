const BASE_URL = 'http://localhost:3000'

function sendRequest(url, method = 'GET', data = null) {
  const options = { method }

  if (data) {
    options.body = JSON.stringify(data)
  }

  return fetch(BASE_URL + url, options).then((response) => {
    return response.json()
  })
}

export const client = {
  get: (url) => sendRequest(url),
  post: (url, data) => sendRequest(url, 'POST', data),
  patch: (url, data) => sendRequest(url, 'PATCH', data),
  delete: (url) => sendRequest(url, 'DELETE'),
}

export const getTodos = (userId) => {
  return client.get(`/todos/user/${userId}`)
}

export const createTodo = (data) => {
  return client.post('/todos', data)
}

export const deleteTodo = (id) => {
  return client.delete(`/todos/${id}`)
}

export const updateTodo = (id, data) => {
  return client.patch(`/todos/${id}`, data)
}

export const signUp = (data) => {
  return client.post(`/register`, data)
}

export const signIn = (data) => {
  return client.post(`/login`, data)
}
