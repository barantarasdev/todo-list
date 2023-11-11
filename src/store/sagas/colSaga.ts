import { PayloadAction } from '@reduxjs/toolkit'
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { createCol, getCols, updateCol } from 'src/services/todoService'
import { UpdateColWorkerT } from 'src/store/sagas/types'
import { setCol, setCols } from 'src/store/slices/todosSlice'
import { ColsCreators } from 'src/store/slices/todosSlice/types'

function* setColsWorker(action: PayloadAction<string>) {
  const { cols } = yield call(getCols, action.payload)

  yield put(setCols(cols))
}

function* setColWorker(action: PayloadAction<string>) {
  const { colId } = yield call(createCol, action.payload)
  const newCol = {
    colId,
    colName: action.payload,
    todos: [],
  }

  yield put(setCol(newCol))
}

function* updateColWorker(action: PayloadAction<UpdateColWorkerT>) {
  const { sourceCol, destinationCol, colId, cols } = action.payload

  yield put(setCols(cols))
  yield call(updateCol, colId, sourceCol, destinationCol)
}

function* colWatcher() {
  yield takeEvery(ColsCreators.ASYNC_SET_COLS, setColsWorker)
  yield takeLatest(ColsCreators.ASYNC_CREATE_COL, setColWorker)
  yield takeEvery(ColsCreators.ASYNC_UPDATE_COL, updateColWorker)
}

export default colWatcher
