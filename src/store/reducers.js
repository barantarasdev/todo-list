export const reducers = {
  TODO_UPDATE(state, { todo_id, options }) {
    return {
      todos: state.todos.map((todo) =>
        todo.todo_id === todo_id ? { ...todo, ...options } : todo,
      ),
    }
  },
  TODO_CREATE(state, payload) {
    return {
      todos: [...state.todos, payload],
    }
  },
  TODO_REMOVE(state, payload) {
    return {
      todos: state.todos.filter(({ todo_id }) => todo_id !== payload.todo_id),
    }
  },
  USER_SET(state, payload) {
    return { user: payload }
  },
  USER_REGISTER(state, payload) {
    return { users: [...state.users, { ...payload }] }
  },
  URL_SET(state, payload) {
    return { url: payload }
  },
  CLEAR_TODOS() {
    return { todos: [] }
  },
}
