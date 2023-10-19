'use strict'

import { eventEmitter, store } from './store/store.js'
import {
  saveTodoToLocalStorage,
  editTodoToLocalStorage,
} from './localeStorage/index.js'
import { generateId } from './helpers/index.js'
import { ACTIONS } from './constants/index.js'
import { Todos } from './blocks/todos.js'

const {
  TODO: { TODO_CREATE, TODO_UPDATE },
  TODO,
  STATE_CHANGE,
} = ACTIONS

eventEmitter.subscribe(STATE_CHANGE, () => {
  new Todos(eventEmitter).render()
})

Object.values(TODO).forEach((item) => {
  eventEmitter.subscribe(item, (payload) => {
    store.dispatch(item, payload)
  })
})

document.addEventListener('DOMContentLoaded', () => {
  const app = document.querySelector('#app')
  const header = app.querySelector('.header')
  const form = header.querySelector('.form')

  const main = app.querySelector('.main')
  const todos = main.querySelector('.todos')

  renderTodoFromLocaleStorage()

  form.addEventListener('submit', (e) => {
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
  })
  todos.addEventListener('click', handleClickTodos)
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
