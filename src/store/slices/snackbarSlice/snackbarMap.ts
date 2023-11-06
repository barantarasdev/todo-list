import { Dispatch } from '@reduxjs/toolkit'
import { RootState } from 'src/store'
import { setSnackbar } from 'src/store/slices/snackbarSlice/index'

export const mapStateToSnackbarProps = (state: RootState) => ({
  snackbar: state.snackbar.snackbar,
})

export const mapDispatchToSnackbarProps = (dispatch: Dispatch) => ({
  setSnackbar: (message: string) => dispatch(setSnackbar(message)),
})
