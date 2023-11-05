import {NavigateT} from 'src/types'

export type SignInProps = {
  setSnackbar: (message: string) => void
  setTodos: (id: string) => void
} & NavigateT
