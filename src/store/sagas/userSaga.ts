import { PayloadAction } from '@reduxjs/toolkit'
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

import { setSnackbar } from '@/store/slices/snackbarSlice'
import {
  getDataFromLocalStorage,
  removeUser,
  storeUser,
} from '@/utils/localeStorage'
import { setColumns } from '@/store/slices/boardsSlice'
import { logOut, signIn, signUp } from '@/services/authService'
import { setBoardsCreator } from '@/store/slices/boardsSlice/actionCreator'
import {
  LogoutCreatorProps,
  SignInCreatorProps,
  SignUpCreatorProps,
  UserCreators,
} from '@/store/slices/userSlice/types'
import { RoutesE } from '@/types'

function* signInWorker(action: PayloadAction<SignInCreatorProps>) {
  const { userEmail, userPassword, router } = action.payload

  try {
    const { userName, accessToken, refreshToken } = yield call(signIn, {
      userEmail,
      userPassword,
    })

    yield call(storeUser, { userName }, accessToken, refreshToken)
    yield put(setBoardsCreator({ router }))

    router.replace(RoutesE.HOME)
  } catch (error) {
    yield put(setSnackbar('User not found!'))
  }
}

function* signUpWorker(action: PayloadAction<SignUpCreatorProps>) {
  const { router, data, callback } = action.payload
  const { userName } = data

  try {
    const { accessToken, refreshToken } = yield call(signUp, {
      ...data,
      userAge: +data.userAge,
    })

    yield call(storeUser, { userName }, accessToken, refreshToken)
    router.replace(RoutesE.HOME)
    callback()
  } catch (error) {
    yield put(setSnackbar('User already exists!'))
  }
}

function* logoutWorker(action: PayloadAction<LogoutCreatorProps>) {
  const refreshToken = getDataFromLocalStorage('refreshToken')

  yield put(setColumns([]))
  removeUser()
  action.payload.router.replace(RoutesE.SIGN_IN)
  yield call(logOut, refreshToken)
}

function* userWatcher() {
  yield takeEvery(UserCreators.ASYNC_SING_IN, signInWorker)
  yield takeLatest(UserCreators.ASYNC_SIGN_UP, signUpWorker)
  yield takeEvery(UserCreators.ASYNC_LOGOUT, logoutWorker)
}

export default userWatcher
