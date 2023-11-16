/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

import { setBoardsCreator } from '@/store/slices/columnSlice/actionCreator'
import { setUser } from '@/store/slices/userSlice'
import { useAppDispatch } from '@/hooks/useRedux'
import { RoutesE } from '@/types'
import { getDataFromLocalStorage } from '@/utils/localeStorage'

const useAuthentication = (isProtected: boolean) => {
  const dispatch = useAppDispatch()
  const user = getDataFromLocalStorage('user')
  const router = useRouter()

  useEffect(() => {
    if (!user && isProtected) {
      router.replace(RoutesE.SIGN_IN)

      return
    }

    if (user && user.userId) {
      dispatch(setUser({ ...user }))
      dispatch(setBoardsCreator({ userId: user.userId }))
    }
  }, [isProtected, dispatch, user])
}

export default useAuthentication
