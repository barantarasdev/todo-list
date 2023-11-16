import { PayloadAction } from '@reduxjs/toolkit'
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

import { createColumn, getColumns, updateColumn } from '@/services/todoServices'
import {
  setBoard,
  setBoards,
  setColumn,
  setColumns,
} from '@/store/slices/columnSlice'
import {
  ColsCreators,
  CreateBoardCreatorProps,
  CreateColumnCreatorProps,
  SetBoardsCreatorProps,
  SetColumnsCreatorProps,
  UpdateColumnCreatorProps,
} from '@/store/slices/columnSlice/types'
import { createBoard, getBoards } from '@/services/userServices'

function* setColumnsWorker(action: PayloadAction<SetColumnsCreatorProps>) {
  const { columns } = yield call(getColumns, action.payload.boardId)

  yield put(setColumns(columns))
}

function* setBoardsWorker(action: PayloadAction<SetBoardsCreatorProps>) {
  const { boards } = yield call(getBoards, action.payload.userId)

  yield put(setBoards(boards))
}

function* createBoardWorker(action: PayloadAction<CreateBoardCreatorProps>) {
  const { boardName, userId } = action.payload

  const { boardId } = yield call(createBoard, userId, action.payload.boardName)

  yield put(setBoard({ boardName, boardId, userId }))
}

function* setColumnWorker(action: PayloadAction<CreateColumnCreatorProps>) {
  const { boardId, columnName } = action.payload

  const { columnId } = yield call(createColumn, columnName, boardId)

  const newColumn = {
    columnId,
    columnName: action.payload.columnName,
    todos: [],
    boardId,
  }

  yield put(setColumn(newColumn))
}

function* updateColumnWorker(action: PayloadAction<UpdateColumnCreatorProps>) {
  const { columns, sourceColumn, destinationColumn, columnId } = action.payload

  yield put(setColumns(columns))
  yield call(updateColumn, columnId, sourceColumn, destinationColumn)
}

function* colWatcher() {
  yield takeEvery(ColsCreators.ASYNC_SET_COLUMNS, setColumnsWorker)
  yield takeEvery(ColsCreators.ASYNC_SET_BOARDS, setBoardsWorker)
  yield takeLatest(ColsCreators.ASYNC_CREATE_COLUMN, setColumnWorker)
  yield takeEvery(ColsCreators.ASYNC_UPDATE_COLUMN, updateColumnWorker)
  yield takeEvery(ColsCreators.ASYNC_SET_BOARD, createBoardWorker)
}

export default colWatcher
