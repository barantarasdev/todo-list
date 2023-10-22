import {
  ACTIONS,
  getSignInValues,
  getSignUpValues,
  ROUTES,
} from '../constants/index.js'
import {
  clearInputValue,
  findUser,
  getFullElement,
  isUserIncluded,
} from '../helpers/index.js'
import { setDataToLocaleStorage } from '../localeStorage/index.js'
import { eventEmitter, store } from '../index.js'

export class Auth {
  constructor() {
    this.SET_ACTIONS = ACTIONS
    this.USER_REGISTER = ACTIONS.USER.USER_REGISTER
    this.SIGN_IN = ROUTES.SIGN_IN
    this.values =
      store.state.url === this.SIGN_IN
        ? getSignInValues.bind(this)()
        : getSignUpValues.bind(this)()
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { target } = e

    const email = target.querySelector('input[name="email"]')
    const password = target.querySelector('input[name="password"]')
    const name = target.querySelector('input[name="name"]')
    let user

    if (store.state.url === this.SIGN_IN) {
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

      clearInputValue([email, password])
    } else {
      const foundedUser = isUserIncluded(email.value, store.state.users)

      if (!foundedUser) {
        user = {
          name: name.value,
          email: email.value,
          password: password.value,
          todos: [],
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

      clearInputValue([email, password, name])
    }
  }

  handleClick = (e) => {
    eventEmitter.emit(this.SET_ACTIONS.URL.URL_SET, e.target.dataset.link)
  }

  getElement() {
    const form = document.createElement('form')
    form.classList.add('form', 'auth')
    form.addEventListener('submit', this.handleSubmit)

    return getFullElement(this.values, form)
  }
}
