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
