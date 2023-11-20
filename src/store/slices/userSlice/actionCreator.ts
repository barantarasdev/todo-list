import {
  LogoutCreatorProps,
  SignInCreatorProps,
  SignUpCreatorProps,
  UserCreators,
} from '@/store/slices/userSlice/types'

export const SignInCreator = ({
  userEmail,
  userPassword,
  router,
}: SignInCreatorProps) => ({
  type: UserCreators.ASYNC_SING_IN,
  payload: { userEmail, userPassword, router },
})

export const SignUpCreator = ({
  data,
  router,
  callback,
}: SignUpCreatorProps) => ({
  type: UserCreators.ASYNC_SIGN_UP,
  payload: { data, router, callback },
})

export const LogoutCreator = ({ router }: LogoutCreatorProps) => ({
  type: UserCreators.ASYNC_LOGOUT,
  payload: { router },
})
