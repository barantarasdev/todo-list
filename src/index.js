'use strict'

import { EE } from './store/eventEmitter.js'
import { Store } from './store/store.js'
import { Todos } from './blocks/todos.js'
import { Page } from './blocks/page.js'
import { getDataFromLocaleStorage } from './localeStorage/index.js'
import { ACTIONS, ROUTES } from './constants/index.js'
import { renderTodosFromLocaleStorage } from './api/index.js'
import { Modal } from './blocks/modal.js'

export const eventEmitter = new EE()
export const store = new Store()

document.addEventListener('DOMContentLoaded', () => {
  const { HOME, SIGN_IN } = ROUTES
  const { STATE_CHANGE, URL_CHANGE, TODO, USER, URL, CALL_MODAL } = ACTIONS

  eventEmitter.subscribe(STATE_CHANGE, () => new Todos().render())
  eventEmitter.subscribe(URL_CHANGE, () => new Page().render())
  eventEmitter.subscribe(CALL_MODAL, (title) => {
    const isModal = document.querySelector('.modal')
    if (!isModal) {
      new Modal(title).render()
    }
  })
  Object.values({ ...TODO, ...USER, ...URL }).forEach((item) => {
    eventEmitter.subscribe(item, (payload) => store.dispatch(item, payload))
  })

  render()
  document.addEventListener('click', handleClickAvatar)

  function render() {
    const user = getDataFromLocaleStorage('user')

    if (user) {
      eventEmitter.emit(USER.USER_SET, user)
      eventEmitter.emit(URL.URL_SET, HOME)
      renderTodosFromLocaleStorage()

      return
    }

    eventEmitter.emit(URL.URL_SET, SIGN_IN)
  }

  function handleClickAvatar({ target }) {
    const avatar = document.querySelector('.header__avatar')
    const menu = document.querySelector('.header__menu')
    const isNotClickedOnTheAvatar = avatar && !avatar.contains(target)

    if (isNotClickedOnTheAvatar) {
      menu.classList.add('disabled')
    }
  }
})
