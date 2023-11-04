import {setSnackbar as setSnackbarSlice} from 'src/store/slices/snackbarSlice'
import {NavigateT, User} from 'src/types'

export type SignUpStatesT = {
  formData: User
  errors: Record<string, string>
}

export type SignUpProps = {
  setSnackbar: typeof setSnackbarSlice
} & NavigateT
