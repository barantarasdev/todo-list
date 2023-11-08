import { ListItem, css, styled } from '@mui/material'

const TodoItem = styled(ListItem, {
  shouldForwardProp: prop => prop !== '$isFocused' && prop !== '$isCompleted',
})<{
  $isFocused: boolean
  $isCompleted: boolean
}>(({ theme: { palette }, $isFocused, $isCompleted }) => {
  let bg

  if ($isFocused) {
    bg = palette.secondary.main
  } else if ($isCompleted) {
    bg = palette.text.disabled
  } else {
    bg = palette.primary.light
  }

  return css`
    width: 100%;
    display: flex;
    align-items: center;
    background-color: ${bg};
    text-decoration: ${$isCompleted ? 'line-through' : 'auto'};
  `
})

export default TodoItem
