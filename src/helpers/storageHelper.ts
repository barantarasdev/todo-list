export function getDataFromLocalStorage(key: string) {
  const data = localStorage.getItem(key)

  if (data) {
    return JSON.parse(data)
  }

  return null
}

export function setDataToLocalStorage(key: string, data: any): void {
  localStorage.setItem(key, JSON.stringify(data))
}
