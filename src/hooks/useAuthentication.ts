/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

import { useAppDispatch } from '@/hooks/useRedux'
import { RoutesE } from '@/types'
import { getDataFromLocalStorage } from '@/utils/localeStorage'
import { setBoardsCreator } from '@/store/slices/boardsSlice/actionCreator'

const useAuthentication = (isProtected: boolean) => {
  const dispatch = useAppDispatch()
  const user = getDataFromLocalStorage('user')
  const router = useRouter()

  useEffect(() => {
    if (!user && isProtected) {
      router.replace(RoutesE.SIGN_IN)

      return
    }

    if (user && user.userName) {
      dispatch(setBoardsCreator({ router }))
    }
  }, [isProtected, dispatch, user])
}

export default useAuthentication
