import { ListItem, css, styled } from '@mui/material'

const TodoItem = styled(ListItem, {
  shouldForwardProp: prop => prop !== '$isFocused' && prop !== '$isCompleted',
})<{
  $isFocused: boolean
  $isCompleted: boolean
}>(({ theme: { palette, spacing }, $isFocused, $isCompleted }) => {
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
    padding: ${spacing(3)};
    display: flex;
    align-items: center;
    background-color: ${bg};
    text-decoration: ${$isCompleted ? 'line-through' : 'auto'};
    border-radius: 10px;
  `
})

export default TodoItem
