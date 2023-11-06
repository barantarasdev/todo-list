import styled from 'styled-components'

const StyledSnackbar = styled.div`
  min-width: 200px;
  padding: 20px 50px;
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--color-white);
  background-color: var(--color-error);
  border-radius: var(--primary-border-radius);
  position: absolute;
  top: 40px;
  right: 40px;
`

export default StyledSnackbar
