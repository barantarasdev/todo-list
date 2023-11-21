import { List as MUIList, styled } from '@mui/material'

const List = styled(MUIList)(({ theme: { spacing } }) => ({
  display: 'flex',
  gap: spacing(3),
}))

export default List
