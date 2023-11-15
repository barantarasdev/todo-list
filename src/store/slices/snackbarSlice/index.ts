import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { SnackbarStateT } from '@/store/slices/snackbarSlice/types'

const initialState: SnackbarStateT = {
  snackbar: '',
}

const reducers = {
  setSnackbar: (
    state: SnackbarStateT,
    action: PayloadAction<string | null>
  ) => ({
    snackbar: action.payload,
  }),
}

const snackbarSlice = createSlice({
  name: 'snackbar',
  initialState,
  reducers,
})

export const { setSnackbar } = snackbarSlice.actions

export default snackbarSlice.reducer
