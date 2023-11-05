import {useNavigate} from 'react-router-dom'

type GendersT = 'f' | 'g' | ''

export type TodoT = {
  todo_id: string
  user_id: string
  todo_value: string
  todo_completed: boolean
}

export type UserT = {
  user_name: string
  user_email: string
  user_password: string
  user_confirm_password: string
  user_phone: string
  user_age: string
  user_gender: GendersT
  user_site: string
}

export type ValidateT =
  | 'user_name'
  | 'user_age'
  | 'user_email'
  | 'user_password'
  | 'user_confirm_password'
  | 'user_phone'
  | 'user_site'

export type CreateTodoT = Omit<TodoT, 'todo_id'>

export type UpdateTodoT = Omit<CreateTodoT, 'user_id'>

export type MethodsT = 'GET' | 'POST' | 'PATCH' | 'DELETE'

export type GeneralOptionT = {value: string; title: string}

export type SignInT = Pick<UserT, 'user_email' | 'user_password'>

export type NavigateT = {
  navigate: ReturnType<typeof useNavigate>
}
