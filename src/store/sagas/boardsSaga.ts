import { PayloadAction } from '@reduxjs/toolkit'
import { call, put, takeEvery, takeLeading } from 'redux-saga/effects'

import {
  createBoard,
  getBoards,
  inviteUser,
  updateSocketId,
} from '@/services/boardsService'
import { setBoard, setBoards } from '@/store/slices/boardsSlice'
import { setSnackbar } from '@/store/slices/snackbarSlice'
import { LogoutCreator } from '@/store/slices/userSlice/actionCreator'
import { BoardT } from '@/types'
import {
  BoardsCreators,
  CreateBoardCreatorProps,
  InviteUserCreatorProps,
  SetBoardsCreatorProps,
  UpdateSocketIdCreatorsProps,
} from '@/store/slices/boardsSlice/types'

function* setBoardsWorker(action: PayloadAction<SetBoardsCreatorProps>) {
  try {
    const boards: BoardT[] = yield call(getBoards)

    yield put(setBoards(boards))
  } catch (error) {
    yield put(LogoutCreator({ router: action.payload.router }))
  }
}

function* createBoardWorker(action: PayloadAction<CreateBoardCreatorProps>) {
  const { boardName, router } = action.payload

  try {
    const { boardId } = yield call(createBoard, action.payload.boardName)

    yield put(setBoard({ boardName, boardId }))
  } catch (error) {
    yield put(LogoutCreator({ router }))
  }
}

function* inviteUserWorker(action: PayloadAction<InviteUserCreatorProps>) {
  const { friendEmail, boardId } = action.payload

  try {
    yield call(inviteUser, boardId, friendEmail)
  } catch (error) {
    yield put(setSnackbar('Bad request!'))
  }
}

function* updateSocketIdWorker(
  action: PayloadAction<UpdateSocketIdCreatorsProps>
) {
  const { router, sockedId, boardId } = action.payload
  try {
    yield call(updateSocketId, boardId, sockedId)
  } catch (error) {
    yield put(LogoutCreator({ router }))
  }
}

function* boardsWatcher() {
  yield takeEvery(BoardsCreators.ASYNC_SET_BOARDS, setBoardsWorker)
  yield takeEvery(BoardsCreators.ASYNC_SET_BOARD, createBoardWorker)
  yield takeEvery(BoardsCreators.ASYNC_INVITE_USER, inviteUserWorker)
  yield takeLeading(BoardsCreators.ASYNC_UPDATE_SOCKET_ID, updateSocketIdWorker)
}

export default boardsWatcher
