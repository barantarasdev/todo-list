import { Component } from 'react'

import SignIn from 'src/auth/signIn'
import SignUp from 'src/auth/signUp'
import ErrorBoundary from 'src/components/ErrorBoundary'
import Snackbar from 'src/components/Snackbar'
import Layout from 'src/components/Layout'
import { PrimaryContext } from 'src/context'
import {
  createTodo,
  deleteTodo,
  getTodos,
  updateTodo,
} from 'src/services/todoService'
import { getDataFromLocaleStorage } from 'src/helpers/storageHelper'
import { ROUTES } from 'src/constants'

class App extends Component {
  static contextType = PrimaryContext

  constructor(props) {
    super(props)

    this.state = { route: ROUTES.SIGN_IN, todos: [], snackbar: '' }
  }

  onCreateTodo = async (todo) => {
    const { todo_id } = await createTodo(todo)
    this.setState(({ todos }) => ({
      todos: [...todos, { ...todo, todo_id }],
    }))
  }

  onUpdateTodo = async (id, options) => {
    await updateTodo(id, options)
    this.setState(({ todos }) => ({
      todos: todos.map((currentTodo) =>
        currentTodo.todo_id === id
          ? { ...currentTodo, ...options }
          : currentTodo,
      ),
    }))
  }

  onDeleteTodo = async (id) => {
    await deleteTodo(id)
    this.setState(({ todos }) => ({
      todos: todos.filter((currentTodo) => currentTodo.todo_id !== id),
    }))
  }

  setRoute = (route) => {
    this.setState({ route })
  }

  setTodos = (todos) => {
    this.setState({ todos })
  }

  setSnackbar = (snackbar) => {
    this.setState({ snackbar })
  }

  async componentDidMount() {
    const user = getDataFromLocaleStorage('user')

    if (user) {
      const { todos } = await getTodos(user.user_id)

      return this.setState({ route: ROUTES.HOME, todos })
    }

    this.setState({ route: ROUTES.SIGN_IN })
  }

  render() {
    const { route } = this.context

    if (route === ROUTES.SIGN_IN) {
      return <SignIn />
    }

    if (route === ROUTES.SIGN_UP) {
      return <SignUp />
    }

    return (
      <PrimaryContext.Provider
        value={{
          todos: this.state.todos,
          setTodos: this.setTodos,
          onCreateTodo: this.onCreateTodo,
          onDeleteTodo: this.onDeleteTodo,
          onUpdateTodo: this.onUpdateTodo,

          route: this.state.route,
          setRoute: this.setRoute,

          snackbar: this.state.snackbar,
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

export default App
