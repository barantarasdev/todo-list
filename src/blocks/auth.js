import { ACTIONS, ROUTES, VALIDATION_TYPES } from '../constants/index.js'
import {
  clearInputValue,
  findUser,
  isUserIncluded,
  validateConfirmPassword,
  validateEmail,
  validatePassword,
  validatePhone,
  validateUrl,
} from '../helpers/index.js'
import { setDataToLocaleStorage } from '../localeStorage/index.js'
import { eventEmitter, store } from '../index.js'
import { SignUp } from './signUp.js'
import { SignIn } from './signIn.js'

function validateInput(type, { value, id }) {
  const label = this.form.querySelector(`label[for="${id}"]`)

  if (!value) {
    label.textContent = 'This field is required'

    if (!this.errors.includes(type)) {
      this.errors.push(type)
    }

    return
  }

  if (value) {
    label.textContent = ''
  }

  switch (type) {
    case 'age':
      if (value > 60) {
        label.textContent = 'This age is old'
      } else if (value < 18) {
        label.textContent = 'This age is small'
      } else {
        label.textContent = ''
      }

      break
    case 'email':
      if (!validateEmail(value)) {
        label.textContent = 'This email is not valid'
      } else {
        label.textContent = ''
      }

      break
    case 'phone':
      if (!validatePhone(value)) {
        label.textContent = 'This phone is not valid'
      } else {
        label.textContent = ''
      }

      break
    case 'site':
      if (!validateUrl(value)) {
        label.textContent = 'This url is not valid'
      } else {
        label.textContent = ''
      }

      break
    case 'password':
      if (!validatePassword(value)) {
        label.textContent = 'This password is not valid'
      } else {
        label.textContent = ''
      }

      break
    case 'confirmPassword':
      if (!validateConfirmPassword(value)) {
        label.textContent = 'The password does not match'
      } else {
        label.textContent = ''
      }

      break
    case 'name':
      if (value.length < 2) {
        label.textContent = 'The name must be at least 2 character'
      } else {
        label.textContent = ''
      }

      break
    default:
      break
  }

  if (label.textContent) {
    if (!this.errors.includes(type)) {
      this.errors.push(type)
    }
  } else {
    this.errors = this.errors.filter((error) => error !== type)
  }
}

export class Auth {
  constructor() {
    this.SET_ACTIONS = ACTIONS
    this.USER_REGISTER = ACTIONS.USER.USER_REGISTER
    this.SIGN_IN = ROUTES.SIGN_IN
    this.form = document.createElement('form')
    this.errors = []
    this.validateInput = validateInput.bind(this)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { target } = e

    const age = target.querySelector('input[name="age"]')
    const gender = target.querySelector('select')
    const site = target.querySelector('input[name="site"]')
    const email = target.querySelector('input[name="email"]')
    const phone = target.querySelector('input[name="phone"]')
    const password = target.querySelector('input[name="password"]')
    const confirmPassword = target.querySelector(
      'input[name="confirmPassword"]',
    )
    const name = target.querySelector('input[name="name"]')
    let user

    if (store.state.url === this.SIGN_IN) {
      if (this.errors.length) {
        return
      }

      const foundedUser = findUser(
        email.value,
        password.value,
        store.state.users,
      )

      if (foundedUser) {
        user = { ...foundedUser }
      } else {
        alert('User not found')
      }

      if (user) {
        eventEmitter.emit(this.SET_ACTIONS.USER.USER_SET, user)
        eventEmitter.emit(this.SET_ACTIONS.URL.URL_SET, 'home')
        setDataToLocaleStorage('user', user)
      }
    } else {
      this.validateInput('age', age)
      this.validateInput('gender', gender)
      this.validateInput('email', email)
      this.validateInput('site', site)
      this.validateInput('phone', phone)
      this.validateInput('name', name)
      this.validateInput('password', password)
      this.validateInput('confirmPassword', confirmPassword)

      if (this.errors.length) {
        return
      }

      const foundedUser = isUserIncluded(email.value, store.state.users)

      if (!foundedUser) {
        user = {
          name: name.value,
          email: email.value,
          password: password.value,
          phone: phone.value,
          age: age.value,
          gender: gender.value,
          site: site.value,
        }
      } else {
        alert('User already exists')
      }

      if (user) {
        eventEmitter.emit(this.SET_ACTIONS.USER.USER_SET, user)
        eventEmitter.emit(this.USER_REGISTER, user)
        eventEmitter.emit(this.SET_ACTIONS.URL.URL_SET, 'home')
        setDataToLocaleStorage('user', user)
      }
    }
  }

  handleClick = (e) => {
    eventEmitter.emit(this.SET_ACTIONS.URL.URL_SET, e.target.dataset.link)
  }

  handleInput = (e) => {
    if (this.errors.length) {
      VALIDATION_TYPES.forEach((type) => {
        if (e.target.id === type && this.errors) {
          this.validateInput(type, e.target)
        }
      })
    }
  }

  getElement() {
    this.form.classList.add('form', 'auth')
    this.form.noValidate = true
    this.form.addEventListener('submit', this.handleSubmit)
    this.form.addEventListener('input', this.handleInput)

    return store.state.url === this.SIGN_IN
      ? new SignIn(this.form, this.handleClick).getElement()
      : new SignUp(this.form, this.handleClick).getElement()
  }
}
