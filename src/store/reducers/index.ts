import { combineReducers } from '@reduxjs/toolkit'

import snackbarReducer from '@/store/slices/snackbarSlice'
import userReducer from '@/store/slices/userSlice'
import columnsReducer from '@/store/slices/columnSlice'

const rootReducer = combineReducers({
  snackbar: snackbarReducer,
  columns: columnsReducer,
  user: userReducer,
})

export default rootReducer
