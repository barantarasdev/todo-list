import { setDataToLocalStorage } from 'src/helpers/storageHelper'

export function removeUser(): void {
  localStorage.removeItem('user')
  localStorage.removeItem('accessToken')
  localStorage.removeItem('refreshToken')
}

export function storeUser(
  user: Record<string, string>,
  accessToken: string,
  refreshToken: string
): void {
  setDataToLocalStorage('user', user)
  setDataToLocalStorage('accessToken', accessToken)
  setDataToLocalStorage('refreshToken', refreshToken)
}
