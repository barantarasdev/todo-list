import {
  BoardsCreators,
  CreateBoardCreatorProps,
  CreateColumnCreatorProps,
  CreateTodoCreatorProps,
  DeleteTodoCreatorProps,
  InviteUserCreatorProps,
  SetBoardsCreatorProps,
  SetColumnsCreatorProps,
  UpdateColumnCreatorProps,
  UpdateSocketIdCreatorsProps,
  UpdateTodoCreatorProps,
  UpdateTodoOrderCreatorProps,
} from '@/store/slices/boardsSlice/types'

export const setColumnsCreator = ({
  boardId,
  router,
}: SetColumnsCreatorProps) => ({
  type: BoardsCreators.ASYNC_SET_COLUMNS,
  payload: { boardId, router },
})

export const setBoardsCreator = ({ router }: SetBoardsCreatorProps) => ({
  type: BoardsCreators.ASYNC_SET_BOARDS,
  payload: { router },
})

export const createBoardCreator = ({
  boardName,
  router,
}: CreateBoardCreatorProps) => ({
  type: BoardsCreators.ASYNC_SET_BOARD,
  payload: { boardName, router },
})

export const createColumnCreator = ({
  columnName,
  boardId,
  router,
}: CreateColumnCreatorProps) => ({
  type: BoardsCreators.ASYNC_CREATE_COLUMN,
  payload: { columnName, boardId, router },
})

export const updateColumnCreator = ({
  boardId,
  columns,
  sourceColumnId,
  destinationColumnId,
  columnId,
  router,
}: UpdateColumnCreatorProps) => ({
  type: BoardsCreators.ASYNC_UPDATE_COLUMN,
  payload: {
    boardId,
    columns,
    sourceColumnId,
    destinationColumnId,
    router,
    columnId,
  },
})

export const createTodoCreator = ({
  todoValue,
  boardId,
  router,
  columnId,
}: CreateTodoCreatorProps) => ({
  type: BoardsCreators.ASYNC_CREATE_TODO,
  payload: { todoValue, boardId, columnId, router },
})

export const deleteTodoCreator = ({
  router,
  columnId,
  todoId,
  boardId,
}: DeleteTodoCreatorProps) => ({
  type: BoardsCreators.ASYNC_DELETE_TODO,
  payload: { columnId, router, todoId, boardId },
})

export const updateTodoCreator = ({
  todoId,
  data,
  boardId,
  router,
  columnId,
}: UpdateTodoCreatorProps) => ({
  type: BoardsCreators.ASYNC_UPDATE_TODO,
  payload: { todoId, router, boardId, data, columnId },
})

export const updateTodoOrderCreator = ({
  todoId,
  router,
  sourceTodoId,
  destinationTodoId,
  columnId,
  todos,
  boardId,
  startColumnId = null,
  startTodoList = [],
}: UpdateTodoOrderCreatorProps) => ({
  type: BoardsCreators.ASYNC_UPDATE_TODO_ORDER,
  payload: {
    boardId,
    todoId,
    todos,
    startColumnId,
    startTodoList,
    destinationTodoId,
    sourceTodoId,
    columnId,
    router,
  },
})

export const updateSocketIdCreator = ({
  router,
  sockedId,
  boardId,
}: UpdateSocketIdCreatorsProps) => ({
  type: BoardsCreators.ASYNC_UPDATE_SOCKET_ID,
  payload: {
    sockedId,
    router,
    boardId,
  },
})

export const InviteUserCreator = ({
  friendEmail,
  boardId,
}: InviteUserCreatorProps) => ({
  type: BoardsCreators.ASYNC_INVITE_USER,
  payload: { friendEmail, boardId },
})
