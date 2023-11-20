export function getDataFromLocalStorage(key: string) {
  if (typeof window !== 'undefined') {
    const data = localStorage.getItem(key)

    if (data) {
      return JSON.parse(data)
    }
  }

  return null
}

export function setDataToLocalStorage(key: string, data: unknown): void {
  localStorage.setItem(key, JSON.stringify(data))
}

export function removeUser(): void {
  localStorage.removeItem('user')
  localStorage.removeItem('accessToken')
  localStorage.removeItem('refreshToken')
}

export function storeUser(
  user: { userName: string },
  accessToken: string,
  refreshToken: string
): void {
  setDataToLocalStorage('user', user)
  setDataToLocalStorage('accessToken', accessToken)
  setDataToLocalStorage('refreshToken', refreshToken)
}
