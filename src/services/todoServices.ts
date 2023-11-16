import client from '@/services/apiClient'
import { ColumnT, CreateTodoT, TodoT, UpdateTodoT } from '@/types'
import { getDataFromLocalStorage } from '@/utils/localeStorage'

export const getColumns = (boardId: string) =>
  client.get(`/columns/${boardId}`, true)

export const createTodo = (todo: CreateTodoT) =>
  client.post('/todos', { todo }, true)

export const createColumn = (columnName: string, boardId: string) =>
  client.post('/columns', { columnName, boardId }, true)

export const updateColumn = (
  id: string,
  sourceColumn: ColumnT,
  destinationColumn: ColumnT
) => {
  const { userId } = getDataFromLocalStorage('user')

  return client.post(
    `/columns/${id}`,
    { userId, sourceColumn, destinationColumn },
    true
  )
}

export const deleteTodo = (id: string) => client.delete(`/todos/${id}`, true)

export const updateTodo = (id: string, data: UpdateTodoT) =>
  client.patch(`/todos/${id}`, data)

export const updateTodoOrder = (
  id: string,
  columnId: string,
  sourceTodo: TodoT,
  destinationTodo: TodoT
) =>
  client.post(
    `/todos/${id}/updateOrder`,
    {
      columnId,
      sourceTodo,
      destinationTodo,
    },
    true
  )
