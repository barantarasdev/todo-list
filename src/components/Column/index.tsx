/* eslint-disable react/jsx-props-no-spreading */

import React from 'react'
import { Draggable, Droppable } from 'react-beautiful-dnd'

import useColumn from '@/components/Column/useColumn'
import Input from '@/components/common/Input'
import TodoList from '@/components/Column/TodoList'
import { DNDE } from '@/types'
import { ColumnProps } from '@/components/Column/types'
import { FormButton } from '@/styles'
import { Form, Item, List, Title } from '@/components/Column/styles'

function Column({
  column: { columnName, columnId, todos, boardId },
  index,
}: ColumnProps) {
  const { onSubmit, inputRef, value, onChange, onClear } = useColumn({
    columnId,
    boardId,
  })

  return (
    <Draggable draggableId={columnId} index={index}>
      {provided => (
        <Item
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Title variant="h3">{columnName}</Title>

          <Form onSubmit={onSubmit}>
            <Input
              inputRef={inputRef}
              value={value}
              onChange={onChange}
              placeholder="New todo..."
              helperText=""
              onClear={onClear}
              isClear
            />

            <FormButton type="submit">Add</FormButton>
          </Form>

          <Droppable droppableId={columnId} type={DNDE.TODO}>
            {dropProvider => (
              <List
                ref={dropProvider.innerRef}
                {...dropProvider.droppableProps}
              >
                <TodoList todos={todos} columnId={columnId} />
                {dropProvider.placeholder}
              </List>
            )}
          </Droppable>
        </Item>
      )}
    </Draggable>
  )
}

export default React.memo(Column)
