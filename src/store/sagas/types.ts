import { NavigateFunction } from 'react-router'
import { ColT, CreateTodoT, TodoT, UpdateTodoT, UserT } from 'src/types'

export type UpdateTodoWorkerPayloadT = {
  todo: UpdateTodoT
  todoId: string
  colId: string
}

export type CreateTodoWorkerPayloadT = {
  todo: CreateTodoT
  colId: string
}

export type UpdateColWorkerT = {
  sourceCol: ColT
  destinationCol: ColT
  colId: string
  cols: ColT[]
}

export type UpdateTodoOrderWorkerT = {
  sourceTodo: TodoT
  startColId: string
  startTodoList: TodoT[]
  destinationTodo: TodoT
  colId: string
  todoId: string
  todos: TodoT[]
}

export type SignInWorkerPayloadT = {
  userEmail: string
  userPassword: string
  navigate: NavigateFunction
}

export type SignUpWorkerPayloadT = {
  data: UserT
  navigate: NavigateFunction
  callback: () => void
}

export type LogoutWorkerPayloadT = {
  navigate: NavigateFunction
}
