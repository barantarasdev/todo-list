import { getDataFromLocalStorage } from 'src/helpers/storageHelper'
import client from 'src/services/apiClient'
import { ColT, CreateTodoT, TodoT, UpdateTodoT } from 'src/types'

export const getCols = (userId: string) =>
  client.get(`/users/${userId}/cols`, true)

export const createTodo = (colId: string, todo: CreateTodoT) =>
  client.post('/todos', { colId, todo }, true)

export const createCol = (colName: string) => {
  const { userId } = getDataFromLocalStorage('user')

  return client.post('/cols', { colName, userId }, true)
}

export const updateCol = (
  id: string,
  sourceCol: ColT,
  destinationCol: ColT
) => {
  const { userId } = getDataFromLocalStorage('user')

  return client.post(`/cols/${id}`, { userId, sourceCol, destinationCol }, true)
}

export const deleteTodo = (id: string) => client.delete(`/todos/${id}`, true)

export const updateTodo = (id: string, data: UpdateTodoT) =>
  client.patch(`/todos/${id}`, data)

export const updateTodoOrder = (
  id: string,
  sourceTodo: TodoT,
  destinationTodo: TodoT,
  colId: string
) =>
  client.post(
    `/todos/${id}/updateOrder`,
    {
      sourceTodo,
      destinationTodo,
      colId,
    },
    true
  )
