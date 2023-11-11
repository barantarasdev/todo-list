import { combineReducers } from '@reduxjs/toolkit'
import snackbarReducer from 'src/store/slices/snackbarSlice'
import colsReducer from 'src/store/slices/todosSlice'
import userReducer from 'src/store/slices/userSlice'

const rootReducer = combineReducers({
  snackbar: snackbarReducer,
  cols: colsReducer,
  user: userReducer,
})

export default rootReducer
