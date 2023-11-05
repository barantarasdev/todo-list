import {Component, RefObject, createRef} from 'react'
import userIcon from 'src/../public/assets/icons/user.svg'
import * as Styled from 'src/components/Avatar/styles'
import {AvatarStatesT} from 'src/components/Avatar/types'
import AvatarItems from 'src/components/AvatarItems'

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
      <Styled.Avatar ref={this.avatarRef}>
        <Styled.Button type="button" onClick={this.onClickAvatar}>
          <img src={userIcon} alt="user icon" />
        </Styled.Button>

        {isActive && <AvatarItems />}
      </Styled.Avatar>
    )
  }
}

export default Avatar
