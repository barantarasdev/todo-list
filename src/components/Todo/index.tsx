/* eslint-disable react/jsx-props-no-spreading */
import { Clear, Done } from '@mui/icons-material'
import { IconButton, InputBase } from '@mui/material'
import Checkbox from '@mui/material/Checkbox'
import { Draggable } from 'react-beautiful-dnd'
import TodoItem from 'src/components/Todo/styles'
import { TodoProps } from 'src/components/Todo/types'
import useTodo from 'src/components/Todo/useTodo'

function Todo({ todo, colId, index }: TodoProps) {
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
  } = useTodo({ todo, colId })

  return (
    <Draggable draggableId={todo.todoId} index={index}>
      {provided => (
        <TodoItem
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          $isFocused={isEditing}
          $isCompleted={isCompleted}
        >
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
      )}
    </Draggable>
  )
}

export default Todo
