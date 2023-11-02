import { Component } from 'react'

import Todo from 'src/components/Todo'
import { PrimaryContext } from 'src/context'
import 'src/components/Todos/styles.css'

class Todos extends Component {
  static contextType = PrimaryContext

  render() {
    return (
      <ul className="todos">
        {this.context.todos.map((todo) => (
          <Todo key={todo.todo_id} todo={todo} />
        ))}
      </ul>
    )
  }
}

export default Todos
