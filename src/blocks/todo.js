import { ACTIONS, getTodoValues } from '../constants/index.js'
import { getFullElement } from '../helpers/index.js'
import { eventEmitter } from '../index.js'
import { deleteTodo, updateTodo } from '../api/index.js'

export class Todo {
  constructor(value, isChecked, id) {
    this.value = value
    this.isChecked = isChecked
    this.id = id
    this.TODO = ACTIONS.TODO
    this.inputCheckedClass = this.isChecked ? 'checked' : ''
    this.values = getTodoValues.bind(this)()
    this.onClickChange = this.onClickChange.bind(this)
    this.onClickRemove = this.onClickRemove.bind(this)
  }

  onClickChange = async () => {
    const newOption = { isChecked: !this.isChecked }

    try {
      await updateTodo(this.id, newOption)
      eventEmitter.emit(this.TODO.TODO_UPDATE, {
        id: this.id,
        options: { isChecked: !this.isChecked },
      })
    } catch (error) {
      console.log(error)
    }
  }

  onClickRemove = async () => {
    try {
      await deleteTodo(this.id)
      eventEmitter.emit(this.TODO.TODO_REMOVE, { id: this.id })
    } catch (error) {
      console.log(error)
    }
  }

  getElement() {
    const todo = document.createElement('li')
    todo.classList.add('todo')
    todo.dataset.id = this.id

    return getFullElement(this.values, todo)
  }
}
