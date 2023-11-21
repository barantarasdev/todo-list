import { PayloadAction } from '@reduxjs/toolkit'
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

import { createBoard, getBoards, inviteUser } from '@/services/boardsService'
import { setBoard, setBoards } from '@/store/slices/boardsSlice'
import { setSnackbar } from '@/store/slices/snackbarSlice'
import { LogoutCreator } from '@/store/slices/userSlice/actionCreator'
import { BoardT } from '@/types'
import {
  BoardsCreators,
  CreateBoardCreatorProps,
  InviteUserCreatorProps,
  SetBoardsCreatorProps,
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

function* boardsWatcher() {
  yield takeEvery(BoardsCreators.ASYNC_SET_BOARDS, setBoardsWorker)
  yield takeEvery(BoardsCreators.ASYNC_SET_BOARD, createBoardWorker)
  yield takeLatest(BoardsCreators.ASYNC_INVITE_USER, inviteUserWorker)
}

export default boardsWatcher
