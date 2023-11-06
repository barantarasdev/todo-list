import { NavigateFunction } from 'react-router'
import { NavigateT } from 'src/types'

export type SignInProps = {
  signIn: (email: string, password: string, navigate: NavigateFunction) => void
} & NavigateT
