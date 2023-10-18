import { Todo } from '../blocks/todo.js'

const reducers = {
  change_todo(state, payload) {
    return {
      todos: [
        ...state.todos.map((todo) =>
          todo.id === payload.id ? { ...todo, value: payload.value } : todo,
        ),
      ],
    }
  },
  change_checkbox_todo(state, payload) {
    return {
      todos: [
        ...state.todos.map((todo) =>
          todo.id === payload.id
            ? { ...todo, isChecked: payload.isChecked }
            : todo,
        ),
      ],
    }
  },
  add_todo(state, payload) {
    return { todos: [...state.todos, payload] }
  },
  remove_todo(state, payload) {
    return { todos: [...state.todos.filter((todo) => todo.id !== payload.id)] }
  },
  rerender(state) {
    const todos = document.querySelector('.todos')
    todos.innerHTML = ''

    const storedTodos = state.todos

    storedTodos.forEach(({ value, isChecked, id, onRemove }) => {
      const todo = new Todo(value, isChecked, id, onRemove)

      todos.appendChild(todo.getElement())
    })
  },
}

export class Store {
  constructor() {
    this.state = { todos: [] }
    this.reducers = reducers
  }

  dispatch(ACTION_TYPE, payload) {
    if (this.reducers[ACTION_TYPE]) {
      this.state = this.reducers[ACTION_TYPE](this.state, payload)
      this.reducers.rerender(this.state)
    }
  }
}
