import {PayloadAction} from '@reduxjs/toolkit'
import {put, call, takeEvery} from 'redux-saga/effects'
import {
  deleteTodo,
  createTodo,
  getTodos,
  updateTodo,
} from 'src/services/todoService'
import {
  deleteTodo as deleteTodoSlice,
  createTodo as createTodoSlice,
  updateTodo as updateTodoSlice,
  setTodos,
} from 'src/store/slices/todosSlice'
import {TodosCreators} from 'src/store/slices/todosSlice/types'
import {CreateTodoT, UpdateTodoT} from 'src/types'

function* setTodosWorker(action: PayloadAction<string>) {
  const {todos} = yield call(getTodos, action.payload)
  yield put(setTodos(todos))
}

function* createTodoWorker(action: PayloadAction<CreateTodoT>) {
  const {todo_id} = yield call(createTodo, action.payload)
  yield put(createTodoSlice({...action.payload, todo_id}))
}

function* deleteTodoWorker(action: PayloadAction<string>) {
  yield call(deleteTodo, action.payload)
  yield put(deleteTodoSlice(action.payload))
}

type UpdateTodoWorkerPayload = {
  todo: UpdateTodoT
  id: string
}

function* updateTodoWorker(action: PayloadAction<UpdateTodoWorkerPayload>) {
  yield call(updateTodo, action.payload.id, action.payload.todo)
  yield put(
    updateTodoSlice({todo_id: action.payload.id, ...action.payload.todo})
  )
}

function* todoWatcher() {
  yield takeEvery(TodosCreators.ASYNC_SET_TODOS, setTodosWorker)
  yield takeEvery(TodosCreators.ASYNC_DELETE_TODO, deleteTodoWorker)
  yield takeEvery(TodosCreators.ASYNC_CREATE_TODO, createTodoWorker)
  yield takeEvery(TodosCreators.ASYNC_UPDATE_TODO, updateTodoWorker)
}

export default todoWatcher
