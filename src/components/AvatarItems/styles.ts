import {square} from 'src/styles/mixins'
import styled from 'styled-components'

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 0;
  bottom: calc(-1.3 * var(--avatar-item-height));
  z-index: 2;
`

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
