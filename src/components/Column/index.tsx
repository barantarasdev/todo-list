/* eslint-disable react/jsx-props-no-spreading */
import { Draggable, Droppable } from 'react-beautiful-dnd'
import AddTodo from 'src/components/AddTodo'
import StyledList from 'src/components/Column/styles'
import { ColumnProps } from 'src/components/Column/types'
import Todos from 'src/components/Todos'
import { HomeTitle, HomeTodosItem } from 'src/pages/Home/styles'
import { DND } from 'src/types'

function Column({ col, index }: ColumnProps) {
  return (
    <Draggable draggableId={col.colId} index={index}>
      {provided => (
        <HomeTodosItem
          {...provided.draggableProps}
          ref={provided.innerRef}
          item
          xs
        >
          <HomeTitle {...provided.dragHandleProps} variant="h3">
            {col.colName}
          </HomeTitle>

          <AddTodo colId={col.colId} />

          <Droppable droppableId={col.colId} type={DND.TODOS}>
            {dropProvider => (
              <StyledList
                ref={dropProvider.innerRef}
                {...dropProvider.droppableProps}
              >
                <Todos todos={col.todos} colId={col.colId} />
                {dropProvider.placeholder}
              </StyledList>
            )}
          </Droppable>
        </HomeTodosItem>
      )}
    </Draggable>
  )
}

export default Column
