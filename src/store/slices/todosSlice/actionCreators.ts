import { TodosCreators } from 'src/store/slices/todosSlice/types'
import { CreateTodoT, UpdateTodoT } from 'src/types'

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
  payload: { id, todo },
})
