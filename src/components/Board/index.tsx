/* eslint-disable react/jsx-props-no-spreading */
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import useBoard from 'src/components/Board/useBoard'
import ColumnList from 'src/components/СolumnList'
import { HomeCols } from 'src/pages/Home/styles'
import { DND } from 'src/types'

function Board() {
  const { cols, onDragEnd } = useBoard()

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="board" direction="horizontal" type={DND.COLUMN}>
        {provided => (
          <HomeCols ref={provided.innerRef} {...provided.droppableProps}>
            <ColumnList cols={cols} />
            {provided.placeholder}
          </HomeCols>
        )}
      </Droppable>
    </DragDropContext>
  )
}

export default Board
