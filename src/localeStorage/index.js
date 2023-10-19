function getParsedLocaleStorage(key) {
  const currentTodos = localStorage.getItem(key)

  return currentTodos ? JSON.parse(currentTodos) : []
}

export function saveTodoToLocalStorage(todo) {
  let todos = getParsedLocaleStorage('todos')

  todos.push(todo)

  localStorage.setItem('todos', JSON.stringify(todos))
}

export function removeTodoToLocalStorage(id) {
  let todos = getParsedLocaleStorage('todos').filter((todo) => todo.id !== id)

  localStorage.setItem('todos', JSON.stringify(todos))
}

export function editTodoToLocalStorage(newOptions, id) {
  let todos = getParsedLocaleStorage('todos').map((todo) =>
    todo.id === id ? { ...todo, ...newOptions } : todo,
  )

  localStorage.setItem('todos', JSON.stringify(todos))
}
