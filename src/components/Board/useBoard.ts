import { useCallback } from 'react'
import { DropResult } from 'react-beautiful-dnd'
import { handleColumnDrag, handleTodoDrag } from 'src/components/Board/helpers'
import { useAppDispatch, useAppSelector } from 'src/hooks/useRedux'
import { DND } from 'src/types'

function useBoard() {
  const { cols } = useAppSelector(state => state.cols)
  const dispatch = useAppDispatch()

  const onDragEnd = useCallback(
    (result: DropResult) => {
      const { destination, source, type } = result
      const isTheSame =
        destination?.droppableId === source.droppableId &&
        destination.index === source.index

      if (!destination || isTheSame) {
        return
      }

      switch (type) {
        case DND.COLUMN:
          handleColumnDrag(cols, result, dispatch)

          break
        case DND.TODOS:
          handleTodoDrag(cols, result, dispatch)

          break
        default:
          break
      }
    },
    [cols, handleTodoDrag, handleColumnDrag]
  )

  return { onDragEnd, cols }
}

export default useBoard
