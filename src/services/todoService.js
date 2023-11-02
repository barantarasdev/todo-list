import { client } from 'src/services/apiClient'

export const getTodos = (userId) => {
  return client.get(`/users/${userId}/todos`, true)
}

export const createTodo = (data) => {
  return client.post('/todos', data, true)
}

export const deleteTodo = (id) => {
  return client.delete(`/todos/${id}`, true)
}

export const updateTodo = (id, data) => {
  return client.patch(`/todos/${id}`, data, true)
}
