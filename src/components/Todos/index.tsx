import { CSSTransition } from 'react-transition-group'
import Todo from 'src/components/Todo'
import { StyledTransitionGroup } from 'src/components/Todos/styles'
import { useAppSelector } from 'src/hooks/useRedux'

function Todos() {
  const { todos } = useAppSelector(state => state.todos)

  return (
    <ul>
      <StyledTransitionGroup>
        {todos.map(todo => (
          <CSSTransition key={todo.todoId} timeout={200} classNames="item">
            <Todo todo={todo} />
          </CSSTransition>
        ))}
      </StyledTransitionGroup>
    </ul>
  )
}

export default Todos
