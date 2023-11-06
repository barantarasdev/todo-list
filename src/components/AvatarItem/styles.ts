import { square } from 'src/styles/mixins'
import styled from 'styled-components'

export const Item = styled.li`
  min-width: 160px;
  height: var(--avatar-item-height);
`

export const Button = styled.button`
  font-size: 22px;
  color: var(--secondary-color);
  background-color: var(--color-white);

  &:hover {
    text-decoration: underline;
  }
  ${square('100%')}
`
