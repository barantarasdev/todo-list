import {getDataFromLocaleStorage} from 'src/helpers/storageHelper'
import client from 'src/services/apiClient'
import {SignInT, User} from 'src/types'

export const signUp = (data: User) =>
  client.post(`/register`, {...data, user_age: +data.user_age})

export const signIn = (data: SignInT) => client.post(`/login`, data)

export const logOut = () =>
  client.post(`/logout`, {
    refresh_token: getDataFromLocaleStorage('refresh_token'),
  })
