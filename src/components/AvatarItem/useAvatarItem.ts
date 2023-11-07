import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { AvatarItemProps } from 'src/components/AvatarItem/types'
import { useAppDispatch } from 'src/hooks/useRedux'
import { LogoutCreator } from 'src/store/slices/userSlice/actionCreators'
import { AvatarItems } from 'src/types'

function useAvatarItem({ item: { value } }: AvatarItemProps) {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const onClick = useCallback(() => {
    if (value === AvatarItems.LOGOUT) {
      dispatch(LogoutCreator(navigate))
    }
  }, [value, AvatarItems, LogoutCreator])

  return { onClick }
}

export default useAvatarItem
