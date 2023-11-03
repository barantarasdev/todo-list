import {Component} from 'react'

import {AVATAR_ITEMS} from 'src/constants'
import {removeUser} from 'src/helpers/userHelper'
import withNavigation from 'src/hocks/withNavigation'
import {logOut} from 'src/services/userService'
import 'src/components/AvatarItems/styles.css'
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
      <ul className="avatar__items">
        {AVATAR_ITEMS.map(({value, title}) => (
          <li key={value} className="avatar__item">
            <button
              type="button"
              onClick={() => this.onClick(value)}
              className="avatar__item__btn"
            >
              {title}
            </button>
          </li>
        ))}
      </ul>
    )
  }
}

export default withNavigation(AvatarItem)
