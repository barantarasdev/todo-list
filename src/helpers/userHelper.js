import { setDataToLocaleStorage } from 'src/helpers/storageHelper'

export function onLogout() {
  localStorage.removeItem('user')
  localStorage.removeItem('access_token')
  localStorage.removeItem('refresh_token')
}

export function onLogIn(user, access_token, refresh_token) {
  setDataToLocaleStorage('user', user)
  setDataToLocaleStorage('access_token', access_token)
  setDataToLocaleStorage('refresh_token', refresh_token)
}
