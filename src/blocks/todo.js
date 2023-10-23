import { ACTIONS, getTodoValues } from '../constants/index.js'
import {
  editTodoToLocalStorage,
  removeTodoToLocalStorage,
} from '../api/index.js'
import { getFullElement } from '../helpers/index.js'
import { eventEmitter } from '../index.js'

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

  onClickChange = () => {
    const newOption = { isChecked: !this.isChecked }

    eventEmitter.emit(this.TODO.TODO_UPDATE, {
      id: this.id,
      options: { isChecked: !this.isChecked },
    })
    editTodoToLocalStorage(newOption, this.id)
  }

  onClickRemove = () => {
    eventEmitter.emit(this.TODO.TODO_REMOVE, { id: this.id })
    removeTodoToLocalStorage(this.id)
  }

  getElement() {
    const todo = document.createElement('li')
    todo.classList.add('todo')
    todo.dataset.id = this.id

    return getFullElement(this.values, todo)
  }
}
