import { all } from 'redux-saga/effects'

import columnWatcher from '@/store/sagas/columnSaga'
import todoWatcher from '@/store/sagas/todoSaga'
import userWatcher from '@/store/sagas/userSaga'
import boardsWatcher from '@/store/sagas/boardsSaga'

function* rootSaga() {
  yield all([todoWatcher(), userWatcher(), columnWatcher(), boardsWatcher()])
}

export default rootSaga
