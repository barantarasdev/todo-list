import styled from 'styled-components'

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 0;
  bottom: calc(-1.3 * var(--avatar-item-height));
  z-index: 2;
`

export default List
