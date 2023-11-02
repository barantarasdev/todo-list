import { createContext } from 'react'

export const PrimaryContext = createContext({
  route: '',
  setRoute: function (route) {},

  todos: [],
  setTodos: function (todos) {},
  onCreateTodo: function (todo) {},
  onUpdateTodo: function (id, options) {},
  onDeleteTodo: function (id) {},

  snackbar: '',
  setSnackbar: function (snackbar) {},
})
