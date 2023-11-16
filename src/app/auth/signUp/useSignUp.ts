/* eslint-disable react-hooks/exhaustive-deps */

import { useCallback, useState } from 'react'
import { useRouter } from 'next/navigation'
import { FormApi } from 'final-form'

import signUpValidationSchema from '@/app/auth/signUp/form'
import { SignUpCreator } from '@/store/slices/userSlice/actionCreator'
import { useAppDispatch } from '@/hooks/useRedux'
import validate from '@/utils/validate'
import { SignInT, SignUpT } from '@/types'

function useSignUp() {
  const dispatch = useAppDispatch()
  const router = useRouter()

  const [isSubmitted, setIsSubmitted] = useState(false)

  const onSubmit = useCallback(
    (
      values: SignUpT,
      form: FormApi<SignUpT, Partial<Record<string, unknown>>>
    ) => {
      setIsSubmitted(true)

      if (form.getState().valid && values.userEmail?.length) {
        dispatch(
          SignUpCreator({
            data: values,
            router,
            callback: () => {
              setIsSubmitted(false)
            },
          })
        )
      }
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

  return { onSubmit, onValidate }
}

export default useSignUp
