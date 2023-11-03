import {Component} from 'react'

import ErrorBoundary from 'src/components/ErrorBoundary'
import Layout from 'src/components/Layout'
import Snackbar from 'src/components/Snackbar'
import PrimaryContext from 'src/context'
import {getDataFromLocaleStorage} from 'src/helpers/storageHelper'
import {
  createTodo,
  deleteTodo,
  getTodos,
  updateTodo,
} from 'src/services/todoService'
import {AppState, Routes, SimpleTodo, Todo, UpdatedTodo} from 'src/types'

class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props)

    this.state = {route: Routes.SIGN_IN, todos: [], snackbar: ''}
  }

  async componentDidMount() {
    const user = getDataFromLocaleStorage('user')

    if (user) {
      const {todos} = await getTodos(user.user_id)

      return this.setState({route: Routes.HOME, todos})
    }

    return this.setState({route: Routes.SIGN_IN})
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

  setRoute = (route: Routes) => {
    this.setState({route})
  }

  setTodos = (todos: Todo[]) => {
    this.setState({todos})
  }

  setSnackbar = (snackbar: string) => {
    this.setState({snackbar})
  }

  render() {
    const {todos, snackbar, route} = this.state

    return (
      <PrimaryContext.Provider
        value={{
          todos,
          setTodos: this.setTodos,
          onCreateTodo: this.onCreateTodo,
          onDeleteTodo: this.onDeleteTodo,
          onUpdateTodo: this.onUpdateTodo,

          route,
          setRoute: this.setRoute,

          snackbar,
          setSnackbar: this.setSnackbar,
        }}
      >
        <ErrorBoundary>
          <Layout />

          <Snackbar />
        </ErrorBoundary>
      </PrimaryContext.Provider>
    )
  }
}

App.contextType = PrimaryContext

export default App
