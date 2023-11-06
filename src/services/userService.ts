import { getDataFromLocalStorage } from 'src/helpers/storageHelper'
import client from 'src/services/apiClient'
import { AuthValuesT } from 'src/services/types'
import { SignInT, UserT } from 'src/types'

export const signUp = (data: UserT) =>
  client.post<AuthValuesT>(`/register`, { ...data, userAge: +data.userAge })

export const signIn = (data: SignInT) =>
  client.post<AuthValuesT>(`/login`, data)

export const logOut = () =>
  client.post<AuthValuesT>(`/logout`, {
    refreshToken: getDataFromLocalStorage('refreshToken'),
  })
