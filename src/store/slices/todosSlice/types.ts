import { ColT, TodoT, UpdateTodoT } from 'src/types'

export type ColsStateT = {
  cols: ColT[]
}

export type CreateTodoRT = {
  todo: TodoT
  colId: string
}

export type UpdateColRT = {
  colId: string
  todos: TodoT[]
}

export type UpdateTodoRT = {
  todo: UpdateTodoT
  colId: string
  todoId: string
}
export type DeleteTodoPR = {
  todoId: string
  colId: string
}

export type UpdateColCreatorPT = {
  cols: ColT[]
  sourceCol: ColT
  destinationCol: ColT
  colId: string
}

export type UpdateTodoOrderCreatorPT = {
  todoId: string
  sourceTodo: TodoT | null
  destinationTodo: TodoT | null
  colId: string
  todos: TodoT[]
  startColId?: string | null
  startTodoList?: TodoT[]
}

export enum ColsCreators {
  ASYNC_CREATE_TODO = 'async_create_todo',
  ASYNC_CREATE_COL = 'async_create_col',
  ASYNC_DELETE_TODO = 'async_delete_todo',
  ASYNC_UPDATE_TODO = 'async_update_todo',
  ASYNC_SET_COLS = 'async_set_cols',
  ASYNC_UPDATE_COL = 'async_update_cols',
  ASYNC_UPDATE_TODO_ORDER = 'async_update_todo_order',
}
