import Todo from '@/components/Todo'
import { TodoListProps } from '@/components/Column/types'

function TodoList({ todos, columnId }: TodoListProps) {
  return todos.map((todo, index) => (
    <Todo key={todo.todoId} todo={todo} columnId={columnId} index={index} />
  ))
}

export default TodoList
