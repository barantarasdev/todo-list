export class Select {
  constructor(values, id) {
    this.values = values
    this.id = id
  }

  getElement() {
    const select = document.createElement('select')
    select.classList.add('input', 'select')
    select.id = this.id

    this.values.forEach(({ value, text, options }) => {
      const option = document.createElement('option')
      option.value = value
      option.text = text

      if (options) {
        Object.entries(options).forEach(([key, optionValue]) => {
          option[key] = optionValue
        })
      }

      select.insertAdjacentElement('beforeend', option)
    })

    return select
  }
}
