import styled from 'styled-components'

const Button = styled.button<{ $isChecked: boolean }>`
  width: 30px;
  height: 25px;
  border: 2px solid
    ${({ $isChecked }) =>
      $isChecked ? 'var(--primary-color)' : 'var(--secondary-color)'};
  transition: border-color var(--primary-duration);

  &:hover {
    border-color: var(--primary-color);
  }
`

export default Button
