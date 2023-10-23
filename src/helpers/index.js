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

export function getFullElement(values, rootElement) {
  values.forEach(
    ({
      tag,
      classes,
      value,
      options,
      events,
      dataset,
      element,
      id,
      for: forLabel,
    }) => {
      const newValue = document.createElement(tag)

      if (element) {
        rootElement.insertAdjacentElement('beforeend', element)
      }

      if (classes) {
        classes.forEach((currentClass) => {
          if (currentClass.length) {
            newValue.classList.add(currentClass)
          }
        })
      }

      if (id) {
        newValue.id = id
      }

      if (forLabel) {
        newValue.setAttribute('for', forLabel)
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
    },
  )

  return rootElement
}

export function validateEmail(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    )
}

export function validatePhone(phone) {
  return String(phone).match(
    /^\+?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im,
  )
}

export function validateUrl(url) {
  const urlPattern = new RegExp(
    '^(https?:\\/\\/)?' +
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
      '((\\d{1,3}\\.){3}\\d{1,3}))' +
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
      '(\\?[;&a-z\\d%_.~+=-]*)?' +
      '(\\#[-a-z\\d_]*)?$',
    'i',
  )

  return !!urlPattern.test(url)
}

export function validatePassword(password) {
  const regExp =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,15}$/

  return password.match(regExp)
}

export function validateConfirmPassword(confirmPassword) {
  const currentPassword = document.querySelector(
    '.auth .input[type="password"]',
  ).value

  return confirmPassword === currentPassword
}
