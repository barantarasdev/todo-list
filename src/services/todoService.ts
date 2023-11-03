import client from 'src/services/apiClient'
import {SimpleTodo, UpdatedTodo} from 'src/types'

export const getTodos = (userId: string) =>
  client.get(`/users/${userId}/todos`, true)

export const createTodo = (data: SimpleTodo) =>
  client.post('/todos', data, true)

export const deleteTodo = (id: string) => client.delete(`/todos/${id}`, true)

export const updateTodo = (id: string, data: UpdatedTodo) =>
  client.patch(`/todos/${id}`, data)
