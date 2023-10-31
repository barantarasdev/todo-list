import { ACTIONS } from '../constants/index.js'
import { Todo } from './todo.js'
import { eventEmitter, store } from '../index.js'
import { updateTodo } from '../api/index.js'
import { removeTodo } from '../helpers/index.js'

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

    const saveValue = async () => {
      if (saveButton.disabled) {
        return
      }

      const todo_value = todoValue.value

      if (!todo_value.length) {
        saveButton.disabled = true
        await removeTodo(id)
        saveButton.disabled = false

        return
      }

      todoValue.setAttribute('readonly', 'true')
      todoValue.classList.remove('todo__value--edit')
      saveButton.classList.remove('enabled')

      await updateTodo(id, { todo_value })
      eventEmitter.emit(this.TODO_UPDATE, {
        todo_id: id,
        options: { todo_value, todo_completed: false },
      })
    }

    if (!todoValue.dataset.listenersAttached) {
      todoValue.addEventListener('blur', saveValue)
      todoValue.addEventListener('keydown', async (e) => {
        if (e.key === 'Enter') {
          saveValue()
        }
      })
      todoValue.dataset.listenersAttached = 'true'
    }

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
    store.state.todos.forEach((todo) => {
      const newTodo = new Todo(todo).getElement()

      todoList.appendChild(newTodo)
    })
    todoList.addEventListener('click', this.handleClick)
  }
}
