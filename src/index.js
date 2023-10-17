'use strict'

import { Todo } from './blocks/todo.js'
import {
  saveTodoToLocalStorage,
  editTodoToLocalStorage,
  removeTodoToLocalStorage,
} from './localeStorage/index.js'
import { generateId } from './helpers/generateId.js'

document.addEventListener('DOMContentLoaded', () => {
  const app = document.querySelector('#app')
  const header = app.querySelector('.header')
  const form = header.querySelector('.form')

  const main = app.querySelector('.main')
  const todos = main.querySelector('.todos')

  const featureForm = main.querySelector('.feature__form')

  renderTodoFromLocaleStorage(todos)

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

    switch (target) {
      case form:
        handleSubmitForm(e, value, todos)

        break
      default:
        handleClickFeature(e, value)
    }

    input.classList.remove('input--red')
    input.value = ''
  })
  todos.addEventListener('click', handleClickTodos)
})

function handleClickTodos(e) {
  const { target } = e
  const todo = target.closest('li')

  if (!todo) {
    return
  }

  const checkbox = todo.querySelector('.todo__input')
  const todoValue = todo.querySelector('.todo__value')
  const saveButton = todo.querySelector('.todo__button--save')
  const removeButton = todo.querySelector('.todo__button--remove')

  const { dataset } = todo

  todoValue.addEventListener('blur', saveNewValue)

  function saveNewValue() {
    todoValue.setAttribute('readonly', 'true')
    todoValue.classList.remove('todo__value--edit')
    saveButton.classList.remove('todo__button--save--visible')

    editTodoToLocalStorage({ value: todoValue.value }, dataset.id)
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

    if (classList.contains('todo__button--remove')) {
      const parentTodo = removeButton.closest('li')

      if (parentTodo) {
        parentTodo.remove()

        removeTodoToLocalStorage(dataset.id)
      }

      return
    }
  }

  function handleCheckboxChange() {
    todoValue.classList.toggle('todo__value--checked', target.checked)
    editTodoToLocalStorage({ isChecked: target.checked }, dataset.id)
  }

  if (target === checkbox) {
    handleCheckboxChange()

    return
  }

  handleTodoClick()
}

function handleSubmitForm(e, value, todos) {
  const newTodo = new Todo(value, false, generateId()).getElement()

  todos.append(newTodo)

  saveTodoToLocalStorage(value, false, newTodo.dataset.id)
}

function handleClickFeature(e, featureValue) {
  const featureBlock = document.querySelector('.feature__block')

  featureBlock.innerHTML = featureValue
}

function renderTodoFromLocaleStorage(todos) {
  const storedTodos = localStorage.getItem('todos')

  if (storedTodos) {
    const todosList = JSON.parse(storedTodos)

    todosList.forEach(({ value, isChecked, id }) => {
      const todo = new Todo(value, isChecked, id)

      todos.append(todo.getElement())
    })
  }
}
