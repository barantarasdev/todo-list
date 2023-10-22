import { ACTIONS } from '../constants/index.js'
import {
  getDataFromLocaleStorage,
  setDataToLocaleStorage,
} from '../localeStorage/index.js'
import { eventEmitter } from '../index.js'

export function saveTodoToLocalStorage(todo) {
  const user = getDataFromLocaleStorage('user')
  let newTodos = []

  if (user) {
    newTodos = [...user.todos]
  }

  setDataToLocaleStorage('user', { ...user, todos: [...newTodos, todo] })
}

export function removeTodoToLocalStorage(id) {
  const user = getDataFromLocaleStorage('user')

  if (user) {
    const newTodos = user.todos.filter((todo) => todo.id !== +id)

    setDataToLocaleStorage('user', { ...user, todos: newTodos })
  }
}

export function editTodoToLocalStorage(newOptions, id) {
  const user = getDataFromLocaleStorage('user')

  if (user) {
    const newTodos = user.todos.map((todo) =>
      todo.id === +id ? { ...todo, ...newOptions } : todo,
    )

    setDataToLocaleStorage('user', { ...user, todos: newTodos })
  }
}

export function renderTodosFromLocaleStorage() {
  const {
    TODO: { TODO_CREATE },
  } = ACTIONS
  const user = getDataFromLocaleStorage('user')

  if (user) {
    user.todos.forEach((todo) => {
      eventEmitter.emit(TODO_CREATE, { ...todo })
    })
  }
}
