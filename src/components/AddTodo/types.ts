import { CreateTodoT } from 'src/types'

export type AddTodoStatesT = {
  value: string
}

export type AddTodoProps = {
  createTodo: (todo: CreateTodoT) => void
}
