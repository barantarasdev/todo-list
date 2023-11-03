import {Component, ContextType} from 'react'

import Todo from 'src/components/Todo'
import PrimaryContext from 'src/context'
import 'src/components/Todos/styles.css'

class Todos extends Component {
  static contextType = PrimaryContext

  context!: ContextType<typeof PrimaryContext>

  render() {
    const {todos} = this.context

    return (
      <ul className="todos">
        {todos.map(todo => (
          <Todo key={todo.todo_id} todo={todo} />
        ))}
      </ul>
    )
  }
}

export default Todos
