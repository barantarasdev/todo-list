import { PayloadAction } from '@reduxjs/toolkit'
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

import { setColumn, setColumns } from '@/store/slices/boardsSlice'
import {
  createColumn,
  getColumns,
  updateColumnOrder,
} from '@/services/columnsService'
import { LogoutCreator } from '@/store/slices/userSlice/actionCreator'
import { ColumnT } from '@/types'
import {
  BoardsCreators,
  CreateColumnCreatorProps,
  SetColumnsCreatorProps,
  UpdateColumnCreatorProps,
} from '@/store/slices/boardsSlice/types'

function* setColumnsWorker(action: PayloadAction<SetColumnsCreatorProps>) {
  const { boardId, router } = action.payload

  const columns: ColumnT[] = yield call(getColumns, boardId)

  try {
    yield put(setColumns(columns))
  } catch (error) {
    yield put(LogoutCreator({ router }))
  }
}

function* setColumnWorker(action: PayloadAction<CreateColumnCreatorProps>) {
  const { boardId, columnName, router } = action.payload

  try {
    const { columnId } = yield call(createColumn, boardId, columnName)

    const newColumn = {
      columnId,
      columnName: action.payload.columnName,
      todos: [],
      boardId,
    }

    yield put(setColumn(newColumn))
  } catch (error) {
    yield put(LogoutCreator({ router }))
  }
}

function* updateColumnWorker(action: PayloadAction<UpdateColumnCreatorProps>) {
  const {
    columns,
    sourceColumnId,
    destinationColumnId,
    router,
    columnId,
    boardId,
  } = action.payload

  try {
    yield put(setColumns(columns))
    yield call(updateColumnOrder, boardId, columnId, {
      sourceColumnId,
      destinationColumnId,
    })
  } catch (error) {
    yield put(LogoutCreator({ router }))
  }
}

function* columnWatcher() {
  yield takeEvery(BoardsCreators.ASYNC_SET_COLUMNS, setColumnsWorker)
  yield takeEvery(BoardsCreators.ASYNC_CREATE_COLUMN, setColumnWorker)
  yield takeLatest(BoardsCreators.ASYNC_UPDATE_COLUMN, updateColumnWorker)
}

export default columnWatcher
