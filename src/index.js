'use strict'

import { Todo } from './blocks/todo.js'
import { generateId } from './helpers/generateId.js'
import {
  saveTodoToLocalStorage,
  editTodoToLocalStorage,
  removeTodoToLocalStorage,
} from './localeStorage/index.js'
import { EE } from './store/eventEmitter.js'
import { Store } from './store/store.js'

const subscribes = [
  'add_todo',
  'change_todo',
  'remove_todo',
  'change_checkbox_todo',
]
const eventEmitter = new EE()
const store = new Store()

subscribes.forEach((item) => {
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

  const featureForm = main.querySelector('.feature__form')

  renderTodoFromLocaleStorage()

  app.addEventListener('submit', (e) => {
    e.preventDefault()
    const { target } = e

    if (target !== form && target !== featureForm) {
      return
    }

    const input = target.querySelector('.input')
    const value = input.value

    if (value.length <= 0) {
      input.classList.add('input--red')

      return
    }

    const id = generateId()
    const newTodo = new Todo(value, false, id, onRemove, onCheck)

    switch (target) {
      case form:
        onAdd(newTodo)
        saveTodoToLocalStorage({ ...newTodo })

        break
      default:
        handleClickFeature(e, value)
    }

    input.classList.remove('input--red')
    input.value = ''
  })
  todos.addEventListener('click', handleClickTodos)
})

function onRemove(id) {
  eventEmitter.emit('remove_todo', { id })
  removeTodoToLocalStorage(id)
}

function onAdd(newTodo) {
  eventEmitter.emit('add_todo', { ...newTodo })
}

function onCheck({ isChecked }, id) {
  eventEmitter.emit('change_checkbox_todo', { id, isChecked })
}

function onChangeValue(id, value) {
  eventEmitter.emit('change_todo', { id, value })
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

    editTodoToLocalStorage({ value: todoValue.value }, +dataset.id)
    onChangeValue(+dataset.id, todoValue.value)
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

      return
    }
  }

  handleTodoClick()
}

function handleClickFeature(e, featureValue) {
  const featureBlock = document.querySelector('.feature__block')

  featureBlock.innerHTML = featureValue
}

function renderTodoFromLocaleStorage() {
  const storedTodos = localStorage.getItem('todos')

  if (storedTodos) {
    const todosList = JSON.parse(storedTodos)

    todosList.forEach(({ value, isChecked, id }) => {
      const todo = new Todo(value, isChecked, id, onRemove, onCheck)

      onAdd(todo)
    })
  }
}
