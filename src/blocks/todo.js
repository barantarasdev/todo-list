import { ACTIONS, getTodoValues } from '../constants/index.js'
import { getFullElement } from '../helpers/index.js'
import { eventEmitter } from '../index.js'
import { deleteTodo, updateTodo } from '../api/index.js'

export class Todo {
  constructor({ todo_value, todo_completed, todo_id }) {
    this.todo_value = todo_value
    this.todo_completed = todo_completed
    this.todo_id = todo_id
    this.TODO = ACTIONS.TODO
    this.inputCheckedClass = this.todo_completed ? 'checked' : ''
    this.values = getTodoValues.bind(this)()
    this.onClickChange = this.onClickChange.bind(this)
    this.onClickRemove = this.onClickRemove.bind(this)
  }

  onClickChange = async () => {
    const newOption = { todo_completed: !this.todo_completed }

    try {
      await updateTodo(this.todo_id, newOption)
      eventEmitter.emit(this.TODO.TODO_UPDATE, {
        todo_id: this.todo_id,
        options: newOption,
      })
    } catch (error) {
      console.log(error)
    }
  }

  onClickRemove = async () => {
    try {
      await deleteTodo(this.todo_id)
      eventEmitter.emit(this.TODO.TODO_REMOVE, { todo_id: this.todo_id })
    } catch (error) {
      console.log(error)
    }
  }

  getElement() {
    const todo = document.createElement('li')
    todo.classList.add('todo')
    todo.dataset.id = this.todo_id

    return getFullElement(this.values, todo)
  }
}
