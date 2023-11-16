import { List as MUIList, ListItem, styled, Typography } from '@mui/material'

import { MAIN_BORDER_RADIUS } from '@/constants'

export const List = styled(MUIList)(({ theme: { spacing } }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: spacing(4),
}))

export const Item = styled(ListItem)(({ theme: { spacing } }) => ({
  width: 300,
  alignSelf: 'baseline',
  flexDirection: 'column',
  gap: spacing(3),
  backgroundColor: 'rgba(237, 231, 225, 0.6)',
  borderRadius: MAIN_BORDER_RADIUS,
}))

export const Form = styled('form')({
  width: '100%',
  display: 'flex',
})

export const Title = styled(Typography)(({ theme: { mixins } }) => ({
  width: '100%',
  ...mixins.textEllipsis,
}))
