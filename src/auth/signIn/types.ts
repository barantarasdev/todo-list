import {setSnackbar as setSnackbarSlice} from 'src/store/slices/snackbarSlice'
import {NavigateT} from 'src/types'

export type SignInProps = {
  setSnackbar: typeof setSnackbarSlice
} & NavigateT
