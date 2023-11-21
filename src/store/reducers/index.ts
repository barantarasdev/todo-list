import { combineReducers } from '@reduxjs/toolkit'

import snackbarReducer from '@/store/slices/snackbarSlice'
import columnsReducer from '@/store/slices/boardsSlice'

const rootReducer = combineReducers({
  snackbar: snackbarReducer,
  columns: columnsReducer,
})

export default rootReducer
