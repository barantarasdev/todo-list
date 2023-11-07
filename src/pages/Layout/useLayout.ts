import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getDataFromLocalStorage } from 'src/helpers/storageHelper'
import { setTodosCreator } from 'src/store/slices/todosSlice/actionCreators'
import { setUser } from 'src/store/slices/userSlice'
import { RoutesPath } from 'src/types'

function useLayout() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    const user = getDataFromLocalStorage('user')

    if (user) {
      const { userId, userName } = user
      dispatch(setTodosCreator(userId))
      dispatch(setUser({ userName, userId }))

      return navigate(RoutesPath.HOME)
    }

    return navigate(RoutesPath.SIGN_IN)
  }, [dispatch, setTodosCreator])
}

export default useLayout
