import {createContext} from 'react'

import {PrimaryContextT} from 'src/context/types'
import {Routes} from 'src/types'

const PrimaryContext = createContext<PrimaryContextT>({
  route: Routes.SIGN_IN,
  setRoute: () => {},

  todos: [],
  setTodos: () => {},
  onCreateTodo: () => {},
  onUpdateTodo: () => {},
  onDeleteTodo: () => {},

  snackbar: '',
  setSnackbar: () => {},
})

export default PrimaryContext
