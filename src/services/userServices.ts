import client from '@/services/apiClient'
import { AuthT } from '@/services/types'
import { SignInT, SignUpT } from '@/types'

export const signUp = (data: SignUpT) =>
  client.post<AuthT>(`/register`, { ...data, userAge: +data.userAge })

export const signIn = (data: SignInT) => client.post<AuthT>(`/login`, data)

export const logOut = (refreshToken: string) =>
  client.post<AuthT>(`/logout`, {
    refreshToken,
  })
