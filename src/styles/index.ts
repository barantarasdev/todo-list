import {Link} from 'react-router-dom'
import {flexCenter} from 'src/styles/mixins'
import styled from 'styled-components'

export const RootContent = styled.div`
  min-height: 100vh;
  padding: 20px;
  color: var(--color-white);
  background-image: url('/assets/images/bg.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  scroll-behavior: smooth;
  ${flexCenter}
`

export const AnimatedButton = styled.button`
  transition: opacity var(--primary-duration);

  &:hover {
    opacity: 0.8;
  }
`

export const AnimatedLink = styled(Link)`
  transition: color var(--primary-duration);

  &:hover {
    color: var(--primary-color);
  }
`

export const InputBlock = styled.div`
  width: 100%;
`

export const Label = styled.label<{$isError: boolean}>`
  height: 25px;
  display: flex;
  align-items: center;
  font-size: 13px;
  letter-spacing: 1.1px;
  color: var(--color-error);
  pointer-events: none;
  transition: all var(--primary-duration);
  opacity: ${({$isError}) => ($isError ? 1 : 0)};
`
