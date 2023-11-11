import { Box, Button, Grid, TextField, css, styled } from '@mui/material'
import Typography from '@mui/material/Typography'
import { HEADER_HEIGHT } from 'src/constants'

export const StyledHome = styled(Box)(
  ({ theme: { spacing } }) => css`
    min-height: inherit;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${spacing(3)};
  `
)

export const StyledMain = styled('main')(
  ({ theme: { spacing } }) => css`
    margin-top: ${30 + HEADER_HEIGHT}px;
    display: flex;
    flex-direction: column;
    gap: ${spacing(3)};
  `
)

export const HomeTitle = styled(Typography)(
  ({ theme: { spacing } }) => css`
    font-size: 30px;
    text-align: center;
    margin-bottom: ${spacing(2)};
  `
)

export const HomeTodosContainer = styled(Grid)(
  ({ theme: { spacing } }) => css`
    display: flex;
    gap: ${spacing(2)};
  `
)

export const HomeTodosItem = styled(Grid)`
  padding: 10px;
  min-width: 300px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
`

export const HomeActionBlock = styled(Box)(
  ({ theme: { spacing } }) => css`
    display: flex;
    flex-direction: column;
    gap: ${spacing(2)};
  `
)

export const HomeButton = styled(Button)`
  align-self: flex-start;
  width: max-content;
`

export const HomeCols = styled(Box)(
  ({ theme: { spacing } }) => css`
    display: flex;
    gap: ${spacing(3)};
  `
)

export const HomeInput = styled(TextField)``
