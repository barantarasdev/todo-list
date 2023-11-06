import { PureComponent } from 'react'
import AvatarItem from 'src/components/AvatarItem'
import List from 'src/components/AvatarItems/styles'
import { AVATAR_ITEMS } from 'src/constants'

class AvatarItems extends PureComponent {
  render() {
    return (
      <List>
        {AVATAR_ITEMS.map(item => (
          <AvatarItem key={item.value} item={item} />
        ))}
      </List>
    )
  }
}

export default AvatarItems
