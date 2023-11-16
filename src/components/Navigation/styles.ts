import { List as MUIList, styled } from '@mui/material'
import Link from 'next/link'

export const List = styled(MUIList)({
  display: 'flex',
})

export const StyledLink = styled(Link, {
  shouldForwardProp: prop => prop !== '$isActive',
})<{ $isActive: boolean }>(({ theme: { palette }, $isActive }) => ({
  color: palette.text.secondary,
  fontWeight: 700,
  fontSize: $isActive ? 24 : 18,
  textDecoration: $isActive ? 'underline' : 'none',
  textTransform: 'uppercase',
  transition: 'font-size 0.3s',
}))
