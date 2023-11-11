import { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SignUpValues } from 'src/auth/signUp/types'
import { useAppDispatch } from 'src/hooks/useRedux'
import { SignUpCreator } from 'src/store/slices/userSlice/actionCreators'

function useSignUp() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const onSubmit = useCallback(
    (values: SignUpValues) => {
      const isValues = Object.keys(values).length

      if (isValues) {
        dispatch(
          SignUpCreator({ ...values }, navigate, () => {
            setIsSubmitted(false)
          })
        )
      }

      setIsSubmitted(true)
    },
    [setIsSubmitted, SignUpCreator, dispatch]
  )

  return {
    isSubmitted,
    onSubmit,
  }
}

export default useSignUp
