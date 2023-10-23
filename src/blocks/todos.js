import { ACTIONS } from '../constants/index.js'
import { editTodoToLocalStorage } from '../api/index.js'
import { Todo } from './todo.js'
import { eventEmitter, store } from '../index.js'

export class Todos {
  constructor() {
    this.TODO_UPDATE = ACTIONS.TODO.TODO_UPDATE
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick = (e) => {
    const { target } = e
    const todo = target.closest('li')

    if (!todo) {
      return
    }

    const todoValue = todo.querySelector('.todo__value')
    const saveButton = todo.querySelector('.todo__button--save')
    const { id } = todo.dataset

    const saveValue = () => {
      todoValue.setAttribute('readonly', 'true')
      todoValue.classList.remove('todo__value--edit')
      saveButton.classList.remove('enabled')

      const value = todoValue.value

      eventEmitter.emit(this.TODO_UPDATE, { id, options: { value } })
      editTodoToLocalStorage({ value }, id)
    }

    todoValue.addEventListener('blur', saveValue)
    todoValue.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        saveValue()
      }
    })
    const { classList } = target
    const isEditing =
      classList.contains('todo__value') && !classList.contains('checked')

    if (isEditing) {
      e.preventDefault()

      todoValue.removeAttribute('readonly')
      todoValue.classList.add('todo__value--edit')
      saveButton.classList.add('enabled')

      return
    }

    if (classList.contains('todo__button--save')) {
      saveValue()
    }
  }

  render = () => {
    const todoList = document.querySelector('.todos')
    todoList.innerHTML = ''

    store.state.todos.forEach(({ value, isChecked, id }) => {
      const todo = new Todo(value, isChecked, id).getElement()

      todoList.appendChild(todo)
    })
    todoList.addEventListener('click', this.handleClick)
  }
}
