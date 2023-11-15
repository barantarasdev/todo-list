import { List as MUIList, ListItem, styled, css } from '@mui/material'

import { MAIN_BORDER_RADIUS } from '@/constants'

export const List = styled(MUIList)(
  ({ theme: { spacing } }) => `
  display: flex;
  flex-direction: column;
  gap: ${spacing(4)};
`
)

export const Item = styled(ListItem)(
  ({ theme: { spacing } }) => css`
    width: 300px;
    align-self: baseline;
    flex-direction: column;
    gap: ${spacing(3)};
    background-color: rgba(237, 231, 225, 0.6);
    border-radius: ${MAIN_BORDER_RADIUS}px;
  `
)
