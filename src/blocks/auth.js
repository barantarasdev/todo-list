import { ACTIONS, ROUTES, VALIDATION_TYPES } from '../constants/index.js'
import {
  generateId,
  handleLogin,
  validateConfirmPassword,
  validateEmail,
  validatePassword,
  validatePhone,
  validateUrl,
} from '../helpers/index.js'
import { eventEmitter, store } from '../index.js'
import { SignUp } from './signUp.js'
import { SignIn } from './signIn.js'
import { getTodos, signIn, signUp } from '../api/index.js'

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

    if (store.state.url === this.SIGN_IN) {
      if (this.errors.length) {
        return
      }

      const userData = {
        email: email.value,
        password: password.value,
      }

      signIn(userData)
        .then((res) => {
          const user = { name: res.name, userId: res.userId }

          handleLogin(user, res.accessToken, res.refreshToken)
          getTodos(res.userId).then((res) => {
            res.todos.forEach((todo) => {
              eventEmitter.emit(this.SET_ACTIONS.TODO.TODO_CREATE, {
                ...todo,
              })
            })
          })
        })
        .catch(() => {
          eventEmitter.emit(this.SET_ACTIONS.CALL_MODAL, 'User not found')
        })
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

      const newUser = {
        userId: generateId(),
        name: name.value,
        email: email.value,
        password: password.value,
        phone: phone.value,
        age: age.value,
        gender: gender.value,
        site: site.value,
      }

      signUp(newUser)
        .then((res) => {
          const user = { name: newUser.name, userId: newUser.userId }

          handleLogin(user, res.accessToken, res.refreshToken)
        })
        .catch(() => {
          eventEmitter.emit(this.SET_ACTIONS.CALL_MODAL, 'User already exists')
        })
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
