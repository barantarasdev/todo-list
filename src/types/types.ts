import { useNavigate } from 'react-router-dom'

type GendersT = 'f' | 'g' | ''

export type TodoT = {
  todoId: string
  userId: string
  todoValue: string
  todoCompleted: boolean
}

export type UserT = {
  userName: string
  userEmail: string
  userPassword: string
  userConfirmPassword: string
  userPhone: string
  userAge: string
  userGender: GendersT
  userSite: string
}

export type ColT = {
  colId: string
  colName: string
  todos: TodoT[]
  colOrder?: string
}

export type CreateTodoT = Omit<TodoT, 'todoId'>

export type UpdateTodoT = Omit<CreateTodoT, 'userId'>

export type GeneralOptionT = { value: string; title: string }

export type SignInT = Pick<UserT, 'userEmail' | 'userPassword'>

export type NavigateT = {
  navigate: ReturnType<typeof useNavigate>
}
