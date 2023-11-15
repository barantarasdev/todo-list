import { all } from 'redux-saga/effects'

import colWatcher from '@/store/sagas/columnSaga'
import todoWatcher from '@/store/sagas/todoSaga'
import userWatcher from '@/store/sagas/userSaga'

function* rootSaga() {
  yield all([todoWatcher(), userWatcher(), colWatcher()])
}

export default rootSaga
