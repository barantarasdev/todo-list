import { BoardT, ColumnT, TodoT } from '@/types'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'

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
  data: unknown
  todoId: string
  columnId: string
}

export type DeleteTodoProps = {
  todoId: string
  columnId: string
}

export type SetColumnsCreatorProps = {
  boardId: string
  router: AppRouterInstance
}

export type SetBoardsCreatorProps = {
  router: AppRouterInstance
}

export type CreateBoardCreatorProps = {
  boardName: string
  router: AppRouterInstance
}

export type CreateColumnCreatorProps = {
  router: AppRouterInstance
  columnName: string
  boardId: string
}

export type UpdateColumnCreatorProps = {
  columns: ColumnT[]
  sourceColumnId: string
  destinationColumnId: string
  columnId: string
  boardId: string
  router: AppRouterInstance
}

export type CreateTodoCreatorProps = {
  todoValue: string
  boardId: string
  router: AppRouterInstance
  columnId: string
}

export type DeleteTodoCreatorProps = {
  columnId: string
  router: AppRouterInstance
  todoId: string
  boardId: string
}

export type UpdateTodoCreatorProps = {
  router: AppRouterInstance
  todoId: string
  boardId: string
  data: unknown
  columnId: string
}

export type UpdateTodoOrderCreatorProps = {
  router: AppRouterInstance
  boardId: string
  todoId: string
  sourceTodoId: string | null
  destinationTodoId: string | null
  columnId: string
  todos: TodoT[]
  startColumnId?: string | null
  startTodoList?: TodoT[]
}

export type InviteUserCreatorProps = {
  friendEmail: string
  boardId: string
}

export enum BoardsCreators {
  ASYNC_INVITE_USER = 'ASYNC_INVITE_USER',
  ASYNC_CREATE_TODO = 'ASYNC_CREATE_TODO',
  ASYNC_CREATE_COLUMN = 'ASYNC_CREATE_COL',
  ASYNC_DELETE_TODO = 'ASYNC_DELETE_TODO',
  ASYNC_UPDATE_TODO = 'ASYNC_UPDATE_TODO',
  ASYNC_SET_COLUMNS = 'ASYNC_SET_COLUMNS',
  ASYNC_SET_BOARDS = 'ASYNC_SET_BOARDS',
  ASYNC_UPDATE_COLUMN = 'ASYNC_UPDATE_COLUMN',
  ASYNC_UPDATE_TODO_ORDER = 'ASYNC_UPDATE_TODO_ORDER',
  ASYNC_SET_BOARD = 'ASYNC_SET_BOARD',
}
