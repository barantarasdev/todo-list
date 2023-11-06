export type UserStateT = {
  userName: string | null
  userId: string | null
}

export enum UserCreators {
  ASYNC_SING_IN = 'async_sign_in',
  ASYNC_SIGN_UP = 'async_sign_up',
  ASYNC_LOGOUT = 'async_logout',
}
