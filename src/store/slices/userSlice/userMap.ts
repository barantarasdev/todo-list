import { Dispatch } from '@reduxjs/toolkit'
import { NavigateFunction } from 'react-router'
import { LogoutCreator } from 'src/store/slices/userSlice/actionCreators'

const mapDispatchToUserProps = (dispatch: Dispatch) => ({
  logout: (navigate: NavigateFunction) => dispatch(LogoutCreator(navigate)),
})

export default mapDispatchToUserProps
