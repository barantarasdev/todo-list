import { useEffect, useState } from 'react'
import Column from '@/components/Column'
import useSocket from '@/hooks/useSocket'
import { ColumnListProps } from '@/components/Board/types'
import { ColumnT, SocketsEventsE } from '@/types'

function ColumnList({ columns }: ColumnListProps) {
  const [visibleColumns, setVisibleColumns] = useState<ColumnT[]>([])
  const { data } = useSocket(SocketsEventsE.COLUMNS)

  useEffect(() => {
    if (data) {
      setVisibleColumns(data.columns)
    }
  }, [data])

  useEffect(() => {
    setVisibleColumns(columns)
  }, [columns])

  return visibleColumns.map((column, index) => (
    <Column key={column.columnId} column={column} index={index} />
  ))
}

export default ColumnList
