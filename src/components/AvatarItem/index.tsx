import { FC } from 'react'
import * as Styled from 'src/components/AvatarItem/styles'
import { AvatarItemProps } from 'src/components/AvatarItem/types'
import useAvatarItem from 'src/components/AvatarItem/useAvatarItem'

const AvatarItem: FC<AvatarItemProps> = ({ item }) => {
  const { onClick } = useAvatarItem({ item })

  return (
    <Styled.Item>
      <Styled.Button onClick={onClick}>{item.title}</Styled.Button>
    </Styled.Item>
  )
}

export default AvatarItem
