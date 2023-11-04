/* eslint-disable no-param-reassign */

import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {TodosCreators, TodosState} from 'src/store/slices/todosSlice/types'
import {CreateTodoT, Todo, UpdateTodoT} from 'src/types'

const initialState: TodosState = {
  todos: [],
}

const reducers = {
  setTodos: (state: TodosState, action: PayloadAction<Todo[]>) => {
    state.todos = action.payload
  },
  createTodo: (state: TodosState, action: PayloadAction<Todo>) => {
    state.todos.push(action.payload)
  },
  updateTodo: (
    state: TodosState,
    action: PayloadAction<{todo_id: string} & UpdateTodoT>
  ) => {
    state.todos = state.todos.map(todo =>
      todo.todo_id === action.payload.todo_id
        ? {...todo, ...action.payload}
        : todo
    )
  },
  deleteTodo: (state: TodosState, action: PayloadAction<string>) => {
    state.todos = state.todos.filter(({todo_id}) => todo_id !== action.payload)
  },
}

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers,
})

export const setTodosCreator = (id: string) => ({
  type: TodosCreators.ASYNC_SET_TODOS,
  payload: id,
})

export const createTodoCreator = (todo: CreateTodoT) => ({
  type: TodosCreators.ASYNC_CREATE_TODO,
  payload: todo,
})

export const deleteTodoCreator = (id: string) => ({
  type: TodosCreators.ASYNC_DELETE_TODO,
  payload: id,
})

export const updateTodoCreator = (id: string, todo: UpdateTodoT) => ({
  type: TodosCreators.ASYNC_UPDATE_TODO,
  payload: {id, todo},
})

export const {setTodos, createTodo, updateTodo, deleteTodo} = todosSlice.actions

export default todosSlice.reducer
