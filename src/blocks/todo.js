export class Todo {
  constructor(value, isChecked, id) {
    this.value = value
    this.isChecked = isChecked
    this.id = id
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
      },
    ]

    values.forEach(({ tag, classes, value, options }) => {
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

      todo.appendChild(newValue)
    })

    return todo
  }
}
