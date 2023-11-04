import {setSnackbar as setSnackbarSlice} from 'src/store/slices/snackbarSlice'

export type SnackbarStatesT = {
  isActive: boolean
}

export type SnackbarProps = {
  snackbar: string
  setSnackbar: typeof setSnackbarSlice
}
