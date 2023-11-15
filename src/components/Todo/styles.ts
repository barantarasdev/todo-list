import { ListItem, css, styled } from '@mui/material'

import { MAIN_BORDER_RADIUS } from '@/constants'

const Item = styled(ListItem, {
  shouldForwardProp: prop => prop !== '$isFocused' && prop !== '$isCompleted',
})<{
  $isFocused: boolean
  $isCompleted: boolean
}>(({ theme: { spacing, palette }, $isFocused, $isCompleted }) => {
  let bg = 'rgb(243, 241, 239)'
  let color = palette.text.secondary

  if ($isFocused) {
    bg = 'rgb(210, 215, 211)'
  } else if ($isCompleted) {
    bg = 'rgb(108, 122, 137)'
    color = palette.text.primary
  }

  return css`
    width: 100%;
    padding: ${spacing(3)};
    display: flex;
    align-items: center;
    color: ${color};
    background-color: ${bg};
    text-decoration: ${$isCompleted ? 'line-through' : 'auto'};
    border-radius: ${MAIN_BORDER_RADIUS}px;
  `
})

export default Item
