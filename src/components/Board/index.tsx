/* eslint-disable react/jsx-props-no-spreading */
import { DragDropContext, Droppable } from 'react-beautiful-dnd'

import ColumnList from '@/components/Board/ColumnList'
import useBoard from '@/components/Board/useBoard'
import { DNDE } from '@/types'
import List from '@/components/Board/styles'

function Board() {
  const { onDragEnd, columns } = useBoard()

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="board" direction="horizontal" type={DNDE.COLUMN}>
        {provided => (
          <List ref={provided.innerRef} {...provided.droppableProps}>
            <ColumnList columns={columns} />
            {provided.placeholder}
          </List>
        )}
      </Droppable>
    </DragDropContext>
  )
}

export default Board
