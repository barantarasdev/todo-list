export function getDataFromLocaleStorage(key) {
  const data = localStorage.getItem(key)

  if (data) {
    return JSON.parse(data)
  }

  return null
}

export function setDataToLocaleStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data))
}
