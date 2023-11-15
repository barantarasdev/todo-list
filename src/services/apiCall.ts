import {
  getDataFromLocalStorage,
  setDataToLocalStorage,
  removeUser,
} from '@/utils'
import { MethodsE } from '@/types'

const BASE_URL = 'http://localhost:8080'

async function sendRequest<T>(
  url: string,
  method: MethodsE,
  data: unknown = null,
  isVerify: boolean = false,
  count: number = 0
): Promise<T> {
  const headers: Record<string, string> = {}
  const options: RequestInit = { method }

  if (data) {
    options.body = JSON.stringify(data)
    headers['Content-Type'] = 'application/json'
  }

  if (isVerify) {
    const accessToken = getDataFromLocalStorage('accessToken')

    headers.Authorization = `Bearer ${accessToken}`
  }

  const response = await fetch(BASE_URL + url, { ...options, headers })

  if (response.status === 403) {
    if (count > 5) {
      throw new Error('You don"t have limits for this request')
    }

    const refreshResponse = await fetch(`${BASE_URL}/refresh`, {
      method: MethodsE.POST,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        refreshToken: getDataFromLocalStorage('refreshToken'),
      }),
    })
    const { accessToken, refreshToken } = await refreshResponse.json()

    if (refreshResponse.ok) {
      setDataToLocalStorage('accessToken', accessToken)
      setDataToLocalStorage('refreshToken', refreshToken)

      return sendRequest(url, method, data, isVerify, count + 1)
    }

    removeUser()
    throw Error('Not authorized')
  }

  if (!response.ok) {
    throw new Error('Error')
  }

  return response.json()
}

export default sendRequest
