import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import initialState from '@/store/slices/boardsSlice/initialState'
import {
  getColumn,
  getFilterTodos,
  getTodoIndex,
} from '@/store/slices/boardsSlice/helpers'
import { BoardT, ColumnT } from '@/types'
import {
  ColumnsStateT,
  CreateTodoProps,
  DeleteTodoProps,
  UpdateColumnProps,
  UpdateTodoProps,
} from '@/store/slices/boardsSlice/types'

const reducers = {
  setColumns: (state: ColumnsStateT, action: PayloadAction<ColumnT[]>) => ({
    ...state,
    columns: action.payload,
  }),
  setBoards: (state: ColumnsStateT, action: PayloadAction<BoardT[]>) => ({
    ...state,
    boards: action.payload,
  }),
  setBoard: (state: ColumnsStateT, action: PayloadAction<BoardT>) => {
    state.boards.push(action.payload)
  },
  setColumn: (state: ColumnsStateT, action: PayloadAction<ColumnT>) => {
    state.columns.push(action.payload)
  },
  updateTodos: (
    state: ColumnsStateT,
    action: PayloadAction<UpdateColumnProps>
  ) => {
    const { columnId, todos } = action.payload

    return {
      ...state,
      columns: state.columns.map(column =>
        column.columnId === columnId ? { ...column, todos } : column
      ),
    }
  },
  createTodo: (
    state: ColumnsStateT,
    action: PayloadAction<CreateTodoProps>
  ) => {
    const { todo } = action.payload
    const column = getColumn(todo.columnId, state.columns)

    if (column) {
      column.todos.push(todo)
    }
  },
  updateTodo: (
    state: ColumnsStateT,
    action: PayloadAction<UpdateTodoProps>
  ) => {
    const { columnId, todoId, data } = action.payload
    const column = getColumn(columnId, state.columns)

    if (column) {
      const index = getTodoIndex(todoId, column.todos)

      if (index !== -1 && data) {
        column.todos[index] = { ...column.todos[index], ...data }
      }
    }
  },
  deleteTodo: (
    state: ColumnsStateT,
    action: PayloadAction<DeleteTodoProps>
  ) => {
    const { columnId, todoId } = action.payload
    const column = getColumn(columnId, state.columns)

    if (column) {
      column.todos = getFilterTodos(todoId, column.todos)
    }
  },
}

const columnSlice = createSlice({
  name: 'columns',
  initialState,
  reducers,
})

export const {
  setColumns,
  setColumn,
  setBoards,
  setBoard,
  updateTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} = columnSlice.actions

export default columnSlice.reducer
