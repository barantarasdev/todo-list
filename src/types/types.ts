export type GendersT = 'f' | 'm' | ''

export type OptionT<T> = {
  value: T
  name: string
}

export type TodoT = {
  todoId: string
  userId: string
  todoValue: string
  todoCompleted: boolean
}

export type ColumnT = {
  columnId: string
  columnName: string
  todos: TodoT[]
}

export type SignUpT = {
  userName: string
  userEmail: string
  userPassword: string
  userConfirmPassword: string
  userPhone: string
  userAge: string
  userGender: GendersT
  userSite: string
}

export type SignInT = Pick<SignUpT, 'userEmail' | 'userPassword'>

export type ValidateValuesT = Record<string, string>

export type CreateTodoT = Omit<TodoT, 'todoId'>

export type UpdateTodoT = Omit<CreateTodoT, 'userId'>
