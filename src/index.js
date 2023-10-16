import {Todo} from './blocks/todo.js'
import {saveTodoToLocalStorage, editTodoToLocalStorage, removeTodoToLocalStorage} from './localeStorage/index.js'

function addEventsToTodo (todo) {
  const checkbox = todo.querySelector('.todo__input')
  const todoValue = todo.querySelector('.todo__value')
  const saveButton = todo.querySelector('.todo__button--save')
  const removeButton = todo.querySelector('.todo__button--remove')

  const { dataset } = todo

  function saveNewValue() {
    todoValue.setAttribute('readonly', 'true')
    todoValue.classList.remove('todo__value--edit')
    saveButton.classList.remove('todo__button--save--visible')

    editTodoToLocalStorage({ value: todoValue.value }, dataset.id)
  }

  function handleTodoClick(e) {
    const { classList } = e.target
    const isEditing = classList.contains('todo__value') &&
      !classList.contains('todo__value--checked');

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

  function handleCheckboxChange({ target: { checked } }) {
    todoValue.classList.toggle('todo__value--checked', checked);
    editTodoToLocalStorage({ isChecked: checked }, dataset.id);
  }

  todo.addEventListener('click', handleTodoClick)
  checkbox.addEventListener('change', handleCheckboxChange)
  todoValue.addEventListener('blur', saveNewValue)
}

document.addEventListener('DOMContentLoaded', () => {
  const app = document.querySelector('#app')
  const header = app.querySelector('.header')
  const form = header.querySelector('.form')
  const input = form.querySelector('.header__input')

  const main = app.querySelector('.main')
  const todos = main.querySelector('.todos')

  const storedTodos = localStorage.getItem('todos')

  if (storedTodos) {
    const todosList = JSON.parse(storedTodos)

    todosList.forEach(({ value, isChecked, id }) => {
      const todo = new Todo(value, isChecked, id)

      todos.insertAdjacentHTML('beforeend', todo.toHtml())

      addEventsToTodo(todos.lastElementChild)
    })
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault()

    const value = input.value

    if (value.length <= 0) {
      input.classList.add('header__input--red')

      return
    }

    input.classList.remove('header__input--red')

    const id = new Date().valueOf()
    const newTodo = new Todo(value, false, id)

    todos.insertAdjacentHTML('beforeend', newTodo.toHtml())

    const todo = todos.lastElementChild

    input.value = ''

    addEventsToTodo(todo)
    saveTodoToLocalStorage(value, false, todo.dataset.id)
  })
})
