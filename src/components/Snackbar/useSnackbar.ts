import { useEffect, useRef } from 'react'
import { SNACKBAR_TIME } from 'src/constants'
import useActive from 'src/hooks/useActive'
import { useAppDispatch, useAppSelector } from 'src/hooks/useRedux'
import { setSnackbar } from 'src/store/slices/snackbarSlice'

function useSnackbar() {
  const { isActive, toggleIsActive } = useActive()
  const timeoutIdRef = useRef<number | null>(null)

  const dispatch = useAppDispatch()
  const { snackbar } = useAppSelector(state => state.snackbar)

  useEffect(() => {
    if (snackbar) {
      toggleIsActive()

      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current)
      }

      timeoutIdRef.current = window.setTimeout(() => {
        toggleIsActive()

        dispatch(setSnackbar(''))
      }, SNACKBAR_TIME)
    }

    return () => {
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current)
      }
    }
  }, [
    snackbar,
    toggleIsActive,
    timeoutIdRef,
    dispatch,
    setSnackbar,
    SNACKBAR_TIME,
  ])

  return { isActive, snackbar }
}

export default useSnackbar
