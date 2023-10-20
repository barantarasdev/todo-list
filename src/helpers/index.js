export function generateId() {
  return new Date().valueOf()
}

export function createActions(str) {
  const methods = ['CREATE', 'UPDATE', 'REMOVE']
  const result = {}

  methods.forEach((value) => {
    result[`${str}_${value}`] = `${str}_${value}`
  })

  return result
}

export function findUser(email, password, users) {
  return users.find(
    (user) => user.email === email && user.password === password,
  )
}

export function isUserIncluded(email, users) {
  return users.find((user) => user.email === email)
}

export function clearInputValue(values) {
  values.forEach((value) => {
    value.value = ''
  })
}
