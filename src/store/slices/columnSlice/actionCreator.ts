import {
  ColsCreators,
  CreateBoardCreatorProps,
  CreateColumnCreatorProps,
  CreateTodoCreatorProps,
  DeleteTodoCreatorProps,
  SetBoardsCreatorProps,
  SetColumnsCreatorProps,
  UpdateColumnCreatorProps,
  UpdateTodoCreatorProps,
  UpdateTodoOrderCreatorProps,
} from '@/store/slices/columnSlice/types'

export const setColumnsCreator = ({ boardId }: SetColumnsCreatorProps) => ({
  type: ColsCreators.ASYNC_SET_COLUMNS,
  payload: { boardId },
})

export const setBoardsCreator = ({ userId }: SetBoardsCreatorProps) => ({
  type: ColsCreators.ASYNC_SET_BOARDS,
  payload: { userId },
})

export const createBoardCreator = ({
  userId,
  boardName,
}: CreateBoardCreatorProps) => ({
  type: ColsCreators.ASYNC_SET_BOARD,
  payload: { userId, boardName },
})

export const createColumnCreator = ({
  columnName,
  boardId,
}: CreateColumnCreatorProps) => ({
  type: ColsCreators.ASYNC_CREATE_COLUMN,
  payload: { columnName, boardId },
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

export const createTodoCreator = ({ todo }: CreateTodoCreatorProps) => ({
  type: ColsCreators.ASYNC_CREATE_TODO,
  payload: { todo },
})

export const deleteTodoCreator = ({
  columnId,
  todoId,
}: DeleteTodoCreatorProps) => ({
  type: ColsCreators.ASYNC_DELETE_TODO,
  payload: { columnId, todoId },
})

export const updateTodoCreator = ({
  todoId,
  todo,
  columnId,
}: UpdateTodoCreatorProps) => ({
  type: ColsCreators.ASYNC_UPDATE_TODO,
  payload: { todoId, todo, columnId },
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
