import { PayloadAction } from '@reduxjs/toolkit'
import { call, put, takeEvery } from 'redux-saga/effects'
import { getDataFromLocalStorage } from 'src/helpers/storageHelper'
import { removeUser, storeUser } from 'src/helpers/userHelper'
import { logOut, signIn, signUp } from 'src/services/userService'
import {
  LogoutWorkerPayloadT,
  SignInWorkerPayloadT,
  SignUpWorkerPayloadT,
} from 'src/store/sagas/types'
import { setSnackbar } from 'src/store/slices/snackbarSlice'
import { setCols } from 'src/store/slices/todosSlice'
import { setColsCreator } from 'src/store/slices/todosSlice/actionCreators'
import { deleteUser, setUser } from 'src/store/slices/userSlice'
import { UserCreators } from 'src/store/slices/userSlice/types'
import { RoutesPath } from 'src/types'

function* signInWorker(action: PayloadAction<SignInWorkerPayloadT>) {
  try {
    const { userEmail, userPassword, navigate } = action.payload
    const { userName, accessToken, refreshToken, userId } = yield call(signIn, {
      userEmail,
      userPassword,
    })

    yield call(storeUser, { userId, userName }, accessToken, refreshToken)
    yield put(setUser({ userName, userId }))
    yield put(setColsCreator(userId))

    navigate(RoutesPath.HOME)
  } catch (error) {
    yield put(setSnackbar('User not found!'))
  }
}

function* signUpWorker(action: PayloadAction<SignUpWorkerPayloadT>) {
  try {
    const { data, navigate, callback } = action.payload
    const { accessToken, refreshToken, userId } = yield call(signUp, data)

    yield call(
      storeUser,
      { userId, userName: data.userName },
      accessToken,
      refreshToken
    )
    yield put(setUser({ userName: data.userName, userId }))

    callback()
    navigate(RoutesPath.HOME)
  } catch (error) {
    yield put(setSnackbar('User already exists!'))
  }
}

function* logoutWorker(action: PayloadAction<LogoutWorkerPayloadT>) {
  const refreshToken = getDataFromLocalStorage('refreshToken')

  yield put(setCols([]))
  yield put(deleteUser())

  removeUser()

  action.payload.navigate(RoutesPath.SIGN_IN)
  yield call(logOut, refreshToken)
}

function* userWatcher() {
  yield takeEvery(UserCreators.ASYNC_SING_IN, signInWorker)
  yield takeEvery(UserCreators.ASYNC_SIGN_UP, signUpWorker)
  yield takeEvery(UserCreators.ASYNC_LOGOUT, logoutWorker)
}

export default userWatcher
