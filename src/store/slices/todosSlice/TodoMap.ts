import {Dispatch} from '@reduxjs/toolkit'
import {RootState} from 'src/store'
import {
  createTodoCreator,
  setTodosCreator,
  deleteTodoCreator,
  updateTodoCreator,
} from 'src/store/slices/todosSlice'
import {CreateTodoT, UpdateTodoT} from 'src/types'

export const mapStateToTodosProps = (state: RootState) => ({
  todos: state.todos.todos,
})

export const mapDispatchToTodosProps = (dispatch: Dispatch) => ({
  setTodos: (id: string) => dispatch(setTodosCreator(id)),
  createTodo: (todo: CreateTodoT) => dispatch(createTodoCreator(todo)),
  deleteTodo: (id: string) => dispatch(deleteTodoCreator(id)),
  updateTodo: (id: string, todo: UpdateTodoT) =>
    dispatch(updateTodoCreator(id, todo)),
})
