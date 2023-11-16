import { PayloadAction } from '@reduxjs/toolkit'
import {
  call,
  put,
  takeEvery,
  takeLatest,
  takeLeading,
} from 'redux-saga/effects'

import {
  createTodo as createTodoSlice,
  deleteTodo as deleteTodoSlice,
  updateTodo as updateTodoSlice,
  updateTodos as updateTodosSlice,
} from '@/store/slices/columnSlice'
import {
  createTodo,
  deleteTodo,
  updateTodo,
  updateTodoOrder,
} from '@/services/todoServices'
import {
  ColsCreators,
  CreateTodoCreatorProps,
  DeleteTodoCreatorProps,
  UpdateTodoCreatorProps,
  UpdateTodoOrderCreatorProps,
} from '@/store/slices/columnSlice/types'
import { TodoT } from '@/types'

function* createTodoWorker(action: PayloadAction<CreateTodoCreatorProps>) {
  const { todo } = action.payload

  const { todoId } = yield call(createTodo, todo)

  yield put(
    createTodoSlice({
      todo: { todoId, ...todo },
    })
  )
}

function* updateTodoWorker(action: PayloadAction<UpdateTodoCreatorProps>) {
  const { columnId, todoId, todo } = action.payload

  yield call(updateTodo, todoId, todo)

  yield put(
    updateTodoSlice({
      columnId,
      todoId,
      todo,
    })
  )
}

function* deleteTodoWorker(action: PayloadAction<DeleteTodoCreatorProps>) {
  const { todoId, columnId } = action.payload

  yield put(
    deleteTodoSlice({
      todoId,
      columnId,
    })
  )
  yield call(deleteTodo, todoId)
}

function* updateTodoOrderWorker(
  action: PayloadAction<UpdateTodoOrderCreatorProps>
) {
  const {
    todoId,
    todos,
    startColumnId,
    startTodoList,
    destinationTodo,
    sourceTodo,
    columnId,
  } = action.payload

  if (startColumnId && startTodoList) {
    yield put(
      updateTodosSlice({ columnId: startColumnId, todos: startTodoList })
    )
  }

  yield put(updateTodosSlice({ columnId, todos }))
  yield call(
    updateTodoOrder,
    todoId,
    columnId,
    sourceTodo as TodoT,
    destinationTodo as TodoT
  )
}

function* todoWatcher() {
  yield takeLeading(ColsCreators.ASYNC_DELETE_TODO, deleteTodoWorker)
  yield takeEvery(ColsCreators.ASYNC_CREATE_TODO, createTodoWorker)
  yield takeEvery(ColsCreators.ASYNC_UPDATE_TODO, updateTodoWorker)
  yield takeLatest(ColsCreators.ASYNC_UPDATE_TODO_ORDER, updateTodoOrderWorker)
}

export default todoWatcher
