'use strict'

import { eventEmitter, store } from './store/store.js'
import {
  saveTodoToLocalStorage,
  editTodoToLocalStorage,
} from './localeStorage/index.js'
import {
  clearInputValue,
  findUser,
  generateId,
  isUserIncluded,
} from './helpers/index.js'
import { ACTIONS } from './constants/index.js'
import { Todos } from './blocks/todos.js'

const {
  TODO: { TODO_CREATE, TODO_UPDATE },
  TODO,
  STATE_CHANGE,
  SET_USER,
} = ACTIONS

eventEmitter.subscribe(STATE_CHANGE, () => {
  new Todos(eventEmitter).render()
})

Object.values(TODO)
  .concat([SET_USER])
  .forEach((item) => {
    eventEmitter.subscribe(item, (payload) => {
      store.dispatch(item, payload)
    })
  })

document.addEventListener('DOMContentLoaded', () => {
  const app = document.querySelector('#app')

  const avatar = app.querySelector('.avatar')
  const menu = app.querySelector('.menu')

  const content = app.querySelector('.content')
  const form = content.querySelector('.form')

  const signIn = app.querySelector('.signIn')
  const signUp = app.querySelector('.signUp')
  const loginFormSignIn = signIn.querySelector('.login__form')
  const loginFormSignUp = signUp.querySelector('.login__form')

  initialRender()
  renderTodoFromLocaleStorage()

  document.body.addEventListener('click', (e) => {
    if (!avatar.contains(e.target)) {
      menu.classList.add('dis')
    }
  })
  app.addEventListener('click', (e) => {
    const { target } = e
    const menuItem = target.closest('.menu__item')
    const loginLink = target.closest('.login__link')

    if (target.closest('.avatar')) {
      menu.classList.toggle('dis')

      return
    }

    if (target.closest('.todos')) {
      handleClickTodos(e)

      return
    }

    if (menuItem) {
      if (menuItem.dataset.menu === 'logout') {
        content.classList.add('dis')
        signIn.classList.remove('dis')
        localStorage.removeItem('user')
      }

      return
    }

    if (loginLink) {
      const loginType = loginLink.dataset.login

      signIn.classList.toggle('dis', loginType !== 'signIn')
      signUp.classList.toggle('dis', loginType === 'signIn')
    }
  })
  app.addEventListener('submit', (e) => {
    e.preventDefault()
    const { target } = e

    if (target === form) {
      e.preventDefault()
      const { target } = e

      const input = target.querySelector('.input')
      const value = input.value

      if (value.length <= 0) {
        input.classList.add('input--red')

        return
      }

      const id = generateId()
      const newTodo = { value, isChecked: false, id }

      onAdd({ ...newTodo })
      saveTodoToLocalStorage({ ...newTodo })

      input.classList.remove('input--red')
      input.value = ''

      return
    }

    if (target === loginFormSignIn) {
      handleSubmitSignIn(e)

      return
    }

    if (target === loginFormSignUp) {
      handleSubmitSignUp(e)

      return
    }
  })

  function handleSubmitSignIn({ target }) {
    const email = target.querySelector('input[name="email"]')
    const password = target.querySelector('input[name="password"]')

    const foundedUser = findUser(email.value, password.value, store.state.users)

    if (foundedUser) {
      eventEmitter.emit(SET_USER, foundedUser)
      localStorage.setItem('user', JSON.stringify(foundedUser))

      content.classList.remove('dis')
      signIn.classList.add('dis')
    } else {
      alert('User not found')
    }

    clearInputValue([email, password])
  }

  function handleSubmitSignUp({ target }) {
    const name = target.querySelector('input[name="name"]')
    const email = target.querySelector('input[name="email"]')
    const password = target.querySelector('input[name="password"]')

    const user = {
      name: name.value,
      email: email.value,
      password: password.value,
    }

    const foundedUser = isUserIncluded(email.value, store.state.users)

    if (!foundedUser) {
      eventEmitter.emit(SET_USER, user)
      localStorage.setItem('user', JSON.stringify(user))

      content.classList.remove('dis')
      signUp.classList.add('dis')
    } else {
      alert('User already exists')
    }

    clearInputValue([email, password, name])
  }

  function initialRender() {
    const user = localStorage.getItem('user')

    if (user) {
      const currentUser = JSON.parse(user)

      eventEmitter.emit(SET_USER, currentUser)

      content.classList.remove('dis')
      signIn.classList.add('dis')
      signUp.classList.add('dis')

      return
    }
  }
})

function onAdd(newTodo) {
  eventEmitter.emit(TODO_CREATE, { ...newTodo })
}

function onUpdate(options, id) {
  eventEmitter.emit(TODO_UPDATE, { id, options })
}

function handleClickTodos(e) {
  const { target } = e
  const todo = target.closest('li')

  if (!todo) {
    return
  }

  const todoValue = todo.querySelector('.todo__value')
  const saveButton = todo.querySelector('.todo__button--save')

  const { dataset } = todo

  todoValue.addEventListener('blur', saveNewValue)
  todoValue.addEventListener(
    'keydown',
    (e) => e.key === 'Enter' && saveNewValue(),
  )

  function saveNewValue() {
    todoValue.setAttribute('readonly', 'true')
    todoValue.classList.remove('todo__value--edit')
    saveButton.classList.remove('todo__button--save--visible')

    const value = todoValue.value

    editTodoToLocalStorage({ value }, +dataset.id)
    onUpdate({ value }, +dataset.id)
  }

  function handleTodoClick() {
    const { classList } = target
    const isEditing =
      classList.contains('todo__value') &&
      !classList.contains('todo__value--checked')

    if (isEditing) {
      e.preventDefault()

      todoValue.removeAttribute('readonly')
      todoValue.classList.add('todo__value--edit')
      saveButton.classList.add('todo__button--save--visible')

      return
    }

    if (classList.contains('todo__button--save')) {
      saveNewValue()
    }
  }

  handleTodoClick()
}

function renderTodoFromLocaleStorage() {
  const storedTodos = localStorage.getItem('todos')

  if (storedTodos) {
    const todosList = JSON.parse(storedTodos)

    todosList.forEach((todo) => {
      onAdd(todo)
    })
  }
}
