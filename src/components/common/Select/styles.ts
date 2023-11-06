import styled from 'styled-components'

const StyledSelect = styled.select<{ $isError?: boolean }>`
  width: 100%;
  height: var(--height-input);
  padding-left: var(--padding-left-input);
  font-family: inherit;
  font-size: inherit;
  color: ${({ $isError }) =>
    $isError ? 'var(--color-error)' : 'var(--secondary-color)'};
  background-color: var(--primary-blur);
  border-radius: var(--primary-border-radius);
  transition: color var(--primary-duration);
`

export default StyledSelect
