import { AnimatedButton } from 'src/styles'
import { flexCenter } from 'src/styles/mixins'
import styled from 'styled-components'

export const TodoItem = styled.li<{
  $isFocused: boolean
  $isCompleted: boolean
}>`
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  gap: var(--primary-gap);
  background-color: ${({ $isFocused, $isCompleted }) => {
    if ($isFocused) {
      return 'var(--color-white)'
    }

    if ($isCompleted) {
      return 'var(--color-disabled)'
    }

    return 'var(--primary-blur)'
  }};
  border-radius: var(--primary-border-radius);
`

export const TodoForm = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
`

export const TodoInput = styled.input<{ $isCompleted: boolean }>`
  width: 100%;
  height: 30px;
  padding: 5px 0;
  font-size: 20px;
  text-decoration: ${({ $isCompleted }) =>
    $isCompleted ? 'line-through' : 'auto'}
}
`

export const TodoButton = styled(AnimatedButton)`
  width: 50px;
  height: 35px;
  background-color: var(--color-success);
  border-radius: 10px;
  ${flexCenter}
`

export const TodoRemoveButton = styled(TodoButton)`
  background-color: var(--color-error);
`
