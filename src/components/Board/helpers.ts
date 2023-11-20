import {
  updateColumnCreator,
  updateTodoOrderCreator,
} from '@/store/slices/boardsSlice/actionCreator'
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
  boardId,
  router,
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
  const sourceColumnId = list[sourceColumnIndex - 1]?.columnId
  const destinationColumnId = list[sourceColumnIndex + 1]?.columnId

  const newColumn = {
    boardId: boardId as string,
    columns: list,
    columnId: draggableId,
    sourceColumnId,
    destinationColumnId,
    router,
  }

  dispatch(updateColumnCreator(newColumn))
}

export function handleTodoDrag({
  columns,
  router,
  result,
  dispatch,
  boardId,
}: HandleDragProps) {
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
    const sourceTodoId = currTodo !== -1 ? list[currTodo - 1].todoId : null
    const destinationTodoId = currTodo !== -1 ? list[currTodo + 1].todoId : null

    const resultTodos = {
      boardId,
      todos: list,
      todoId: draggableId as string,
      columnId: startColumn.columnId,
      sourceTodoId,
      destinationTodoId,
      router,
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
  const sourceTodoId =
    currTodo !== -1 ? finishTodos[currTodo - 1]?.todoId : null
  const destinationTodoId =
    currTodo !== -1 ? finishTodos[currTodo + 1]?.todoId : null

  const resultTodos = {
    boardId,
    router,
    todoId: draggableId,
    todos: finishTodos,
    startTodoList,
    columnId: finishColumn.columnId,
    startColumnId: startColumn.columnId,
    sourceTodoId,
    destinationTodoId,
  }

  dispatch(updateTodoOrderCreator(resultTodos))
}
