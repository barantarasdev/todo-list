import {Component} from 'react'
import * as Styled from 'src/components/AvatarItem/styles'
import {AvatarItemProps} from 'src/components/AvatarItem/types'
import {removeUser} from 'src/helpers/userHelper'
import withNavigation from 'src/hocks/withNavigation'
import {AvatarItems, RoutesPath} from 'src/types'

class AvatarItem extends Component<AvatarItemProps> {
  onClick = async () => {
    const {
      navigate,
      item: {value},
    } = this.props

    if (value === AvatarItems.LOGOUT) {
      await removeUser()
      navigate(RoutesPath.SIGN_IN)
    }
  }

  render() {
    const {
      item: {title},
    } = this.props

    return (
      <Styled.Item>
        <Styled.Button onClick={this.onClick}>{title}</Styled.Button>
      </Styled.Item>
    )
  }
}

export default withNavigation(AvatarItem)
