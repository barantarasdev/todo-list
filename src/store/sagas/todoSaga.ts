import { PayloadAction } from '@reduxjs/toolkit'
import {
  call,
  put,
  takeEvery,
  takeLatest,
  takeLeading,
} from 'redux-saga/effects'
import {
  createTodo,
  deleteTodo,
  updateTodo,
  updateTodoOrder,
} from 'src/services/todoService'
import {
  CreateTodoWorkerPayloadT,
  UpdateTodoOrderWorkerT,
  UpdateTodoWorkerPayloadT,
} from 'src/store/sagas/types'
import {
  createTodo as createTodoSlice,
  deleteTodo as deleteTodoSlice,
  updateTodo as updateTodoSlice,
  updateTodos,
} from 'src/store/slices/todosSlice'
import { ColsCreators, DeleteTodoPR } from 'src/store/slices/todosSlice/types'

function* updateTodoOrderWorker(action: PayloadAction<UpdateTodoOrderWorkerT>) {
  const {
    sourceTodo,
    startColId,
    startTodoList,
    destinationTodo,
    colId,
    todoId,
    todos,
  } = action.payload

  if (startColId) {
    yield put(updateTodos({ colId: startColId, todos: startTodoList }))
  }

  yield put(updateTodos({ colId, todos }))

  yield call(updateTodoOrder, todoId, sourceTodo, destinationTodo, colId)
}

function* createTodoWorker(action: PayloadAction<CreateTodoWorkerPayloadT>) {
  const { colId, todo: apTodo } = action.payload

  const { todoId } = yield call(createTodo, colId, apTodo)

  yield put(
    createTodoSlice({
      colId,
      todo: { todoId, ...apTodo },
    })
  )
}

function* deleteTodoWorker(action: PayloadAction<DeleteTodoPR>) {
  const { todoId, colId } = action.payload

  yield call(deleteTodo, todoId)
  yield put(
    deleteTodoSlice({
      todoId,
      colId,
    })
  )
}

function* updateTodoWorker(action: PayloadAction<UpdateTodoWorkerPayloadT>) {
  const { colId, todoId, todo } = action.payload

  yield call(updateTodo, todoId, todo)

  yield put(
    updateTodoSlice({
      colId,
      todoId,
      todo,
    })
  )
}

function* todoWatcher() {
  yield takeLeading(ColsCreators.ASYNC_DELETE_TODO, deleteTodoWorker)
  yield takeEvery(ColsCreators.ASYNC_CREATE_TODO, createTodoWorker)
  yield takeEvery(ColsCreators.ASYNC_UPDATE_TODO, updateTodoWorker)
  yield takeLatest(ColsCreators.ASYNC_UPDATE_TODO_ORDER, updateTodoOrderWorker)
}

export default todoWatcher
