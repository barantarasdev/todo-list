import { Dispatch } from '@reduxjs/toolkit'
import { NavigateFunction } from 'react-router'
import { RootState } from 'src/store'
import {
  LogoutCreator,
  SignInCreator,
  SignUpCreator,
} from 'src/store/slices/userSlice/actionCreators'

export const mapStateToUserProps = (state: RootState) => ({
  user: state.user,
})

export const mapDispatchToUserProps = (dispatch: Dispatch) => ({
  signIn: (email: string, password: string, navigate: NavigateFunction) =>
    dispatch(SignInCreator(email, password, navigate)),
  signUp: (data: any, navigate: NavigateFunction) =>
    dispatch(SignUpCreator(data, navigate)),
  logout: (navigate: NavigateFunction) => dispatch(LogoutCreator(navigate)),
})
