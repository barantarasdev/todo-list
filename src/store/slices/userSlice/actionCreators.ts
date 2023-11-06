import { NavigateFunction } from 'react-router'
import { UserCreators } from 'src/store/slices/userSlice/types'

export const SignInCreator = (
  email: string,
  password: string,
  navigate: NavigateFunction
) => ({
  type: UserCreators.ASYNC_SING_IN,
  payload: { userEmail: email, userPassword: password, navigate },
})

export const SignUpCreator = (data: any, navigate: NavigateFunction) => ({
  type: UserCreators.ASYNC_SIGN_UP,
  payload: { data, navigate },
})

export const LogoutCreator = (navigate: NavigateFunction) => ({
  type: UserCreators.ASYNC_LOGOUT,
  payload: { navigate },
})
