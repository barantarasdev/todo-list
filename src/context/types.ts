import {Routes, SimpleTodo, Todo, UpdatedTodo} from 'src/types'

export type PrimaryContextT = {
  route: Routes
  setRoute: (route: Routes) => void

  todos: Todo[]
  setTodos: (todos: Todo[]) => void
  onCreateTodo: (todo: SimpleTodo) => void
  onUpdateTodo: (id: string, todo: UpdatedTodo) => void
  onDeleteTodo: (id: string) => void

  snackbar: string
  setSnackbar: (snackbar: string) => void
}
