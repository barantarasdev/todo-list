import { TodoT, UpdateTodoT } from 'src/types'

export type TodoStatesT = {
  todoValue: string
  todoCompleted: boolean
  isEditing: boolean
}

export type TodoProps = {
  todo: TodoT
  deleteTodo: (id: string) => void
  updateTodo: (id: string, todo: UpdateTodoT) => void
}
