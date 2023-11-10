import Column from 'src/components/Column'
import { ColumnListProps } from 'src/components/СolumnList/types'

function ColumnList({ cols }: ColumnListProps) {
  return cols.map((col, index) => (
    <Column key={col.colId} col={col} index={index} />
  ))
}

export default ColumnList
