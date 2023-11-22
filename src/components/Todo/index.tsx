/* eslint-disable react/jsx-props-no-spreading */

import React from 'react'
import { Checkbox, IconButton, InputBase } from '@mui/material'
import { Draggable } from 'react-beautiful-dnd'
import { Clear, Done } from '@mui/icons-material'

import useTodo from '@/components/Todo/useTodo'
import { TodoProps } from '@/components/Todo/types'
import Item from '@/components/Todo/styles'

function Todo({ todo, columnId, index }: TodoProps) {
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
  } = useTodo({ todo, columnId })

  return (
    <Draggable draggableId={todo.todoId} index={index}>
      {provided => (
        <Item
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
          />

          {isEditing && (
            <IconButton type="submit" onClick={onSubmit}>
              <Done color="success" />
            </IconButton>
          )}

          <IconButton type="button" onClick={onDelete}>
            <Clear color="error" />
          </IconButton>
        </Item>
      )}
    </Draggable>
  )
}

export default React.memo(Todo)
