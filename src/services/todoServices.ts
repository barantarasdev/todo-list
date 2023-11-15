import client from '@/services/apiClient'
import { getDataFromLocalStorage } from '@/utils'
import { ColumnT, CreateTodoT, TodoT, UpdateTodoT } from '@/types'

export const getColumns = (userId: string) =>
  client.get(`/users/${userId}/cols`, true)

export const createTodo = (columnId: string, todo: CreateTodoT) =>
  client.post('/todos', { columnId, todo }, true)

export const createColumn = (columnName: string) => {
  const { userId } = getDataFromLocalStorage('user')

  return client.post('/cols', { columnName, userId }, true)
}

export const updateColumn = (
  id: string,
  sourceColumn: ColumnT,
  destinationColumn: ColumnT
) => {
  const { userId } = getDataFromLocalStorage('user')

  return client.post(
    `/cols/${id}`,
    { userId, sourceColumn, destinationColumn },
    true
  )
}

export const deleteTodo = (id: string) => client.delete(`/todos/${id}`, true)

export const updateTodo = (id: string, data: UpdateTodoT) =>
  client.patch(`/todos/${id}`, data)

export const updateTodoOrder = (
  id: string,
  sourceTodo: TodoT,
  destinationTodo: TodoT,
  columnId: string
) =>
  client.post(
    `/todos/${id}/updateOrder`,
    {
      sourceTodo,
      destinationTodo,
      columnId,
    },
    true
  )
