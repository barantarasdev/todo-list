import { PayloadAction } from '@reduxjs/toolkit'
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

import { createColumn, getColumns, updateColumn } from '@/services/todoServices'
import { setColumn, setColumns } from '@/store/slices/columnSlice'
import {
  ColsCreators,
  CreateColumnCreatorProps,
  SetColumnsCreatorProps,
  UpdateColumnCreatorProps,
} from '@/store/slices/columnSlice/types'

function* setColumnsWorker(action: PayloadAction<SetColumnsCreatorProps>) {
  const { cols } = yield call(getColumns, action.payload.userId)

  yield put(setColumns(cols))
}

function* setColumnWorker(action: PayloadAction<CreateColumnCreatorProps>) {
  const { columnId } = yield call(createColumn, action.payload.columnName)

  const newColumn = {
    columnId,
    columnName: action.payload.columnName,
    todos: [],
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
  yield takeLatest(ColsCreators.ASYNC_CREATE_COLUMN, setColumnWorker)
  yield takeEvery(ColsCreators.ASYNC_UPDATE_COLUMN, updateColumnWorker)
}

export default colWatcher
