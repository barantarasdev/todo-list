import {setDataToLocaleStorage} from 'src/helpers/storageHelper'

export function removeUser(): void {
  localStorage.removeItem('user')
  localStorage.removeItem('access_token')
  localStorage.removeItem('refresh_token')
}

export function storeUser(
  user: Record<string, string>,
  access_token: string,
  refresh_token: string
): void {
  setDataToLocaleStorage('user', user)
  setDataToLocaleStorage('access_token', access_token)
  setDataToLocaleStorage('refresh_token', refresh_token)
}
