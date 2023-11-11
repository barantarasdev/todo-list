import client from 'src/services/apiClient'
import { AuthValuesT } from 'src/services/types'
import { SignInT, UserT } from 'src/types'

export const signUp = (data: UserT) =>
  client.post<AuthValuesT>(`/register`, { ...data, userAge: +data.userAge })

export const signIn = (data: SignInT) =>
  client.post<AuthValuesT>(`/login`, data)

export const logOut = (refreshToken: string) =>
  client.post<AuthValuesT>(`/logout`, {
    refreshToken,
  })
