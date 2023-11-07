import { AnimatedButton, AnimatedLink } from 'src/styles'
import { flexCenter, square } from 'src/styles/mixins'
import styled from 'styled-components'

export const AuthFormBlock = styled.div`
  gap: var(--primary-gap);
  ${square('100%')}
  ${flexCenter}
`

export const AuthTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 70px;
  font-weight: 700;
`

export const AuthForm = styled.form`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const AuthButton = styled(AnimatedButton)`
  padding: 15px 40px;
  margin-bottom: var(--primary-gap);
  font-size: 22px;
  font-weight: 700;
  color: var(--secondary-color);
  background-color: var(--primary-blur);
  border-radius: var(--primary-border-radius);
`

export const AuthLink = styled(AnimatedLink)`
  font-size: 20px;
  font-weight: 700;
  color: var(--color-white);
`
