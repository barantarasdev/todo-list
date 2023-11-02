import { Component, createRef } from 'react'
import removeIcon from 'src/../public/assets/icons/remove.svg'
import confirmIcon from 'src/../public/assets/icons/confirm.svg'

import { PrimaryContext } from 'src/context'
import 'src/components/Todo/styles.css'

class Todo extends Component {
  static contextType = PrimaryContext

  constructor(props) {
    super(props)

    this.state = {
      value: this.props.todo.todo_value,
      isCompleted: this.props.todo.todo_completed,
      isEditing: false,
    }
    this.inputRef = createRef()
  }

  onChange = ({ target: { value } }) => {
    this.setState({ value })
  }

  onChangeCheckbox = ({ target: { checked } }) => {
    this.setState({ isCompleted: checked }, () => {
      this.context.onUpdateTodo(this.props.todo.todo_id, {
        todo_completed: checked,
        todo_value: this.state.value,
      })
    })
  }

  onClick = () => {
    if (!this.state.isCompleted) {
      this.setState({ isEditing: true })
    }
  }

  onDelete = () => {
    this.context.onDeleteTodo(this.props.todo.todo_id)
  }

  onKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.onSubmit(e)
    }
  }

  onSubmit = (e) => {
    e.preventDefault()

    const todo_value = this.state.value

    if (!todo_value.length) {
      this.onDelete()
    } else {
      this.context.onUpdateTodo(this.props.todo.todo_id, {
        todo_value,
        todo_completed: false,
      })
    }

    this.setState({ isEditing: false }, () => {
      this.inputRef.current.blur()
    })
  }

  render() {
    const { value, isCompleted, isEditing } = this.state
    const inputValueStyle = {
      textDecoration: this.state.isCompleted ? 'line-through' : 'auto',
    }

    return (
      <li className="todo">
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={this.onChangeCheckbox}
        />

        <form className="todo__form" onSubmit={this.onSubmit}>
          <input
            className="todo__value"
            type="text"
            style={inputValueStyle}
            value={value}
            ref={this.inputRef}
            onChange={this.onChange}
            onFocus={this.onClick}
            onBlur={() => this.onSubmit(new Event('submit'))}
            onKeyDown={this.onKeyDown}
            readOnly={!isEditing}
          />

          {isEditing && (
            <button className="todo__btn" onClick={this.onSubmit}>
              <img className="icon" src={confirmIcon} alt="icon confirm" />
            </button>
          )}
        </form>

        <button className="todo__btn todo__btn--remove" onClick={this.onDelete}>
          <img className="icon" src={removeIcon} alt="icon remove" />
        </button>
      </li>
    )
  }
}

export default Todo
