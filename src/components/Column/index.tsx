/* eslint-disable react/jsx-props-no-spreading */
import { Typography } from '@mui/material'
import { Draggable, Droppable } from 'react-beautiful-dnd'

import AddTodo from '@/components/AddTodo'
import TodoList from '@/components/Column/TodoList'
import { DNDE } from '@/types'
import { ColumnProps } from '@/components/Column/types'
import { Item, List } from '@/components/Column/styles'

function Column({
  column: { columnName, columnId, todos },
  index,
}: ColumnProps) {
  return (
    <Draggable draggableId={columnId} index={index}>
      {provided => (
        <Item
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Typography variant="h3">{columnName}</Typography>

          <AddTodo columnId={columnId} />

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

export default Column
