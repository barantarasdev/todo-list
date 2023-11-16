import { BoardT, ColumnT, CreateTodoT, TodoT, UpdateTodoT } from '@/types'

export type ColumnsStateT = {
  columns: ColumnT[]
  boards: BoardT[]
}

export type UpdateColumnProps = {
  columnId: string
  todos: TodoT[]
}

export type CreateTodoProps = {
  todo: TodoT
}

export type UpdateTodoProps = {
  todo: UpdateTodoT
  todoId: string
  columnId: string
}

export type DeleteTodoProps = {
  todoId: string
  columnId: string
}

export type SetColumnsCreatorProps = {
  boardId: string
}

export type SetBoardsCreatorProps = {
  userId: string
}

export type CreateBoardCreatorProps = {
  userId: string
  boardName: string
}

export type CreateColumnCreatorProps = {
  columnName: string
  boardId: string
}

export type UpdateColumnCreatorProps = {
  columns: ColumnT[]
  sourceColumn: ColumnT
  destinationColumn: ColumnT
  columnId: string
}

export type CreateTodoCreatorProps = {
  todo: CreateTodoT
}

export type DeleteTodoCreatorProps = {
  columnId: string
  todoId: string
}

export type UpdateTodoCreatorProps = {
  todoId: string
  todo: UpdateTodoT
  columnId: string
}

export type UpdateTodoOrderCreatorProps = {
  todoId: string
  sourceTodo: TodoT | null
  destinationTodo: TodoT | null
  columnId: string
  todos: TodoT[]
  startColumnId?: string | null
  startTodoList?: TodoT[]
}

export enum ColsCreators {
  ASYNC_CREATE_TODO = 'ASYNC_CREATE_TODO',
  ASYNC_CREATE_COLUMN = 'ASYNC_CREATE_COL',
  ASYNC_DELETE_TODO = 'ASYNC_DELETE_TODO',
  ASYNC_UPDATE_TODO = 'ASYNC_UPDATE_TODO',
  ASYNC_SET_COLUMNS = 'ASYNC_SET_COLUMNS',
  ASYNC_SET_BOARDS = 'ASYNC_SET_BOARDS',
  ASYNC_UPDATE_COLUMN = 'ASYNC_UPDATE_COL',
  ASYNC_UPDATE_TODO_ORDER = 'ASYNC_UPDATE_TODO_ORDER',
  ASYNC_SET_BOARD = 'ASYNC_SET_BOARD',
}
