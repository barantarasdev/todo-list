import {all} from 'redux-saga/effects'
import todoWatcher from 'src/store/sagas/todoSaga'

function* rootSaga() {
  yield all([todoWatcher()])
}

export default rootSaga
