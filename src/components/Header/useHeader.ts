import { MouseEvent, useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from 'src/hooks/useRedux'
import { LogoutCreator } from 'src/store/slices/userSlice/actionCreators'

function useHeader() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const onClose = useCallback(() => {
    setAnchorEl(null)
  }, [setAnchorEl])

  const onClick = useCallback(
    (value: string) => {
      if (value === 'logout') {
        dispatch(LogoutCreator(navigate))
      }

      onClose()
    },
    [dispatch, LogoutCreator]
  )

  const onOpen = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      setAnchorEl(e.currentTarget)
    },
    [setAnchorEl]
  )

  return { onOpen, onClick, anchorEl, onClose }
}

export default useHeader
