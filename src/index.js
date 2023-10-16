const header = document.querySelector('.header')
const form = header.querySelector('.form')
const input = form.querySelector('.header__input')

const main = document.querySelector('.main')
const todos = main.querySelector('.todos')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const value = input.value

  if (value.length <= 0) {
    input.classList.add('header__input--red')

    return
  }

  input.classList.remove('header__input--red')

  todos.insertAdjacentHTML(
    'beforeend',
    `
      <li class='todo'>
        <input class='todo__input' type='checkbox' />
        <input class='todo__value' type='text' value=${value} readonly required>
        <button class='todo__button todo__button--save'>Save</button>
         <button class='todo__button todo__button--remove'>Remove</button>
      </li>
    `,
  )

  input.value = ''

  const todo = todos.lastElementChild
  const checkbox = todo.querySelector('.todo__input')
  const todoValue = todo.querySelector('.todo__value')
  const saveButton = todo.querySelector('.todo__button--save')
  const removeButton = todo.querySelector('.todo__button--remove')

  const saveNewValue = () => {
    todoValue.setAttribute('readonly', 'true')
    todoValue.classList.remove('todo__value--edit')
    saveButton.classList.remove('todo__button--save--visible')
  }

  todo.addEventListener('click', (e) => {
    const { classList } = e.target

    if (classList.contains('todo__value')) {
      e.preventDefault()

      todoValue.removeAttribute('readonly')
      todoValue.classList.add('todo__value--edit')
      saveButton.classList.add('todo__button--save--visible')
    }

    if (classList.contains('todo__button--save')) {
      saveNewValue()

      return
    }

    if (classList.contains('todo__button--remove')) {
      const parentTodo = removeButton.closest('li')

      if (parentTodo) {
        parentTodo.remove()
      }

      return
    }
  })

  checkbox.addEventListener('change', ({ target }) => {
    todoValue.classList.toggle('todo__value--checked', target.checked)
  })

  todoValue.addEventListener('blur', () => {
    saveNewValue()
  })
})
