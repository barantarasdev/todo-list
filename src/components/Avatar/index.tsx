import userIcon from 'src/../public/assets/icons/user.svg'
import * as Styled from 'src/components/Avatar/styles'
import useAvatar from 'src/components/Avatar/useAvatar'
import AvatarItems from 'src/components/AvatarItems'

const Avatar = () => {
  const { isActive, avatarRef, toggleIsActive } = useAvatar()

  return (
    <Styled.Avatar ref={avatarRef}>
      <Styled.Button type="button" onClick={toggleIsActive}>
        <img src={userIcon} alt="user icon" />
      </Styled.Button>

      {isActive && <AvatarItems />}
    </Styled.Avatar>
  )
}

export default Avatar
