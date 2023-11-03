import {Todo} from 'src/types'

export type TodoStatesT = {
  todo_value: string
  todo_completed: boolean
  isEditing: boolean
}

export type TodoProps = {
  todo: Todo
}
