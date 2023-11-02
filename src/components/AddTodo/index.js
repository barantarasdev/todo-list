import { Component, createRef } from 'react'
import clearIcon from 'src/../public/assets/icons/clear.svg'

import { PrimaryContext } from 'src/context'
import { getDataFromLocaleStorage } from 'src/helpers/storageHelper'
import 'src/components/AddTodo/styles.css'

class AddTodo extends Component {
  static contextType = PrimaryContext

  constructor(props) {
    super(props)

    this.state = { value: '' }
    this.inputRef = createRef()
  }

  onChange = ({ target: { value } }) => {
    this.setState({ value })
  }

  onClear = () => {
    this.setState({ value: '' }, () => {
      this.inputRef.current.focus()
    })
  }

  onSubmit = (e) => {
    e.preventDefault()

    const todo_value = this.state.value

    if (todo_value.length) {
      const { user_id } = getDataFromLocaleStorage('user')

      const todo = {
        todo_value,
        user_id,
        todo_completed: false,
      }

      this.context.onCreateTodo(todo)
      this.setState({ value: '' })
    }
  }

  render() {
    const { value } = this.state

    return (
      <div className="add_todo">
        <form className="add_todo__form" onSubmit={this.onSubmit}>
          <div className="add_todo__form__container">
            <input
              ref={this.inputRef}
              className="add_todo__input"
              type="text"
              value={value}
              onChange={this.onChange}
              placeholder="Add todo..."
            />

            {value.length && (
              <button
                type="button"
                className="add_todo__form__btn"
                onClick={this.onClear}
              >
                <img className="icon" src={clearIcon} alt="clear icon" />
              </button>
            )}
          </div>

          <button className="add_todo__btn" type="submit">
            ADD
          </button>
        </form>
      </div>
    )
  }
}

export default AddTodo
