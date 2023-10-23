export class CommonInput {
  constructor(type, id, classes, placeholder) {
    this.type = type
    this.classes = classes
    this.id = id
    this.placeholder = placeholder
  }

  getElement() {
    const input = document.createElement('input')
    input.type = this.type
    input.id = this.id
    input.name = this.id
    input.placeholder = this.placeholder

    this.classes.forEach((currentClass) => {
      if (currentClass.length) {
        input.classList.add(currentClass)
      }
    })

    return input
  }
}
