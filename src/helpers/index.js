import { eventEmitter } from '../index.js'
import { ACTIONS, ROUTES } from '../constants/index.js'
import { setDataToLocaleStorage } from '../localeStorage/index.js'

export function createActions(str) {
  const methods = ['CREATE', 'UPDATE', 'REMOVE', 'ALL_CLEAR']
  const result = {}

  methods.forEach((value) => {
    result[`${str}_${value}`] = `${str}_${value}`
  })

  return result
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
  const urlRegex = /^(https?:\/\/)?(?!www\.)[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/

  return url.match(urlRegex)
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

export function handleLogout() {
  const {
    URL: { URL_SET },
    CLEAR_TODOS,
  } = ACTIONS
  const { SIGN_IN } = ROUTES

  localStorage.removeItem('user')
  localStorage.removeItem('accessToken')
  localStorage.removeItem('refreshToken')
  eventEmitter.emit(CLEAR_TODOS)
  eventEmitter.emit(URL_SET, SIGN_IN)
}

export function handleLogin(user, accessToken, refreshToken) {
  const {
    USER: { USER_SET, USER_REGISTER },
    URL: { URL_SET },
  } = ACTIONS
  const { HOME } = ROUTES

  eventEmitter.emit(USER_SET, user)
  eventEmitter.emit(USER_REGISTER, user)
  eventEmitter.emit(URL_SET, HOME)
  setDataToLocaleStorage('user', user)
  setDataToLocaleStorage('accessToken', accessToken)
  setDataToLocaleStorage('refreshToken', refreshToken)
}
