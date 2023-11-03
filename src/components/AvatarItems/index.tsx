import {Component, ContextType} from 'react'

import {AVATAR_ITEMS} from 'src/constants'
import PrimaryContext from 'src/context'
import {removeUser} from 'src/helpers/userHelper'
import {logOut} from 'src/services/userService'
import 'src/components/AvatarItems/styles.css'
import {Routes} from 'src/types'

class AvatarItem extends Component {
  static contextType = PrimaryContext

  context!: ContextType<typeof PrimaryContext>

  onClick = async (value: string) => {
    const {setRoute} = this.context

    if (value === 'logout') {
      await logOut()
      removeUser()
      setRoute(Routes.SIGN_IN)
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

export default AvatarItem
