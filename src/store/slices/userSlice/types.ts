import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'

import { SignUpT } from '@/types'

export type UserStateT = {
  userName: string | null
  userId: string | null
}

export type SignInCreatorProps = {
  userEmail: string
  userPassword: string
  router: AppRouterInstance
}

export type SignUpCreatorProps = {
  data: SignUpT
  callback: () => void
  router: AppRouterInstance
}

export type LogoutCreatorProps = {
  router: AppRouterInstance
}

export enum UserCreators {
  ASYNC_SING_IN = 'ASYNC_SING_IN',
  ASYNC_SIGN_UP = 'ASYNC_SIGN_UP',
  ASYNC_LOGOUT = 'ASYNC_LOGOUT',
}
