import { Todo } from './todo.js'
import { store } from '../store/store.js'

export class Todos {
  constructor(eventEmitter) {
    this.eventEmitter = eventEmitter
  }

  render = () => {
    const todoList = document.querySelector('.todos')
    todoList.innerHTML = ''

    store.state.todos.forEach(({ value, isChecked, id }) => {
      const todo = new Todo(
        value,
        isChecked,
        id,
        this.eventEmitter,
      ).getElement()

      todoList.appendChild(todo)
    })
  }
}
