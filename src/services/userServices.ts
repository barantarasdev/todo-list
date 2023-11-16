import client from '@/services/apiClient'
import { AuthT } from '@/services/types'
import { SignInT, SignUpT } from '@/types'

export const signUp = (data: SignUpT) =>
  client.post<AuthT>(`/auth/register`, { ...data, userAge: +data.userAge })

export const signIn = (data: SignInT) => client.post<AuthT>(`/auth/login`, data)

export const logOut = (refreshToken: string) =>
  client.post<AuthT>(`/auth/logout`, {
    refreshToken,
  })

export const inviteUser = (
  userId: string,
  friendEmail: string,
  boardId: string
) => client.post(`/auth/invite`, { userId, friendEmail, boardId })

export const getBoards = (userId: string) =>
  client.get(`/boards/${userId}`, true)

export const createBoard = (userId: string, boardName: string) =>
  client.post(`/boards/${userId}`, { boardName })
