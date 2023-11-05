import {TodoT} from 'src/types'

export type TodosStateT = {
  todos: TodoT[]
}

export enum TodosCreators {
  ASYNC_CREATE_TODO = 'async_create_todo',
  ASYNC_DELETE_TODO = 'async_delete_todo',
  ASYNC_UPDATE_TODO = 'async_update_todo',
  ASYNC_SET_TODOS = 'async_set_todos',
}
