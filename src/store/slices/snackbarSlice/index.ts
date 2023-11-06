/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { SnackbarStateT } from 'src/store/slices/snackbarSlice/types'

const initialState: SnackbarStateT = {
  snackbar: '',
}

const reducers = {
  setSnackbar: (state: SnackbarStateT, action: PayloadAction<string>) => {
    state.snackbar = action.payload
  },
}

const snackbarSlice = createSlice({
  name: 'snackbar',
  initialState,
  reducers,
})

export const { setSnackbar } = snackbarSlice.actions

export default snackbarSlice.reducer
