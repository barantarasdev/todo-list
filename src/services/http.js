import {
  getDataFromLocaleStorage,
  setDataToLocaleStorage,
} from 'src/helpers/storageHelper'
import { onLogout } from 'src/helpers/userHelper'

const BASE_URL = process.env.BASE_URL

export function sendRequest(
  url,
  method,
  data = null,
  isVerify = false,
  count = 0,
) {
  const options = { method, headers: {} }

  if (data) {
    options.body = JSON.stringify(data)
    options.headers['Content-Type'] = 'application/json'
  }

  if (isVerify) {
    const access_token = getDataFromLocaleStorage('access_token')

    options.headers.Authorization = `Bearer ${access_token}`
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
          refresh_token: getDataFromLocaleStorage('refresh_token'),
        }),
      })
      const { access_token, refresh_token } = refreshResponse.json()

      if (refreshResponse.ok) {
        setDataToLocaleStorage('access_token', access_token)
        setDataToLocaleStorage('refresh_token', refresh_token)

        return sendRequest(url, method, data, isVerify, count + 1)
      }

      return onLogout()
    }

    if (!response.ok) {
      throw new Error('Error')
    }

    return response.json()
  })
}
