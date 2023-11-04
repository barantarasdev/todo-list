/* eslint-disable no-param-reassign */

import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {SnackbarState} from 'src/store/slices/snackbarSlice/types'

const initialState: SnackbarState = {
  snackbar: '',
}

const reducers = {
  setSnackbar: (state: SnackbarState, action: PayloadAction<string>) => {
    state.snackbar = action.payload
  },
}

const snackbarSlice = createSlice({
  name: 'Snackbar',
  initialState,
  reducers,
})

export const {setSnackbar} = snackbarSlice.actions

export default snackbarSlice.reducer
