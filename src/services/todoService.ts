import client from 'src/services/apiClient'
import {CreateTodoT, UpdateTodoT} from 'src/types'

export const getTodos = (userId: string) =>
  client.get(`/users/${userId}/todos`, true)

export const createTodo = (data: CreateTodoT) =>
  client.post('/todos', data, true)

export const deleteTodo = (id: string) => client.delete(`/todos/${id}`, true)

export const updateTodo = (id: string, data: UpdateTodoT) =>
  client.patch(`/todos/${id}`, data)
