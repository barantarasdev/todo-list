export class Todo {
  constructor(value, isChecked, id) {
    this.value = value
    this.isChecked = isChecked
    this.id = id
  }

  toHtml() {
    const inputCheckedClass = `${this.isChecked ? 'todo__value--checked' : ''}`

    return `
     <li class='todo' data-id=${this.id}>
       <input class='todo__input' type='checkbox' ${
         this.isChecked ? 'checked' : ''
       } />
       <input class='todo__value ${inputCheckedClass}'  type='text' value=${
         this.value
       } readonly required>
       <button class='todo__button todo__button--save'>Save</button>
       <button class='todo__button todo__button--remove'>Remove</button>
     </li>
    `
  }
}
