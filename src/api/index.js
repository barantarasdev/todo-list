import { ACTIONS } from '../constants/index.js'
import {
  getDataFromLocaleStorage,
  setDataToLocaleStorage,
} from '../localeStorage/index.js'
import { eventEmitter } from '../index.js'

export function saveTodoToLocalStorage(todo) {
  const todos = getDataFromLocaleStorage('todos')
  let newTodo = []

  if (todos) {
    newTodo = [...todos]
  }

  setDataToLocaleStorage('todos', [...newTodo, todo])
}

export function removeTodoToLocalStorage(id) {
  const todos = getDataFromLocaleStorage('todos')
  const newTodo = todos.filter((todo) => todo.id !== +id)

  setDataToLocaleStorage('todos', [...newTodo])
}

export function editTodoToLocalStorage(newOptions, id) {
  const todos = getDataFromLocaleStorage('todos')

  const newTodos = todos.map((todo) =>
    todo.id === +id ? { ...todo, ...newOptions } : todo,
  )

  setDataToLocaleStorage('todos', [...newTodos])
}

export function renderTodosFromLocaleStorage() {
  const {
    TODO: { TODO_CREATE },
  } = ACTIONS
  const todos = getDataFromLocaleStorage('todos')

  if (todos) {
    todos.forEach((todo) => {
      eventEmitter.emit(TODO_CREATE, { ...todo })
    })
  }
}
