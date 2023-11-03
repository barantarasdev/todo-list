import {square} from 'src/styles/mixins'
import styled from 'styled-components'

export const InputContent = styled.div`
  width: 100%;
  height: var(--height-input);
  background-color: var(--primary-blur);
  border-radius: var(--primary-border-radius);
  position: relative;
`

export const Input = styled.input<{$isActive: boolean}>`
  padding: 20px var(--padding-left-input) var(--padding-left-input);
  font-size: 20px;

  &::placeholder {
    opacity: ${props => (props.$isActive ? 1 : 0)};
    transition: opacity var(--primary-duration);
  }

  ${square('100%')}
}
`

export const TopLabel = styled.label<{$isActive: boolean; $isError?: boolean}>`
  font-size: ${props => (props.$isActive ? '15px' : '20px')};
  color: ${props =>
    props.$isError ? 'var(--color-error)' : 'var(--secondary-color)'};
  position: absolute;
  left: var(--padding-left-input);
  top: ${props => (props.$isActive ? '20%' : '50%')};
  transform: translateY(-50%);
  cursor: text;
  transition-property: font-size, top, color;
  transition-duration: var(--primary-duration);
`
