import {SimpleTodo, Todo, UpdatedTodo} from 'src/types'

export type PrimaryContextT = {
  todos: Todo[]
  setTodos: (todos: Todo[]) => void
  onCreateTodo: (todo: SimpleTodo) => void
  onUpdateTodo: (id: string, todo: UpdatedTodo) => void
  onDeleteTodo: (id: string) => void

  snackbar: string
  setSnackbar: (snackbar: string) => void
}
