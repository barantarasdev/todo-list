import { Clear, Done } from '@mui/icons-material'
import { IconButton, InputBase } from '@mui/material'
import Checkbox from '@mui/material/Checkbox'
import TodoItem from 'src/components/Todo/styles'
import { TodoProps } from 'src/components/Todo/types'
import useTodo from 'src/components/Todo/useTodo'

function Todo({ todo }: TodoProps) {
  const {
    value,
    inputRef,
    isCompleted,
    isEditing,
    onChange,
    onDelete,
    onBlur,
    onCompleted,
    onSubmit,
    onDoubleClick,
    onKeyDown,
  } = useTodo({ todo })

  return (
    <TodoItem $isFocused={isEditing} $isCompleted={isCompleted}>
      <Checkbox checked={isCompleted} onChange={onCompleted} />

      <InputBase
        inputRef={inputRef}
        type="text"
        value={value}
        onChange={onChange}
        onDoubleClick={onDoubleClick}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        readOnly={!isEditing}
        fullWidth
      />

      {isEditing && (
        <IconButton type="submit" onClick={onSubmit}>
          <Done color="success" />
        </IconButton>
      )}

      <IconButton type="button" onClick={onDelete}>
        <Clear color="error" />
      </IconButton>
    </TodoItem>
  )
}

export default Todo
