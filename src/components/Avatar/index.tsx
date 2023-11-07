import userIcon from 'src/../public/assets/icons/user.svg'
import { AvatarButton, StyledAvatar } from 'src/components/Avatar/styles'
import useAvatar from 'src/components/Avatar/useAvatar'
import AvatarItems from 'src/components/AvatarItems'

function Avatar() {
  const { isActive, avatarRef, toggleIsActive } = useAvatar()

  return (
    <StyledAvatar ref={avatarRef}>
      <AvatarButton type="button" onClick={toggleIsActive}>
        <img src={userIcon} alt="user icon" />
      </AvatarButton>

      {isActive && <AvatarItems />}
    </StyledAvatar>
  )
}

export default Avatar
