import { PureComponent } from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import Todo from 'src/components/Todo'
import { StyledTransitionGroup } from 'src/components/Todos/styles'
import { TodosProps } from 'src/components/Todos/types'
import { mapStateToTodosProps } from 'src/store/slices/todosSlice/todoMap'

class Todos extends PureComponent<TodosProps> {
  render() {
    const { todos } = this.props

    return (
      <ul>
        <StyledTransitionGroup>
          {todos.map(todo => (
            <CSSTransition key={todo.todoId} timeout={300} classNames="item">
              <Todo todo={todo} />
            </CSSTransition>
          ))}
        </StyledTransitionGroup>
      </ul>
    )
  }
}

export default connect(mapStateToTodosProps)(Todos)
