/* eslint-disable react-hooks/exhaustive-deps */

import { useCallback } from 'react'
import { useRouter } from 'next/navigation'

import { SignInCreator } from '@/store/slices/userSlice/actionCreator'
import { useAppDispatch } from '@/hooks/useRedux'
import { ValidateValuesT } from '@/types'

function useSignIn() {
  const dispatch = useAppDispatch()
  const router = useRouter()

  const onSubmit = useCallback(
    ({ userEmail, userPassword }: ValidateValuesT) => {
      const isAvailable = userEmail && userPassword

      if (isAvailable) {
        dispatch(SignInCreator({ userEmail, userPassword, router }))
      }
    },
    [dispatch]
  )

  return {
    onSubmit,
  }
}

export default useSignIn
