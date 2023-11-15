import { useCallback } from 'react'

import { setSnackbar } from '@/store/slices/snackbarSlice'
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux'

function useSnackbar() {
  const dispatch = useAppDispatch()
  const { snackbar } = useAppSelector(state => state.snackbar)

  const onClose = useCallback(() => {
    dispatch(setSnackbar(null))
  }, [dispatch])

  return { message: snackbar, onClose }
}

export default useSnackbar
