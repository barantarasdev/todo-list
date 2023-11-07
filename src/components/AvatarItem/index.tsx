import {
  AvatarItemButton,
  StyledAvatarItem,
} from 'src/components/AvatarItem/styles'
import { AvatarItemProps } from 'src/components/AvatarItem/types'
import useAvatarItem from 'src/components/AvatarItem/useAvatarItem'

function AvatarItem({ item }: AvatarItemProps) {
  const { onClick } = useAvatarItem({ item })

  return (
    <StyledAvatarItem>
      і<AvatarItemButton onClick={onClick}>{item.title}</AvatarItemButton>
    </StyledAvatarItem>
  )
}

export default AvatarItem
