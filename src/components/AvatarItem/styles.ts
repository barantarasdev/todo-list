import { square } from 'src/styles/mixins'
import styled from 'styled-components'

export const StyledAvatarItem = styled.li`
  min-width: 160px;
  height: var(--avatar-item-height);
`

export const AvatarItemButton = styled.button`
  font-size: 22px;
  color: var(--secondary-color);
  background-color: var(--color-white);

  &:hover {
    text-decoration: underline;
  }

  ${square('100%')}
`
