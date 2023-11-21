import Column from '@/components/Column'
import { ColumnListProps } from '@/components/Board/types'

function ColumnList({ columns }: ColumnListProps) {
  return columns.map((column, index) => (
    <Column key={column.columnId} column={column} index={index} />
  ))
}

export default ColumnList
