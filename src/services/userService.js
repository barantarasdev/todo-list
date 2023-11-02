import { client } from 'src/services/apiClient'
import { getDataFromLocaleStorage } from 'src/helpers/storageHelper'

export const signUp = (data) => {
  return client.post(`/register`, data)
}

export const signIn = (data) => {
  return client.post(`/login`, data)
}

export const logOut = () => {
  return client.post(`/logout`, {
    refresh_token: getDataFromLocaleStorage('refresh_token'),
  })
}
