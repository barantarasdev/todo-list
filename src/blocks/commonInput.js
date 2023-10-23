export class CommonInput {
  constructor(type, id, classes, placeholder) {
    this.type = type
    this.classes = classes
    this.id = id
    this.placeholder = placeholder
  }

  getElement() {
    const inputContainer = document.createElement('div')
    const input = document.createElement('input')
    input.classList.add('auth__input')
    inputContainer.classList.add('input', 'input__container')
    inputContainer.id = this.id
    input.type = this.type
    input.id = this.id
    input.name = this.id
    input.placeholder = this.placeholder

    this.classes.forEach((currentClass) => {
      if (currentClass.length) {
        input.classList.add(currentClass)
      }
    })

    const floatingLabel = document.createElement('label')
    floatingLabel.classList.add('auth__input__label')
    floatingLabel.for = this.id
    floatingLabel.textContent = this.placeholder

    input.addEventListener('focus', () => {
      floatingLabel.classList.add('auth__label--top')
    })

    input.addEventListener('blur', () => {
      if (!input.value) {
        floatingLabel.classList.remove('auth__label--top')
      }
    })

    inputContainer.appendChild(floatingLabel)
    inputContainer.appendChild(input)

    return inputContainer
  }
}
