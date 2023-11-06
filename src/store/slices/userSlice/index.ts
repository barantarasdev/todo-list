import { createSlice } from '@reduxjs/toolkit'
import initialState from 'src/store/slices/userSlice/initialState'

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => ({
      ...state,
      userName: action.payload.userName,
      userId: action.payload.userId,
    }),
    deleteUser: () => ({
      userId: null,
      userName: null,
    }),
  },
})

export const { setUser, deleteUser } = userSlice.actions

export default userSlice.reducer
