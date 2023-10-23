export class CommonButton {
  constructor(classes, type, value, dataset, handleClick) {
    this.type = type
    this.classes = classes
    this.value = value
    this.dataset = dataset
    this.handleClick = handleClick
  }

  getElement() {
    const button = document.createElement('button')
    button.type = this.type
    button.textContent = this.value

    this.classes.forEach((currentClass) => {
      button.classList.add(currentClass)
    })

    if (this.dataset) {
      button.dataset[this.dataset.key] = this.dataset.value
    }

    button.addEventListener('click', this.handleClick)

    return button
  }
}
