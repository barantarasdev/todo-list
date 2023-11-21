import { ListItem, styled } from '@mui/material'

import { MAIN_BORDER_RADIUS } from '@/constants'

const Item = styled(ListItem, {
  shouldForwardProp: prop => prop !== '$isFocused' && prop !== '$isCompleted',
})<{
  $isFocused: boolean
  $isCompleted: boolean
}>(({ theme: { spacing, palette }, $isFocused, $isCompleted }) => {
  let backgroundColor = 'rgb(243, 241, 239)'
  let color = palette.text.secondary

  if ($isFocused) {
    backgroundColor = 'rgb(210, 215, 211)'
  } else if ($isCompleted) {
    backgroundColor = 'rgb(108, 122, 137)'
    color = palette.text.primary
  }

  return {
    width: '100%',
    padding: spacing(3),
    display: 'flex',
    alignItems: 'center',
    color,
    backgroundColor,
    textDecoration: $isCompleted ? 'line-through' : 'auto',
    borderRadius: MAIN_BORDER_RADIUS,
  }
})

export default Item
