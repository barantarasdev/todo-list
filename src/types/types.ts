import { RefObject } from 'react'
import { AnyObject, ObjectSchema } from 'yup'

export type GendersT = 'f' | 'm' | ''

export type OptionT<T> = {
  value: T
  name: string
}

export type TodoT = {
  todoId: string
  columnId: string
  todoValue: string
  todoCompleted: boolean
}

export type ColumnT = {
  columnId: string
  columnName: string
  todos: TodoT[]
  boardId: string
}

export type BoardT = {
  boardId: string
  boardName: string
}

export type SignUpT = {
  userName: string
  userEmail: string
  userPassword: string
  userPhone: string
  userAge: number
  userGender: GendersT
  userSite: string
}

export type SignInT = Pick<SignUpT, 'userEmail' | 'userPassword'>

export type ValidateValuesT = Record<string, string>

export type CreateTodoT = Omit<TodoT, 'todoId' | 'todoCompleted'>

export type UpdateTodoT = Omit<CreateTodoT, 'boardId' | 'columnId'>

export type ValidateProps<T extends AnyObject> = {
  values: T
  schema: ObjectSchema<T>
}

export type UseInputProps = {
  valueProp?: string
  inputRef?: RefObject<HTMLInputElement> | null
}
