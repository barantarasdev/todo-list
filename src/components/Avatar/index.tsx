import {Component, createRef, RefObject} from 'react'
import userIcon from 'src/../public/assets/icons/user.svg'

import {AvatarStatesT} from 'src/components/Avatar/types'
import AvatarItems from 'src/components/AvatarItems'
import 'src/components/Avatar/styles.css'

class Avatar extends Component<{}, AvatarStatesT> {
  private readonly avatarRef: RefObject<HTMLInputElement>

  constructor(props: {}) {
    super(props)

    this.state = {isActive: false}
    this.avatarRef = createRef()
  }

  componentDidMount() {
    document.addEventListener('click', this.onClickOutside)
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.onClickOutside)
  }

  onClickAvatar = () => {
    this.setState(({isActive}) => ({
      isActive: !isActive,
    }))
  }

  onClickOutside = (e: globalThis.MouseEvent) => {
    const isClickedOutside =
      this.avatarRef && !this.avatarRef.current?.contains(e.target as Node)

    if (isClickedOutside) {
      this.setState({isActive: false})
    }
  }

  render() {
    const {isActive} = this.state

    return (
      <div className="avatar" ref={this.avatarRef}>
        <button
          type="button"
          className="avatar__btn"
          onClick={this.onClickAvatar}
        >
          <img className="icon" src={userIcon} alt="user icon" />
        </button>

        {isActive && <AvatarItems />}
      </div>
    )
  }
}

export default Avatar
