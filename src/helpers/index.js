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

        return
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

export function getInputsWithLabels(inputs) {
  let inputsElements = []

  inputs.forEach((input) => {
    const label = {
      tag: 'label',
      classes: ['auth__form__label'],
      for: input.id,
    }

    inputsElements.push(input, label)
  })

  return inputsElements
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
  const regexp =
    /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/

  return regexp.test(url)
}
