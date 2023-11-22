import client from '@/services/apiClient'
import { AUTH_PATH } from '@/constants'
import { SignInT, SignUpT } from '@/types'

export const signUp = (data: SignUpT) =>
  client.post({
    url: `${AUTH_PATH}/signUp`,
    isVerify: false,
    data,
  })

export const signIn = (data: SignInT) =>
  client.post({
    url: `${AUTH_PATH}/signIn`,
    isVerify: false,
    data,
  })

export const logOut = (refreshToken: string) =>
  client.post({
    url: `${AUTH_PATH}/logout`,
    isVerify: false,
    data: { refreshToken },
  })
