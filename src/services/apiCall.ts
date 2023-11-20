import {
  getDataFromLocalStorage,
  setDataToLocalStorage,
} from '@/utils/localeStorage'
import { MethodsE } from '@/types'
import { SendRequestProps } from './types'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

async function sendRequest<T>({
  url,
  method = MethodsE.GET,
  data = null,
  isVerify = true,
  count = 0,
}: SendRequestProps): Promise<T | undefined> {
  const headers: Record<string, string> = {}
  const options: RequestInit = { method }

  if (data) {
    headers['Content-Type'] = 'application/json'
    options.body = JSON.stringify(data)
  }

  if (isVerify) {
    const accessToken = getDataFromLocalStorage('accessToken')

    headers.Authorization = `Bearer ${accessToken}`
  }

  const response = await fetch(BASE_URL + url, {
    ...options,
    headers,
  })

  if (response.status === 401) {
    if (count > 5) {
      throw new Error('Bar request!')
    }

    const expiredRefreshToken = getDataFromLocalStorage('refreshToken')

    const refreshResponse = await fetch(`${BASE_URL}/auth/refresh`, {
      method: MethodsE.GET,
      headers: {
        Authorization: `Bearer ${expiredRefreshToken}`,
      },
    })
    const { accessToken, refreshToken } = await refreshResponse.json()

    if (refreshResponse.ok) {
      setDataToLocalStorage('accessToken', accessToken)
      setDataToLocalStorage('refreshToken', refreshToken)

      return sendRequest({
        url,
        method,
        data,
        isVerify,
        count: count + 1,
      })
    }

    throw new Error('Not authorized')
  }

  if (!response.ok) {
    throw new Error('Error')
  }

  if (
    response.headers.get('Content-Type')?.includes('application/json') &&
    response.body
  ) {
    return response.json()
  }

  return undefined
}

export default sendRequest
