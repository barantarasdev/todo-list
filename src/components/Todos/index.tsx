import {Component, ContextType} from 'react'
import {CSSTransition} from 'react-transition-group'

import Todo from 'src/components/Todo'
import {StyledTransitionGroup} from 'src/components/Todos/styles'
import PrimaryContext from 'src/context'

class Todos extends Component {
  static contextType = PrimaryContext

  context!: ContextType<typeof PrimaryContext>

  render() {
    const {todos} = this.context

    return (
      <ul>
        <StyledTransitionGroup>
          {todos.map(todo => (
            <CSSTransition key={todo.todo_id} timeout={300} classNames="item">
              <Todo todo={todo} />
            </CSSTransition>
          ))}
        </StyledTransitionGroup>
      </ul>
    )
  }
}

export default Todos
