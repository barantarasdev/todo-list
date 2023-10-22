export const reducers = {
  TODO_UPDATE(state, payload) {
    const updateTodo = (todos) =>
      todos.map((todo) =>
        todo.id === +payload.id ? { ...todo, ...payload.options } : todo,
      )

    return {
      user: {
        ...state.user,
        todos: [...updateTodo(state.user.todos)],
      },
      users: [
        ...state.users.map((user) =>
          user.email === state.user.email
            ? {
                ...user,
                todos: [...updateTodo(user.todos)],
              }
            : user,
        ),
      ],
    }
  },
  TODO_CREATE(state, payload) {
    return {
      user: { ...state.user, todos: [...state.user.todos, payload] },
      users: [
        ...state.users.map((user) =>
          user.email === state.user.email
            ? { ...user, todos: [...user.todos, payload] }
            : user,
        ),
      ],
    }
  },
  TODO_REMOVE(state, payload) {
    const filterTodos = (todos) => todos.filter(({ id }) => id !== +payload.id)

    return {
      user: {
        ...state.user,
        todos: [...filterTodos(state.user.todos)],
      },
      users: [
        ...state.users.map((user) =>
          user.email === state.user.email
            ? {
                ...user,
                todos: [...filterTodos(user.todos)],
              }
            : user,
        ),
      ],
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
