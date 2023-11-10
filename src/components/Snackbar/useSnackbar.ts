import { useCallback } from 'react'
import { useAppDispatch, useAppSelector } from 'src/hooks/useRedux'
import { setSnackbar } from 'src/store/slices/snackbarSlice'

function useSnackbar() {
  const dispatch = useAppDispatch()
  const { snackbar } = useAppSelector(state => state.snackbar)

  const onClose = useCallback(() => {
    dispatch(setSnackbar(null))
  }, [dispatch, setSnackbar])

  return { message: snackbar, onClose }
}

export default useSnackbar
