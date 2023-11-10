import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from 'src/hooks/useRedux'
import { SignInCreator } from 'src/store/slices/userSlice/actionCreators'

function useSignIn() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const onSubmit = useCallback(
    ({ userEmail, userPassword }: any) => {
      dispatch(SignInCreator(userEmail, userPassword, navigate))
    },
    [dispatch, SignInCreator]
  )

  return {
    onSubmit,
  }
}

export default useSignIn
