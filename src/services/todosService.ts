import client from '@/services/apiClient'

export const createTodo = (
  boardId: string,
  columnId: string,
  todoValue: string
) =>
  client.post({
    url: `/boards/${boardId}/columns/${columnId}/todos`,
    data: { todoValue },
  })

export const deleteTodo = (boardId: string, columnId: string, todoId: string) =>
  client.delete({
    url: `/boards/${boardId}/columns/${columnId}/todos/${todoId}`,
  })

export const updateTodo = (
  boardId: string,
  columnId: string,
  todoId: string,
  data: unknown
) =>
  client.patch({
    url: `/boards/${boardId}/columns/${columnId}/todos/${todoId}`,
    data,
  })

export const updateTodoOrder = (
  boardId: string,
  columnId: string,
  todoId: string,
  data: unknown
) =>
  client.post({
    url: `/boards/${boardId}/columns/${columnId}/todos/${todoId}`,
    data,
  })
