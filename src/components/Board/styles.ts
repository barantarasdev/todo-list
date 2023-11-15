import { List as MUIList, css, styled } from '@mui/material'

const List = styled(MUIList)(
  ({ theme: { spacing } }) => css`
    display: flex;
    gap: ${spacing(3)};
  `
)

export default List
