import {Component} from 'react'

import * as Styled from 'src/components/AvatarItems/styles'
import {AVATAR_ITEMS} from 'src/constants'
import {removeUser} from 'src/helpers/userHelper'
import withNavigation from 'src/hocks/withNavigation'
import {logOut} from 'src/services/userService'
import {NavigateT, Routes} from 'src/types'

class AvatarItem extends Component<NavigateT> {
  onClick = async (value: string) => {
    const {navigate} = this.props

    if (value === 'logout') {
      await logOut()
      removeUser()
      navigate(Routes.SIGN_IN)
    }
  }

  render() {
    return (
      <Styled.List>
        {AVATAR_ITEMS.map(({value, title}) => (
          <Styled.Item key={value}>
            <Styled.Button type="button" onClick={() => this.onClick(value)}>
              {title}
            </Styled.Button>
          </Styled.Item>
        ))}
      </Styled.List>
    )
  }
}

export default withNavigation(AvatarItem)
