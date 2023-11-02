import { Component, createRef } from 'react'
import userIcon from 'src/../public/assets/icons/user.svg'

import { AVATAR_ITEMS } from 'src/components/Avatar/constants'
import { PrimaryContext } from 'src/context'
import { logOut } from 'src/services/userService'
import { onLogout } from 'src/helpers/userHelper'
import { ROUTES } from 'src/constants'
import 'src/components/Avatar/styles.css'

class Avatar extends Component {
  static contextType = PrimaryContext

  constructor(props) {
    super(props)

    this.state = { isActive: false }
    this.avatarRef = createRef()
  }

  onClickItem = async (value) => {
    if (value === 'logout') {
      await logOut()
      onLogout()
      this.context.setRoute(ROUTES.SIGN_IN)
    }
  }

  onClickAvatar = () => {
    this.setState(({ isActive }) => ({
      isActive: !isActive,
    }))
  }

  onClickOutside = (e) => {
    const isClickedOutside =
      this.avatarRef && !this.avatarRef.current.contains(e.target)

    if (isClickedOutside) {
      this.setState({ isActive: false })
    }
  }

  componentDidMount() {
    document.addEventListener('click', this.onClickOutside)
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.onClickOutside)
  }

  render() {
    return (
      <div className="avatar" ref={this.avatarRef}>
        <button className="avatar__btn" onClick={this.onClickAvatar}>
          <img className="icon" src={userIcon} alt="user icon" />
        </button>

        {this.state.isActive && (
          <ul className="avatar__items">
            {AVATAR_ITEMS.map(({ value, name }) => (
              <li key={value} className="avatar__item">
                <button
                  onClick={() => this.onClickItem(value)}
                  className="avatar__item__btn"
                >
                  {name}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default Avatar
