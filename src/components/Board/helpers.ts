import {
  updateColumnCreator,
  updateTodoOrderCreator,
} from '@/store/slices/columnSlice/actionCreator'
import { ColumnT, TodoT } from '@/types'
import {
  GetColumnProps,
  GetSplicedListProps,
  GetTodoIndexProps,
  HandleDragProps,
} from '@/components/Board/types'

function getColumn({ columns, columnId }: GetColumnProps) {
  return columns.find(column => column.columnId === columnId)
}

function getTodoIndex({ todos, todoId }: GetTodoIndexProps) {
  return todos.findIndex(todo => todo.todoId === todoId)
}

function getSplicedList<T>({ list, from, to }: GetSplicedListProps<T>) {
  const newList = Array.from(list)

  const [reorderedElement] = newList.splice(from, 1)
  newList.splice(to, 0, reorderedElement)

  return { list: [...newList], element: reorderedElement }
}

export function handleColumnDrag({
  columns,
  result,
  dispatch,
}: HandleDragProps) {
  const { source, destination, draggableId } = result
  const { list, element } = getSplicedList({
    list: columns,
    from: source.index,
    to: destination?.index as number,
  })
  const sourceColumnIndex = list.findIndex(
    column => column.columnId === element.columnId
  )
  const sourceColumn = list[sourceColumnIndex - 1] || null
  const destinationColumn = list[sourceColumnIndex + 1] || null

  const newColumn = {
    columns: list,
    columnId: draggableId,
    sourceColumn,
    destinationColumn,
  }

  dispatch(updateColumnCreator(newColumn))
}

export function handleTodoDrag({ columns, result, dispatch }: HandleDragProps) {
  const { source, destination, draggableId } = result
  const startColumn = getColumn({
    columns,
    columnId: source.droppableId,
  }) as ColumnT
  const finishColumn = getColumn({
    columns,
    columnId: destination?.droppableId as string,
  }) as ColumnT

  if (startColumn.columnId === finishColumn.columnId) {
    const { list, element } = getSplicedList<TodoT>({
      list: startColumn.todos,
      from: source.index,
      to: destination?.index as number,
    })
    const currTodo = getTodoIndex({ todos: list, todoId: element.todoId })
    const sourceTodo = currTodo !== -1 ? list[currTodo - 1] : null
    const destinationTodo = currTodo !== -1 ? list[currTodo + 1] : null

    const resultTodos = {
      todos: list,
      todoId: draggableId as string,
      columnId: startColumn.columnId,
      sourceTodo,
      destinationTodo,
    }

    dispatch(updateTodoOrderCreator(resultTodos))

    return
  }

  const startTodos = Array.from(startColumn.todos)
  const [reorderedItem] = startTodos.splice(source.index, 1)

  const finishTodos = Array.from(finishColumn.todos)
  finishTodos.splice(destination?.index as number, 0, reorderedItem)

  const currTodo = getTodoIndex({
    todos: finishTodos,
    todoId: reorderedItem.todoId,
  })
  const startTodoList = startTodos.filter(
    todo => todo.todoId !== reorderedItem.todoId
  )
  const sourceTodo = currTodo !== -1 ? finishTodos[currTodo - 1] : null
  const destinationTodo = currTodo !== -1 ? finishTodos[currTodo + 1] : null

  const resultTodos = {
    todoId: draggableId,
    todos: finishTodos,
    startTodoList,
    columnId: finishColumn.columnId,
    startColumnId: startColumn.columnId,
    sourceTodo,
    destinationTodo,
  }

  dispatch(updateTodoOrderCreator(resultTodos))
}
