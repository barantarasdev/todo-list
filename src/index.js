const header = document.querySelector('.header')
const form = header.querySelector('.header__form')
const input = header.querySelector('.header__input')

const todos = document.querySelector('.todos')

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
      <li>${value}</li>
    `,
  )

  input.value = ''
})
