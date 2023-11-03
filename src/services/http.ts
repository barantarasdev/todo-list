/* eslint-disable prefer-destructuring */
import {
  getDataFromLocalStorage,
  setDataToLocalStorage,
} from 'src/helpers/storageHelper'
import {removeUser} from 'src/helpers/userHelper'
import {Methods} from 'src/types'

const BASE_URL = process.env.BASE_URL

async function sendRequest(
  url: string,
  method: Methods,
  data: any = null,
  isVerify: boolean = false,
  count: number = 0
): Promise<any> {
  const headers: Record<string, string> = {}
  const options: RequestInit = {method}

  if (data) {
    options.body = JSON.stringify(data)
    headers['Content-Type'] = 'application/json'
  }

  if (isVerify) {
    const access_token = getDataFromLocalStorage('access_token')

    headers.Authorization = `Bearer ${access_token}`
  }

  const response = await fetch(BASE_URL + url, {...options, headers})
  if (response.status === 403) {
    if (count > 5) {
      throw new Error('You don"t have limits for this request')
    }

    const refreshResponse = await fetch(`${BASE_URL}/refresh`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        refresh_token: getDataFromLocalStorage('refresh_token'),
      }),
    })
    const {access_token: access_token_1, refresh_token} =
      await refreshResponse.json()

    if (refreshResponse.ok) {
      setDataToLocalStorage('access_token', access_token_1)
      setDataToLocalStorage('refresh_token', refresh_token)

      return sendRequest(url, method, data, isVerify, count + 1)
    }

    return removeUser()
  }

  if (!response.ok) {
    throw new Error('Error')
  }

  return response.json()
}

export default sendRequest
