import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import initialState from 'src/store/slices/todosSlice/initialState'
import { TodosStateT } from 'src/store/slices/todosSlice/types'
import { TodoT, UpdateTodoT } from 'src/types'

const reducers = {
  setTodos: (state: TodosStateT, action: PayloadAction<TodoT[]>) => ({
    ...state,
    todos: action.payload,
  }),
  createTodo: (state: TodosStateT, action: PayloadAction<TodoT>) => {
    state.todos.push(action.payload)
  },
  updateTodo: (
    state: TodosStateT,
    action: PayloadAction<{ todoId: string } & UpdateTodoT>
  ) => ({
    ...state,
    todos: state.todos.map(todo =>
      todo.todoId === action.payload.todoId
        ? { ...todo, ...action.payload }
        : todo
    ),
  }),
  deleteTodo: (state: TodosStateT, action: PayloadAction<string>) => ({
    ...state,
    todos: state.todos.filter(({ todoId }) => todoId !== action.payload),
  }),
}

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers,
})

export const { setTodos, createTodo, updateTodo, deleteTodo } =
  todosSlice.actions

export default todosSlice.reducer
