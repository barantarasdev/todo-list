import {
  ColsCreators,
  UpdateColCreatorPT,
  UpdateTodoOrderCreatorPT,
} from 'src/store/slices/todosSlice/types'
import { CreateTodoT, UpdateTodoT } from 'src/types'

export const setColsCreator = (id: string) => ({
  type: ColsCreators.ASYNC_SET_COLS,
  payload: id,
})

export const createColsCreator = (name: string) => ({
  type: ColsCreators.ASYNC_CREATE_COL,
  payload: name,
})

export const createTodoCreator = (colId: string, todo: CreateTodoT) => ({
  type: ColsCreators.ASYNC_CREATE_TODO,
  payload: { todo, colId },
})

export const deleteTodoCreator = (colId: string, todoId: string) => ({
  type: ColsCreators.ASYNC_DELETE_TODO,
  payload: { colId, todoId },
})

export const updateTodoCreator = (
  colId: string,
  todoId: string,
  todo: UpdateTodoT
) => ({
  type: ColsCreators.ASYNC_UPDATE_TODO,
  payload: { colId, todoId, todo },
})

export const updateColCreator = ({
  cols,
  sourceCol,
  destinationCol,
  colId,
}: UpdateColCreatorPT) => ({
  type: ColsCreators.ASYNC_UPDATE_COL,
  payload: { sourceCol, cols, destinationCol, colId },
})

export const updateTodoOrderCreator = ({
  todoId,
  sourceTodo,
  destinationTodo,
  colId,
  todos,
  startColId = null,
  startTodoList = [],
}: UpdateTodoOrderCreatorPT) => ({
  type: ColsCreators.ASYNC_UPDATE_TODO_ORDER,
  payload: {
    todoId,
    todos,
    startColId,
    startTodoList,
    destinationTodo,
    sourceTodo,
    colId,
  },
})
