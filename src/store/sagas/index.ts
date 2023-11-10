import { all } from 'redux-saga/effects'
import colWatcher from 'src/store/sagas/colSaga'
import todoWatcher from 'src/store/sagas/todoSaga'
import userWatcher from 'src/store/sagas/userSaga'

function* rootSaga() {
  yield all([todoWatcher(), userWatcher(), colWatcher()])
}

export default rootSaga
