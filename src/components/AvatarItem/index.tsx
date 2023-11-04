import {Component} from 'react'
import * as Styled from 'src/components/AvatarItem/styles'
import {AvatarItemProps} from 'src/components/AvatarItem/types'
import withNavigation from 'src/hocks/withNavigation'
import {AvatarItems, Routes} from 'src/types'

class AvatarItem extends Component<AvatarItemProps> {
  onClick = () => {
    const {
      navigate,
      item: {value},
    } = this.props

    if (value === AvatarItems.LOGOUT) {
      navigate(Routes.SIGN_IN)
    }
  }

  render() {
    const {
      item: {title},
    } = this.props

    return (
      <Styled.Item>
        <Styled.Button type="button" onClick={this.onClick}>
          {title}
        </Styled.Button>
      </Styled.Item>
    )
  }
}

export default withNavigation(AvatarItem)
