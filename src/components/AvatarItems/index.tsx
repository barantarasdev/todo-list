import AvatarItem from 'src/components/AvatarItem'
import AvatarItemsList from 'src/components/AvatarItems/styles'
import { AVATAR_ITEMS } from 'src/constants'

function AvatarItems() {
  return (
    <AvatarItemsList>
      {AVATAR_ITEMS.map(item => (
        <AvatarItem key={item.value} item={item} />
      ))}
    </AvatarItemsList>
  )
}

export default AvatarItems
