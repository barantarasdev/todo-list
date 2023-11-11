import ClearIcon from '@mui/icons-material/Clear'
import { IconButton, InputAdornment } from '@mui/material'
import {
  AddTodoButton,
  AddTodoForm,
  AddTodoFormBlock,
  AddTodoInput,
} from 'src/components/AddTodo/styles'
import { AddTodoProps } from 'src/components/AddTodo/types'
import useAddTodo from 'src/components/AddTodo/useAddTodo'

function AddTodo({ colId }: AddTodoProps) {
  const { onSubmit, inputRef, value, onChange, onClear } = useAddTodo({ colId })

  return (
    <AddTodoFormBlock>
      <AddTodoForm onSubmit={onSubmit}>
        <AddTodoInput
          inputRef={inputRef}
          type="text"
          value={value}
          onChange={onChange}
          placeholder="New todo..."
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                {!!value.length && (
                  <IconButton onClick={onClear} type="button" edge="end">
                    <ClearIcon color="primary" />
                  </IconButton>
                )}
              </InputAdornment>
            ),
          }}
        />

        <AddTodoButton type="submit">Add</AddTodoButton>
      </AddTodoForm>
    </AddTodoFormBlock>
  )
}

export default AddTodo
