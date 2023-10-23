export const reducers = {
  TODO_UPDATE(state, payload) {
    return {
      todos: state.todos.map((todo) =>
        todo.id === +payload.id ? { ...todo, ...payload.options } : todo,
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
      todos: state.todos.filter(({ id }) => id !== +payload.id),
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
}
