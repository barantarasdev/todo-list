import {setDataToLocalStorage} from 'src/helpers/storageHelper'
import {logOut} from 'src/services/userService'

export async function removeUser(): Promise<void> {
  await logOut()
  localStorage.removeItem('user')
  localStorage.removeItem('access_token')
  localStorage.removeItem('refresh_token')
}

export function storeUser(
  user: Record<string, string>,
  access_token: string,
  refresh_token: string
): void {
  setDataToLocalStorage('user', user)
  setDataToLocalStorage('access_token', access_token)
  setDataToLocalStorage('refresh_token', refresh_token)
}
