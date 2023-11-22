import React, { useEffect } from 'react'
import Column from '@/components/Column'
import useSocket from '@/hooks/useSocket'
import { ColumnListProps } from '@/components/Board/types'
import { SocketsEventsE } from '@/types'
import { useAppDispatch } from '@/hooks/useRedux'
import { setColumns } from '@/store/slices/boardsSlice'

function ColumnList({ columns }: ColumnListProps) {
  const dispatch = useAppDispatch()
  const { data } = useSocket(SocketsEventsE.COLUMNS)

  useEffect(() => {
    if (data && data.columns) {
      dispatch(setColumns(data.columns))
    }
  }, [data, dispatch])

  return columns.map((column, index) => (
    <Column key={column.columnId} column={column} index={index} />
  ))
}

export default React.memo(ColumnList)
