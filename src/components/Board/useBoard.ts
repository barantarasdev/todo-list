/* eslint-disable react-hooks/exhaustive-deps */

import { useCallback } from 'react'
import { DropResult } from 'react-beautiful-dnd'
import { useParams, useRouter } from 'next/navigation'

import { handleColumnDrag, handleTodoDrag } from '@/components/Board/helpers'
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux'
import { DNDE } from '@/types'

function useBoard() {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const { columns } = useAppSelector(state => state.columns)
  const { id } = useParams()

  const onDragEnd = useCallback(
    (result: DropResult) => {
      const { destination, source, type } = result
      const isSameTarget =
        destination?.droppableId === source.droppableId &&
        destination.index === source.index

      if (!destination || isSameTarget) {
        return
      }

      switch (type) {
        case DNDE.COLUMN:
          handleColumnDrag({
            router,
            columns,
            result,
            dispatch,
            boardId: id as string,
          })

          break
        case DNDE.TODO:
          handleTodoDrag({
            router,
            columns,
            result,
            dispatch,
            boardId: id as string,
          })

          break
        default:
          break
      }
    },
    [columns, dispatch, id]
  )

  return { onDragEnd, columns }
}

export default useBoard
