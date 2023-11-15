/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useState } from 'react'
import { useRouter } from 'next/navigation'

import signUpValidationSchema from '@/app/auth/signUp/form'
import { SignUpCreator } from '@/store/slices/userSlice/actionCreator'
import { useAppDispatch } from '@/hooks/useRedux'
import { validate } from '@/utils'
import { SignInT, SignUpT } from '@/types'

function useSignUp() {
  const dispatch = useAppDispatch()
  const router = useRouter()

  const [isSubmitted, setIsSubmitted] = useState(false)

  const onSubmit = useCallback(
    (values: SignUpT) => {
      if (isSubmitted) {
        dispatch(SignUpCreator({ data: values, router }))
        setIsSubmitted(false)

        return
      }

      setIsSubmitted(true)
    },
    [isSubmitted, setIsSubmitted, dispatch]
  )

  const onValidate = useCallback(
    (values: SignInT) => {
      if (isSubmitted) {
        return validate({ values, schema: signUpValidationSchema })
      }

      return undefined
    },
    [isSubmitted]
  )

  return {
    isSubmitted,
    onSubmit,
    onValidate,
  }
}

export default useSignUp
