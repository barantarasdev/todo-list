import { ColumnT, TodoT } from '@/types'

export function getColumn(columnId: string, columns: ColumnT[]) {
  return columns.find(column => column.columnId === columnId)
}

export function getFilterTodos(todoId: string, todos: TodoT[]) {
  return todos.filter(todo => todo.todoId !== todoId)
}

export function getTodoIndex(todoId: string, todos: TodoT[]) {
  return todos.findIndex(todo => todo.todoId === todoId)
}
