import { generateId } from '../helpers/index.js'
import { saveTodoToLocalStorage } from '../api/index.js'
import { ACTIONS, ROUTES } from '../constants/index.js'
import { eventEmitter, store } from '../index.js'

export class Home {
  constructor() {
    this.SET_ACTIONS = ACTIONS
    this.STATE_CHANGE = ACTIONS.STATE_CHANGE
    this.TODO = ACTIONS.TODO
    this.ROUTES = ROUTES
    this.IMG_URL =
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4JCuHyuURcCyeNEc9v4iOma3HVgZgDSMaIQ&usqp=CAU'
  }

  handleSubmitMain = (e) => {
    e.preventDefault()
    const { target } = e

    const input = target.querySelector('.input')
    const value = input.value
    const id = generateId()
    const newTodo = { value, isChecked: false, id }

    eventEmitter.emit(this.TODO.TODO_CREATE, { ...newTodo })
    saveTodoToLocalStorage({ ...newTodo })

    input.value = ''
  }

  handleClickHeader = (e) => {
    const menu = document.querySelector('.header__menu')

    const { target } = e
    const menuItem = target.closest('.header__menu__item')

    if (target.closest('.header__avatar')) {
      menu.classList.toggle('disabled')

      return
    }

    if (menuItem && menuItem.dataset.menu === 'logout') {
      localStorage.removeItem('user')
      eventEmitter.emit(this.SET_ACTIONS.URL.URL_SET, this.ROUTES.SIGN_IN)
    }
  }

  getElement() {
    const header = document.createElement('header')
    const main = document.createElement('main')
    header.classList.add('header')
    main.classList.add('main')

    header.insertAdjacentHTML(
      'beforeend',
      `
      <h1 class="header__title">Welcome, ${store.state.user.name}</h1>
      
      <button class="header__avatar">
        <img
          class="header__avatar__icon"
          src=${this.IMG_URL}
          alt="avatar"
        />
      </button>
        
      <ul class="header__menu disabled">
        <li class="header__menu__item" data-menu="logout">
          <button class="header__menu__button">Logout</button>
        </li>
      </ul>
    `,
    )
    main.insertAdjacentHTML(
      'beforeend',
      `
      <form class="form" method="post">
        <input
          class="input"
          type="text"
          name="searchInput"
          placeholder="Add new todo"
          required
        />
        
        <button class="button" type="submit">Add</button>
      </form>

      <ul class="todos"></ul>`,
    )

    header.addEventListener('click', this.handleClickHeader)
    main.addEventListener('submit', this.handleSubmitMain)

    return { header, main }
  }
}
