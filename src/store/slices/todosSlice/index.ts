import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import {
  getColumn,
  getFilterTodos,
  getTodoIndex,
} from 'src/store/slices/todosSlice/helpers'
import initialState from 'src/store/slices/todosSlice/initialState'
import {
  ColsStateT,
  CreateTodoRT,
  DeleteTodoPR,
  UpdateColRT,
  UpdateTodoRT,
} from 'src/store/slices/todosSlice/types'
import { ColT } from 'src/types'

const reducers = {
  setCols: (state: ColsStateT, action: PayloadAction<ColT[]>) => ({
    cols: action.payload,
  }),
  setCol: (state: ColsStateT, action: PayloadAction<ColT>) => {
    state.cols.push(action.payload)
  },
  updateTodos: (state: ColsStateT, action: PayloadAction<UpdateColRT>) => {
    const { colId, todos } = action.payload

    return {
      cols: state.cols.map(col =>
        col.colId === colId ? { ...col, todos } : col
      ),
    }
  },
  createTodo: (state: ColsStateT, action: PayloadAction<CreateTodoRT>) => {
    const { colId, todo } = action.payload
    const column = getColumn(colId, state.cols)

    if (column) {
      column.todos.push(todo)
    }
  },
  updateTodo: (state: ColsStateT, action: PayloadAction<UpdateTodoRT>) => {
    const { colId, todoId, todo } = action.payload
    const column = getColumn(colId, state.cols)

    if (column) {
      const index = getTodoIndex(todoId, column.todos)

      if (index !== -1) {
        column.todos[index] = { ...column.todos[index], ...todo }
      }
    }
  },
  deleteTodo: (state: ColsStateT, action: PayloadAction<DeleteTodoPR>) => {
    const { colId, todoId } = action.payload
    const column = getColumn(colId, state.cols)

    if (column) {
      column.todos = getFilterTodos(todoId, column.todos)
    }
  },
}

const todosSlice = createSlice({
  name: 'cols',
  initialState,
  reducers,
})

export const {
  setCols,
  updateTodos,
  createTodo,
  updateTodo,
  deleteTodo,
  setCol,
} = todosSlice.actions

export default todosSlice.reducer
