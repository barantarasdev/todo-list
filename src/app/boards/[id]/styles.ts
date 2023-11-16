import { styled, Button as MUIButton } from '@mui/material'

export const Section = styled('section')(({ theme: { spacing } }) => ({
  display: 'flex',
  gap: spacing(3),
}))

export const Form = styled('form')({
  width: 200,
  display: 'flex',
  flexDirection: 'column',
})

export const Button = styled(MUIButton)({
  alignSelf: 'flex-start',
})
