import { DropResult } from 'react-beautiful-dnd'
import { Dispatch } from 'redux'

import { ColumnT, TodoT } from '@/types'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'

export type ColumnListProps = {
  columns: ColumnT[]
}

export type GetSplicedListProps<T> = {
  list: T[]
  from: number
  to: number
}

export type GetColumnProps = {
  columns: ColumnT[]
  columnId: string
}

export type GetTodoIndexProps = {
  todos: TodoT[]
  todoId: string
}

export type HandleDragProps = {
  columns: ColumnT[]
  result: DropResult
  dispatch: Dispatch
  boardId: string
  router: AppRouterInstance
}
