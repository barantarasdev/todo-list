import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

import { setColumnsCreator } from '@/store/slices/columnSlice/actionCreator'
import { setUser } from '@/store/slices/userSlice'
import { useAppDispatch } from '@/hooks/useRedux'
import { getDataFromLocalStorage } from '@/utils'
import { RoutesE } from '@/types'

const useAuthentication = (isProtected: boolean) => {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const user = getDataFromLocalStorage('user')

  useEffect(() => {
    if (!user && isProtected) {
      router.replace(RoutesE.SIGN_IN)

      return
    }

    if (user) {
      dispatch(setUser({ user }))
      dispatch(setColumnsCreator({ userId: user.userId }))
      router.replace(RoutesE.HOME)
    }
  }, [isProtected, router, dispatch, user])
}

export default useAuthentication
