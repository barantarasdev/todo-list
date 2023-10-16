export const saveTodoToLocalStorage = (value, isChecked, id) => {
  const currentTodos = localStorage.getItem('todos')
  const todo = { value, isChecked, id }
  let todos = []

  if (currentTodos) {
    todos = JSON.parse(currentTodos)
  }

  todos.push(todo)

  localStorage.setItem('todos', JSON.stringify(todos))
}

export const removeTodoToLocalStorage = (id) => {
  let currentTodos = localStorage.getItem('todos')

  if (currentTodos) {
    currentTodos = JSON.parse(currentTodos)

    currentTodos = currentTodos.filter((todo) => todo.id !== id)

    localStorage.setItem('todos', JSON.stringify(currentTodos))
  }
}

export const editTodoToLocalStorage = (newOptions, id) => {
  let currentTodos = localStorage.getItem('todos')

  if (currentTodos) {
    currentTodos = JSON.parse(currentTodos)

    currentTodos = currentTodos.map((todo) =>
      todo.id === id ? { ...todo, ...newOptions } : todo,
    )
  }

  localStorage.setItem('todos', JSON.stringify(currentTodos))
}
