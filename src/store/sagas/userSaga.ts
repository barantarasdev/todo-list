import { PayloadAction } from '@reduxjs/toolkit'
import { call, put, takeEvery } from 'redux-saga/effects'

import { setSnackbar } from '@/store/slices/snackbarSlice'
import { deleteUser, setUser } from '@/store/slices/userSlice'
import {
  LogoutCreatorProps,
  SignInCreatorProps,
  SignUpCreatorProps,
  UserCreators,
} from '@/store/slices/userSlice/types'
import { logOut, signIn, signUp } from '@/services/userServices'
import { setColumnsCreator } from '@/store/slices/columnSlice/actionCreator'
import { setColumns } from '@/store/slices/columnSlice'
import { getDataFromLocalStorage, removeUser, storeUser } from '@/utils'
import { RoutesE } from '@/types'

function* signInWorker(action: PayloadAction<SignInCreatorProps>) {
  const { userEmail, userPassword, router } = action.payload

  try {
    const { userName, accessToken, refreshToken, userId } = yield call(signIn, {
      userEmail,
      userPassword,
    })

    yield call(storeUser, { userId, userName }, accessToken, refreshToken)
    yield put(setUser({ userName, userId }))
    yield put(setColumnsCreator({ userId }))

    router.replace(RoutesE.HOME)
  } catch (error) {
    yield put(setSnackbar('User not found!'))
  }
}

function* signUpWorker(action: PayloadAction<SignUpCreatorProps>) {
  const { router, data } = action.payload
  const { userName } = data

  try {
    const { accessToken, refreshToken, userId } = yield call(signUp, data)

    yield call(storeUser, { userId, userName }, accessToken, refreshToken)
    yield put(setUser({ userName, userId }))

    router.replace(RoutesE.HOME)
  } catch (error) {
    yield put(setSnackbar('User already exists!'))
  }
}

function* logoutWorker(action: PayloadAction<LogoutCreatorProps>) {
  const refreshToken = getDataFromLocalStorage('refreshToken')

  yield put(setColumns([]))
  yield put(deleteUser())
  removeUser()
  action.payload.router.replace(RoutesE.SIGN_IN)
  yield call(logOut, refreshToken)
}

function* userWatcher() {
  yield takeEvery(UserCreators.ASYNC_SING_IN, signInWorker)
  yield takeEvery(UserCreators.ASYNC_SIGN_UP, signUpWorker)
  yield takeEvery(UserCreators.ASYNC_LOGOUT, logoutWorker)
}

export default userWatcher
