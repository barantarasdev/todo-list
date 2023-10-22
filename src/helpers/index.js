export function generateId() {
  return new Date().valueOf()
}

export function createActions(str) {
  const methods = ['CREATE', 'UPDATE', 'REMOVE', 'ALL_CLEAR']
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

export function getFullElement(values, rootElement) {
  values.forEach(({ tag, classes, value, options, events, dataset }) => {
    const newValue = document.createElement(tag)

    if (classes) {
      classes.forEach((currentClass) => {
        if (currentClass.length) {
          newValue.classList.add(currentClass)
        }
      })
    }

    if (value) {
      newValue.textContent = value
    }

    if (options) {
      Object.entries(options).forEach(([key, value]) => {
        newValue[key] = value
      })
    }

    if (events) {
      events.forEach(({ event, callback }) => {
        newValue.addEventListener(event, callback)
      })
    }

    if (dataset) {
      newValue.dataset[dataset.key] = dataset.value
    }

    rootElement.appendChild(newValue)
  })

  return rootElement
}
