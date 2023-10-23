export class Modal {
  constructor(title) {
    this.title = title
  }

  render = () => {
    const modal = document.createElement('div')
    modal.classList.add('modal')
    const title = document.createElement('h2')
    title.classList.add('modal__title')
    title.textContent = this.title
    modal.append(title)

    document.body.append(modal)

    setTimeout(() => {
      modal.remove()
    }, 2000)
  }
}
