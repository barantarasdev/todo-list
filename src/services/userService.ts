import {getDataFromLocalStorage} from 'src/helpers/storageHelper'
import client from 'src/services/apiClient'
import {SignInT, UserT} from 'src/types'

export const signUp = (data: UserT) =>
  client.post(`/register`, {...data, user_age: +data.user_age})

export const signIn = (data: SignInT) => client.post(`/login`, data)

export const logOut = () =>
  client.post(`/logout`, {
    refresh_token: getDataFromLocalStorage('refresh_token'),
  })
