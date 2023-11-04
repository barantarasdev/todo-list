import {RootState} from 'src/store'
import {setSnackbar} from 'src/store/slices/snackbarSlice/index'

export const mapStateToSnackbarProps = (state: RootState) => ({
  snackbar: state.snackbar.snackbar,
})

export const mapDispatchToSnackbarProps = {setSnackbar}
