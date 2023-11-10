import Todo from 'src/components/Todo'
import { TodosProps } from 'src/components/Todos/types'

function Todos({ todos, colId }: TodosProps) {
  return todos.map((todo, index) => (
    <Todo key={todo.todoId} todo={todo} colId={colId} index={index} />
  ))
}

export default Todos
