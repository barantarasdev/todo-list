import {Component} from 'react'
import {Outlet} from 'react-router'
import {useNavigate} from 'react-router-dom'

import ErrorBoundary from 'src/components/ErrorBoundary'
import PrimaryContext from 'src/context'
import {getDataFromLocalStorage} from 'src/helpers/storageHelper'
import withNavigation from 'src/hocks/withNavigation'
import {
  createTodo,
  deleteTodo,
  getTodos,
  updateTodo,
} from 'src/services/todoService'
import {AppState, Routes, SimpleTodo, Todo, UpdatedTodo} from 'src/types'

type LayoutProps = {
  navigate: ReturnType<typeof useNavigate>
}

class Layout extends Component<LayoutProps, AppState> {
  constructor(props: LayoutProps) {
    super(props)

    this.state = {todos: [], snackbar: ''}
  }

  async componentDidMount() {
    const user = getDataFromLocalStorage('user')
    const {navigate} = this.props

    if (user) {
      const {todos} = await getTodos(user.user_id)

      this.setState({todos})
      return navigate(Routes.HOME)
    }

    return navigate(Routes.SIGN_IN)
  }

  onCreateTodo = async (todo: SimpleTodo) => {
    const {todo_id} = await createTodo(todo)
    this.setState(({todos}) => ({
      todos: [...todos, {...todo, todo_id}],
    }))
  }

  onUpdateTodo = async (id: string, updatedTodo: UpdatedTodo) => {
    await updateTodo(id, updatedTodo)
    this.setState(({todos}) => ({
      todos: todos.map(currentTodo =>
        currentTodo.todo_id === id
          ? {
              ...currentTodo,
              ...updatedTodo,
            }
          : currentTodo
      ),
    }))
  }

  onDeleteTodo = async (id: string) => {
    await deleteTodo(id)
    this.setState(({todos}) => ({
      todos: todos.filter(currentTodo => currentTodo.todo_id !== id),
    }))
  }

  setTodos = (todos: Todo[]) => {
    this.setState({todos})
  }

  setSnackbar = (snackbar: string) => {
    this.setState({snackbar})
  }

  render() {
    const {todos, snackbar} = this.state

    return (
      <PrimaryContext.Provider
        value={{
          todos,
          setTodos: this.setTodos,
          onCreateTodo: this.onCreateTodo,
          onDeleteTodo: this.onDeleteTodo,
          onUpdateTodo: this.onUpdateTodo,

          snackbar,
          setSnackbar: this.setSnackbar,
        }}
      >
        <ErrorBoundary>
          <Outlet />
        </ErrorBoundary>
      </PrimaryContext.Provider>
    )
  }
}

export default withNavigation(Layout)
