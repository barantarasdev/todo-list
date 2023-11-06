import { Component } from 'react'
import { connect } from 'react-redux'
import * as Styled from 'src/components/AvatarItem/styles'
import { AvatarItemProps } from 'src/components/AvatarItem/types'
import withNavigation from 'src/hocks/withNavigation'
import { mapDispatchToUserProps } from 'src/store/slices/userSlice/userMap'
import { AvatarItems } from 'src/types'

class AvatarItem extends Component<AvatarItemProps> {
  onClick = async () => {
    const {
      navigate,
      logout,
      item: { value },
    } = this.props
    if (value === AvatarItems.LOGOUT) {
      logout(navigate)
    }
  }

  render() {
    const {
      item: { title },
    } = this.props

    return (
      <Styled.Item>
        <Styled.Button onClick={this.onClick}>{title}</Styled.Button>
      </Styled.Item>
    )
  }
}

export default withNavigation(connect(null, mapDispatchToUserProps)(AvatarItem))
