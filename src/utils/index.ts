import { AnyObject, ValidationError } from 'yup'

import { ValidateProps } from '@/utils/types'

export async function validate<T extends AnyObject>({
  values,
  schema,
}: ValidateProps<T>) {
  try {
    await schema.validate(values, { abortEarly: false })
  } catch (error) {
    if (error instanceof ValidationError) {
      return error.inner.reduce(
        (acc: Record<string, string>, err: ValidationError) => {
          if (err.path) {
            acc[err.path] = err.message
          }

          return acc
        },
        {}
      )
    }

    throw error
  }

  return undefined
}

export function getDataFromLocalStorage(key: string) {
  if (typeof window !== 'undefined') {
    const data = localStorage.getItem(key)

    if (data) {
      return JSON.parse(data)
    }
  }

  return null
}

export function setDataToLocalStorage(key: string, data: unknown): void {
  localStorage.setItem(key, JSON.stringify(data))
}

export function removeUser(): void {
  localStorage.removeItem('user')
  localStorage.removeItem('accessToken')
  localStorage.removeItem('refreshToken')
}

export function storeUser(
  user: { userId: string; userName: string },
  accessToken: string,
  refreshToken: string
): void {
  setDataToLocalStorage('user', user)
  setDataToLocalStorage('accessToken', accessToken)
  setDataToLocalStorage('refreshToken', refreshToken)
}
