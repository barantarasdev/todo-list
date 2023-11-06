import { square } from 'src/styles/mixins'
import styled from 'styled-components'

export const InputContent = styled.div`
  width: 100%;
  height: var(--height-input);
  background-color: var(--primary-blur);
  border-radius: var(--primary-border-radius);
  position: relative;

  --eye-button-width: 40px;
`

export const Input = styled.input<{ $isActive: boolean }>`
  padding: 20px var(--padding-left-input) var(--padding-left-input);
  font-size: 19px;

  &::placeholder {
    opacity: ${({ $isActive }) => ($isActive ? 1 : 0)};
    transition: opacity var(--primary-duration);
  }

  ${square('100%')}
}
`

export const TopLabel = styled.label<{
  $isActive: boolean
  $isError?: boolean
}>`
  font-size: ${({ $isActive }) => ($isActive ? '15px' : '20px')};
  color: ${({ $isError }) =>
    $isError ? 'var(--color-error)' : 'var(--secondary-color)'};
  position: absolute;
  left: var(--padding-left-input);
  top: ${({ $isActive }) => ($isActive ? '20%' : '50%')};
  transform: translateY(-50%);
  cursor: text;
  transition-property: font-size, top, color;
  transition-duration: var(--primary-duration);
`

export const EyeButton = styled.button`
  padding: 0px 10px;
  position: absolute;
  height: 100%;
  right: 0;
`
