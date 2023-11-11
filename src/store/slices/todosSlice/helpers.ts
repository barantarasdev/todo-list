import { ColT, TodoT } from 'src/types'

export function getColumn(colId: string, columns: ColT[]) {
  return columns.find(col => col.colId === colId)
}

export function getFilterTodos(todoId: string, todos: TodoT[]) {
  return todos.filter(todo => todo.todoId !== todoId)
}

export function getTodoIndex(todoId: string, todos: TodoT[]) {
  return todos.findIndex(todo => todo.todoId === todoId)
}
