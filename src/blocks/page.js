import { Auth } from './auth.js'
import { Home } from './home.js'
import { ROUTES } from '../constants/index.js'
import { store } from '../index.js'

export class Page {
  constructor() {
    this.ROUTES = ROUTES
    this.label = store.state.url === this.ROUTES.SIGN_IN ? 'Sign in' : 'Sign up'
  }

  render() {
    const app = document.querySelector('#app')
    app.innerHTML = ''

    if (
      store.state.url === this.ROUTES.SIGN_IN ||
      store.state.url === this.ROUTES.SIGN_UP
    ) {
      const form = new Auth().getElement()
      const label = document.createElement('label')
      label.classList.add('auth__label')
      label.textContent = this.label
      form.insertAdjacentElement('afterbegin', label)
      app.insertAdjacentElement('beforeend', form)

      return
    }

    const { header, main } = new Home().getElement()

    app.insertAdjacentElement('beforeend', header)
    app.insertAdjacentElement('beforeend', main)
  }
}
