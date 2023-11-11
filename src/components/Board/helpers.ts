import { Dispatch } from '@reduxjs/toolkit'
import { DropResult } from 'react-beautiful-dnd'
import { ColT } from 'src//types'
import {
  updateColCreator,
  updateTodoOrderCreator,
} from 'src/store/slices/todosSlice/actionCreators'
import { TodoT } from 'src/types'

function getSplicedList<T>(list: T[], from: number, to: number) {
  const newList = Array.from(list)

  const [reorderedEl] = newList.splice(from, 1)
  newList.splice(to, 0, reorderedEl)

  return { list: [...newList], el: reorderedEl }
}

function getCol(cols: ColT[], colId: string) {
  return cols.find(col => col.colId === colId)
}

function getTodoIndex(todos: TodoT[], todoId: string) {
  return todos.findIndex(todo => todo.todoId === todoId)
}

export function handleColumnDrag(
  cols: ColT[],
  result: DropResult,
  dispatch: Dispatch
) {
  const { source, destination, draggableId } = result
  const { list, el } = getSplicedList(
    cols,
    source.index,
    destination?.index as number
  )
  const sourceColIndex = list.findIndex(col => col.colId === el.colId)

  const newCol = {
    cols: list,
    colId: draggableId,
    sourceCol: list[sourceColIndex - 1] || null,
    destinationCol: list[sourceColIndex + 1] || null,
  }

  dispatch(updateColCreator(newCol))
}

export function handleTodoDrag(
  cols: ColT[],
  result: DropResult,
  dispatch: Dispatch
) {
  const { source, destination, draggableId } = result

  const startColumn = getCol(cols, source.droppableId) as ColT
  const finishColumn = getCol(cols, destination?.droppableId as string) as ColT

  if (startColumn.colId === finishColumn.colId) {
    const { list, el } = getSplicedList<TodoT>(
      startColumn.todos,
      source.index,
      destination?.index as number
    )
    const currTodo = getTodoIndex(list, el.todoId)

    const res = {
      todos: list,
      todoId: draggableId as string,
      colId: startColumn.colId,
      sourceTodo: currTodo !== -1 ? list[currTodo - 1] : null,
      destinationTodo: currTodo !== -1 ? list[currTodo + 1] : null,
    }

    dispatch(updateTodoOrderCreator(res))

    return
  }

  const startTodos = Array.from(startColumn.todos)
  const [reorderedItem] = startTodos.splice(source.index, 1)

  const finishTodos = Array.from(finishColumn.todos)
  finishTodos.splice(destination?.index as number, 0, reorderedItem)

  const currTodo = getTodoIndex(finishTodos, reorderedItem.todoId)
  const startTodoList = startTodos.filter(
    todo => todo.todoId !== reorderedItem.todoId
  )

  const res = {
    todoId: draggableId,
    todos: finishTodos,
    startTodoList,
    colId: finishColumn.colId,
    startColId: startColumn.colId,
    sourceTodo: currTodo !== -1 ? finishTodos[currTodo - 1] : null,
    destinationTodo: currTodo !== -1 ? finishTodos[currTodo + 1] : null,
  }

  dispatch(updateTodoOrderCreator(res))
}
