import { editTodoToLocalStorage } from '../localeStorage'

export class Todo {
  constructor(value, isChecked, id, onRemove, onCheck) {
    this.value = value
    this.isChecked = isChecked
    this.id = id
    this.onRemove = onRemove
    this.onCheck = onCheck
    this.onClickCheck = this.onClickCheck.bind(this)
    this.onClickRemove = this.onClickRemove.bind(this)
  }

  onClickCheck = () => {
    const newOption = { isChecked: !this.isChecked }

    editTodoToLocalStorage(newOption, this.id)
    this.onCheck(newOption, this.id)
  }

  onClickRemove = () => {
    this.onRemove(this.id)
  }

  getElement() {
    const inputCheckedClass = this.isChecked ? 'todo__value--checked' : ''

    const todo = document.createElement('li')
    todo.classList.add('todo')
    todo.dataset.id = this.id

    const values = [
      {
        tag: 'input',
        classes: ['todo__input'],
        options: { type: 'checkbox', checked: this.isChecked },
        events: [{ event: 'change', callback: this.onClickCheck }],
      },
      {
        tag: 'input',
        classes: ['todo__value', inputCheckedClass],
        options: {
          type: 'text',
          value: this.value,
          readOnly: true,
          required: true,
        },
      },
      {
        tag: 'button',
        classes: ['todo__button', 'todo__button--save'],
        value: 'Save',
      },
      {
        tag: 'button',
        classes: ['todo__button', 'todo__button--remove'],
        value: 'Remove',
        events: [{ event: 'click', callback: this.onClickRemove }],
      },
    ]

    values.forEach(({ tag, classes, value, options, events }) => {
      const newValue = document.createElement(tag)

      classes.forEach((currentClass) => {
        if (currentClass.length) {
          newValue.classList.add(currentClass)
        }
      })

      if (value) {
        newValue.textContent = value
      }

      if (options) {
        Object.entries(options).forEach(([key, value]) => {
          newValue[key] = value
        })
      }

      if (events) {
        events.forEach(({ event, callback }) => {
          newValue.addEventListener(event, callback)
        })
      }

      todo.appendChild(newValue)
    })

    return todo
  }
}
