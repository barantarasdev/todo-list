import {combineReducers} from '@reduxjs/toolkit'
import snackbarReducer from 'src/store/slices/snackbarSlice'
import todoReducer from 'src/store/slices/todosSlice'

const rootReducer = combineReducers({
  snackbar: snackbarReducer,
  todos: todoReducer,
})

export default rootReducer
