import client from './apiClient'

export const getBoards = () => client.get({ url: '/boards' })

export const createBoard = (boardName: string) =>
  client.post({ url: `/boards`, data: { boardName } })

export const inviteUser = (boardId: string, friendEmail: string) =>
  client.post({
    url: `/boards/${boardId}/invite`,
    data: { friendEmail },
  })
