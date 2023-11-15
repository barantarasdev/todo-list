import {
  ColsCreators,
  CreateColumnCreatorProps,
  CreateTodoCreatorProps,
  DeleteTodoCreatorProps,
  SetColumnsCreatorProps,
  UpdateColumnCreatorProps,
  UpdateTodoCreatorProps,
  UpdateTodoOrderCreatorProps,
} from '@/store/slices/columnSlice/types'

export const setColumnsCreator = ({ userId }: SetColumnsCreatorProps) => ({
  type: ColsCreators.ASYNC_SET_COLUMNS,
  payload: { userId },
})

export const createColumnCreator = ({
  columnName,
}: CreateColumnCreatorProps) => ({
  type: ColsCreators.ASYNC_CREATE_COLUMN,
  payload: { columnName },
})

export const updateColumnCreator = ({
  columns,
  sourceColumn,
  destinationColumn,
  columnId,
}: UpdateColumnCreatorProps) => ({
  type: ColsCreators.ASYNC_UPDATE_COLUMN,
  payload: { columns, sourceColumn, destinationColumn, columnId },
})

export const createTodoCreator = ({
  columnId,
  todo,
}: CreateTodoCreatorProps) => ({
  type: ColsCreators.ASYNC_CREATE_TODO,
  payload: { todo, columnId },
})

export const deleteTodoCreator = ({
  columnId,
  todoId,
}: DeleteTodoCreatorProps) => ({
  type: ColsCreators.ASYNC_DELETE_TODO,
  payload: { columnId, todoId },
})

export const updateTodoCreator = ({
  columnId,
  todoId,
  todo,
}: UpdateTodoCreatorProps) => ({
  type: ColsCreators.ASYNC_UPDATE_TODO,
  payload: { columnId, todoId, todo },
})

export const updateTodoOrderCreator = ({
  todoId,
  sourceTodo,
  destinationTodo,
  columnId,
  todos,
  startColumnId = null,
  startTodoList = [],
}: UpdateTodoOrderCreatorProps) => ({
  type: ColsCreators.ASYNC_UPDATE_TODO_ORDER,
  payload: {
    todoId,
    todos,
    startColumnId,
    startTodoList,
    destinationTodo,
    sourceTodo,
    columnId,
  },
})
