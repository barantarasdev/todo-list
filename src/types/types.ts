import {useNavigate} from 'react-router-dom'

export type Todo = {
  todo_id: string
  user_id: string
  todo_value: string
  todo_completed: boolean
}

export type User = {
  user_name: string
  user_email: string
  user_password: string
  user_confirm_password: string
  user_phone: string
  user_age: string
  user_gender: 'f' | 'g' | ''
  user_site: string
}

export type ValidatesT =
  | 'user_name'
  | 'user_age'
  | 'user_email'
  | 'user_password'
  | 'user_confirm_password'
  | 'user_phone'
  | 'user_site'

export type SimpleTodo = Omit<Todo, 'todo_id'>

export type UpdatedTodo = Omit<SimpleTodo, 'user_id'>

export type Methods = 'GET' | 'POST' | 'PATCH' | 'DELETE'

export type AppState = {
  todos: Todo[]
  snackbar: string
}

export type GeneralOptionsT = {value: string; title: string}[]

export type SignInT = Pick<User, 'user_email' | 'user_password'>

export type NavigateT = {
  navigate: ReturnType<typeof useNavigate>
}
