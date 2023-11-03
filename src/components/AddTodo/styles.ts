import {AnimatedButton} from 'src/styles'
import {flexCenter, square} from 'src/styles/mixins'
import styled from 'styled-components'

export const FormBlock = styled.div`
  width: 100%;
`

export const Form = styled.form`
  width: 100%;
  display: flex;
`

export const InputBlock = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: var(--primary-blur);
  border-bottom-left-radius: var(--primary-border-radius);
  border-top-left-radius: var(--primary-border-radius);
`

export const Input = styled.input`
  padding: var(--padding-left-input);
  font-size: 20px;

  &::placeholder {
    letter-spacing: 1.1px;
  }

  ${square('100%')}
`

export const IconButton = styled.button`
  height: 100%;
  width: 40px;
  ${flexCenter}
`

export const Button = styled(AnimatedButton)`
  padding: 5px 30px;
  font-weight: 700;
  color: var(--secondary-color);
  background-color: var(--primary-color);
  border-bottom-right-radius: var(--primary-border-radius);
  border-top-right-radius: var(--primary-border-radius);
`
