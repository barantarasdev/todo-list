import { ColumnT, TodoT } from '@/types'

export type TodoListProps = {
  todos: TodoT[]
  columnId: string
}

export type ColumnProps = {
  column: ColumnT
  index: number
}

export type UseColumnProps = {
  columnId: string
  boardId: string
}
