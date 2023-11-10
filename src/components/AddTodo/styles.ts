import { Box, Button, TextField, styled } from '@mui/material'

export const AddTodoFormBlock = styled(Box)`
  width: 100%;
`

export const AddTodoForm = styled('form')`
  width: 100%;
  display: flex;
`

export const AddTodoInput = styled(TextField)`
  & fieldset {
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
    border-right: none;
  }
`

export const AddTodoButton = styled(Button)`
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
`
