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
} from '@/store/slices/boardsSlice'
import {
  BoardsCreators,
  CreateTodoCreatorProps,
  DeleteTodoCreatorProps,
  UpdateTodoCreatorProps,
  UpdateTodoOrderCreatorProps,
} from '@/store/slices/boardsSlice/types'
import {
  createTodo,
  deleteTodo,
  updateTodo,
  updateTodoOrder,
} from '@/services/todosService'
import { LogoutCreator } from '@/store/slices/userSlice/actionCreator'

function* createTodoWorker(action: PayloadAction<CreateTodoCreatorProps>) {
  const { todoValue, boardId, columnId, router } = action.payload

  try {
    const { todoId } = yield call(createTodo, boardId, columnId, todoValue)

    yield put(
      createTodoSlice({
        todo: { todoId, todoValue, todoCompleted: false, columnId },
      })
    )
  } catch (error) {
    yield put(LogoutCreator({ router }))
  }
}

function* updateTodoWorker(action: PayloadAction<UpdateTodoCreatorProps>) {
  const { columnId, todoId, data, router, boardId } = action.payload

  try {
    yield put(
      updateTodoSlice({
        columnId,
        todoId,
        data,
      })
    )
    yield call(updateTodo, boardId, columnId, todoId, data)
  } catch (error) {
    yield put(LogoutCreator({ router }))
  }
}

function* deleteTodoWorker(action: PayloadAction<DeleteTodoCreatorProps>) {
  const { todoId, columnId, boardId, router } = action.payload

  try {
    yield put(
      deleteTodoSlice({
        todoId,
        columnId,
      })
    )
    yield call(deleteTodo, boardId, columnId, todoId)
  } catch (error) {
    yield put(LogoutCreator({ router }))
  }
}

function* updateTodoOrderWorker(
  action: PayloadAction<UpdateTodoOrderCreatorProps>
) {
  const {
    router,
    todoId,
    todos,
    boardId,
    startColumnId,
    startTodoList,
    sourceTodoId,
    destinationTodoId,
    columnId,
  } = action.payload

  try {
    if (startColumnId && startTodoList) {
      yield put(
        updateTodosSlice({ columnId: startColumnId, todos: startTodoList })
      )
    }

    yield put(updateTodosSlice({ columnId, todos }))
    yield call(updateTodoOrder, boardId, columnId, todoId, {
      columnId,
      sourceTodoId,
      destinationTodoId,
    })
  } catch (error) {
    yield put(LogoutCreator({ router }))
  }
}

function* todoWatcher() {
  yield takeLeading(BoardsCreators.ASYNC_DELETE_TODO, deleteTodoWorker)
  yield takeEvery(BoardsCreators.ASYNC_CREATE_TODO, createTodoWorker)
  yield takeEvery(BoardsCreators.ASYNC_UPDATE_TODO, updateTodoWorker)
  yield takeLatest(
    BoardsCreators.ASYNC_UPDATE_TODO_ORDER,
    updateTodoOrderWorker
  )
}

export default todoWatcher
