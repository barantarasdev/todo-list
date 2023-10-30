import { handleLogout } from '../helpers/index.js'
import { ACTIONS } from '../constants/index.js'
import { eventEmitter, store } from '../index.js'
import { createTodo, logOut } from '../api/index.js'

export class Home {
  constructor() {
    this.STATE_CHANGE = ACTIONS.STATE_CHANGE
    this.TODO = ACTIONS.TODO
    this.IMG_URL =
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4JCuHyuURcCyeNEc9v4iOma3HVgZgDSMaIQ&usqp=CAU'
  }

  handleSubmitMain = async (e) => {
    e.preventDefault()
    const { target } = e

    const input = target.querySelector('.input')
    const todo_value = input.value
    const newTodo = {
      todo_value,
      user_id: store.state.user.user_id,
      todo_completed: false,
    }

    if (!todo_value.length) {
      return
    }

    try {
      const result = await createTodo(newTodo)
      eventEmitter.emit(this.TODO.TODO_CREATE, {
        ...newTodo,
        todo_id: result.todo_id,
      })
      input.value = ''
    } catch (error) {
      console.log(error)
    }
  }

  handleClickHeader = async (e) => {
    const menu = document.querySelector('.header__menu')

    const { target } = e
    const menuItem = target.closest('.header__menu__item')

    if (target.closest('.header__avatar')) {
      menu.classList.toggle('disabled')

      return
    }

    if (menuItem && menuItem.dataset.menu === 'logout') {
      try {
        await logOut()
        handleLogout()
      } catch (error) {
        console.log(error)
      }
    }
  }

  getElement() {
    const header = document.createElement('header')
    const main = document.createElement('main')
    header.classList.add('header')
    main.classList.add('main')

    const headerTitle = document.createElement('h1')
    headerTitle.textContent = `Welcome, ${store.state.user.user_name}`
    header.append(headerTitle)

    const headerAvatar = document.createElement('button')
    const headerAvatarIcon = document.createElement('img')
    headerAvatar.classList.add('header__avatar')
    headerAvatarIcon.classList.add('header__avatar__icon')
    headerAvatarIcon.src = this.IMG_URL
    headerAvatarIcon.alt = 'avatar'
    headerAvatar.append(headerAvatarIcon)
    header.append(headerAvatar)

    const headerMenu = document.createElement('ul')
    const headerMenuItem = document.createElement('li')
    const headerMenuButton = document.createElement('button')
    headerMenu.classList.add('header__menu', 'disabled')
    headerMenuItem.classList.add('header__menu__item')
    headerMenuItem.dataset.menu = 'logout'
    headerMenuButton.classList.add('header__menu__button')
    headerMenuButton.textContent = 'Logout'
    headerMenuItem.append(headerMenuButton)
    headerMenu.append(headerMenuItem)
    header.append(headerMenu)

    const mainForm = document.createElement('form')
    const mainInput = document.createElement('input')
    const mainButton = document.createElement('button')
    mainForm.classList.add('form')
    mainForm.method = 'post'
    mainInput.classList.add('input')
    mainInput.type = 'text'
    mainInput.name = 'searchInput'
    mainInput.placeholder = 'Add new todo'
    mainInput.required = true
    mainForm.classList.add('form')
    mainForm.method = 'post'
    mainForm.noValidate = true
    mainButton.classList.add('button')
    mainButton.type = 'submit'
    mainButton.textContent = 'Add'
    mainForm.append(mainInput)
    mainForm.append(mainButton)
    main.append(mainForm)

    const todos = document.createElement('ul')
    todos.classList.add('todos')
    main.append(todos)

    header.addEventListener('click', this.handleClickHeader)
    main.addEventListener('submit', this.handleSubmitMain)

    return { header, main }
  }
}
