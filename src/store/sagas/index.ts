import { all } from 'redux-saga/effects'
import todoWatcher from 'src/store/sagas/todoSaga'
import userWatcher from 'src/store/sagas/userSaga'

function* rootSaga() {
  yield all([todoWatcher(), userWatcher()])
}

export default rootSaga
