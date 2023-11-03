import {createContext} from 'react'

import {PrimaryContextT} from 'src/context/types'

const PrimaryContext = createContext<PrimaryContextT>({
  todos: [],
  setTodos: () => {},
  onCreateTodo: () => {},
  onUpdateTodo: () => {},
  onDeleteTodo: () => {},

  snackbar: '',
  setSnackbar: () => {},
})

export default PrimaryContext
