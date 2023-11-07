import { AnimatedButton } from 'src/styles'
import { flexCenter, square } from 'src/styles/mixins'
import styled from 'styled-components'

export const AddTodoFormBlock = styled.div`
  width: 100%;
`

export const AddTodoForm = styled.form`
  width: 100%;
  display: flex;
`

export const AddTodoInputBlock = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: var(--primary-blur);
  border-bottom-left-radius: var(--primary-border-radius);
  border-top-left-radius: var(--primary-border-radius);
`

export const AddTodoInput = styled.input`
  padding: var(--padding-left-input);
  font-size: 20px;

  &::placeholder {
    letter-spacing: 1.1px;
  }

  ${square('100%')}
`

export const AddTodoIconButton = styled.button`
  height: 100%;
  width: 40px;
  ${flexCenter}
`

export const AddTodoButton = styled(AnimatedButton)`
  padding: 5px 30px;
  font-weight: 700;
  color: var(--secondary-color);
  background-color: var(--primary-color);
  border-bottom-right-radius: var(--primary-border-radius);
  border-top-right-radius: var(--primary-border-radius);
`
