import { EE } from './eventEmitter.js'
import { ACTIONS } from '../constants/index.js'

export const eventEmitter = new EE()
const { STATE_CHANGE } = ACTIONS

const reducers = {
  TODO_UPDATE(state, payload) {
    return {
      todos: [
        ...state.todos.map((todo) =>
          todo.id === payload.id ? { ...todo, ...payload.options } : todo,
        ),
      ],
    }
  },
  TODO_CREATE(state, payload) {
    return { todos: [...state.todos, payload] }
  },
  TODO_REMOVE(state, payload) {
    return { todos: [...state.todos.filter((todo) => todo.id !== payload.id)] }
  },
  SET_USER(state, payload) {
    return { ...state, user: payload, users: [...state.users, payload] }
  },
}

class Store {
  constructor() {
    this.state = { todos: [], user: {}, users: [] }
    this.reducers = reducers
  }

  updateUI() {
    eventEmitter.emit(STATE_CHANGE)
  }

  dispatch(ACTION_TYPE, payload) {
    if (this.reducers[ACTION_TYPE]) {
      this.state = {
        ...this.state,
        ...this.reducers[ACTION_TYPE](this.state, payload),
      }
      this.updateUI()
    }
  }
}

export const store = new Store()
