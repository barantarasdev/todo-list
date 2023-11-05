import {PayloadAction} from '@reduxjs/toolkit'
import {call, put, takeEvery} from 'redux-saga/effects'
import {
  createTodo,
  deleteTodo,
  getTodos,
  updateTodo,
} from 'src/services/todoService'
import {UpdateTodoWorkerPayloadT} from 'src/store/sagas/types'
import {
  createTodo as createTodoSlice,
  deleteTodo as deleteTodoSlice,
  setTodos,
  updateTodo as updateTodoSlice,
} from 'src/store/slices/todosSlice'
import {TodosCreators} from 'src/store/slices/todosSlice/types'
import {CreateTodoT} from 'src/types'

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

function* updateTodoWorker(action: PayloadAction<UpdateTodoWorkerPayloadT>) {
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
