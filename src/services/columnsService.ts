import client from '@/services/apiClient'

export const getColumns = (boardId: string) =>
  client.get({ url: `/boards/${boardId}/columns` })

export const createColumn = (boardId: string, columnName: string) =>
  client.post({
    url: `/boards/${boardId}/columns`,
    data: { columnName },
  })

export const updateColumnOrder = (
  boardId: string,
  columnId: string,
  data: unknown
) =>
  client.post({
    url: `/boards/${boardId}/columns/${columnId}`,
    data,
  })
