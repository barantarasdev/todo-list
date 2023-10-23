import { reducers } from './reducers.js'
import { ACTIONS, ROUTES } from '../constants/index.js'
import { eventEmitter } from '../index.js'

export class Store {
  constructor() {
    this.state = { todos: [], user: {}, users: [], url: '' }
    this.reducers = reducers
    this.ACTIONS = ACTIONS
    this.ROUTES = ROUTES
  }

  updateUI() {
    eventEmitter.emit(this.ACTIONS.STATE_CHANGE)
  }

  updatePage() {
    eventEmitter.emit(this.ACTIONS.URL_CHANGE)
  }

  dispatch(ACTION_TYPE, payload) {
    if (!this.reducers[ACTION_TYPE]) {
      return
    }

    this.state = {
      ...this.state,
      ...this.reducers[ACTION_TYPE](this.state, payload),
    }

    const isNavigateToHome =
      ACTION_TYPE === this.ACTIONS.URL.URL_SET && payload === this.ROUTES.HOME

    if (isNavigateToHome) {
      this.updatePage()
      this.updateUI()

      return
    }

    switch (ACTION_TYPE) {
      case this.ACTIONS.URL.URL_SET:
      case this.ACTIONS.USER.USER_SET:
      case this.ACTIONS.USER.USER_REGISTER:
        this.updatePage()

        break
      default:
        this.updateUI()
    }
  }
}
