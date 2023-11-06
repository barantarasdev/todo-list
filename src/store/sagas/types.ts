import { NavigateFunction } from 'react-router'
import { UpdateTodoT, UserT } from 'src/types'

export type UpdateTodoWorkerPayloadT = {
  todo: UpdateTodoT
  id: string
}

export type SignInWorkerPayloadT = {
  userEmail: string
  userPassword: string
  navigate: NavigateFunction
}

export type SignUpWorkerPayloadT = {
  data: UserT
  navigate: NavigateFunction
}

export type LogoutWorkerPayloadT = {
  navigate: NavigateFunction
}
