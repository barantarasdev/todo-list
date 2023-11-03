import React, {
  ChangeEvent,
  Component,
  ContextType,
  createRef,
  FormEvent,
  RefObject,
} from 'react'
import confirmIcon from 'src/../public/assets/icons/confirm.svg'
import removeIcon from 'src/../public/assets/icons/remove.svg'

import {TodoProps, TodoStatesT} from 'src/components/Todo/types'
import PrimaryContext from 'src/context'
import 'src/components/Todo/styles.css'

class Todo extends Component<TodoProps, TodoStatesT> {
  static contextType = PrimaryContext

  context!: ContextType<typeof PrimaryContext>

  private readonly inputRef: RefObject<HTMLInputElement>

  constructor(props: TodoProps) {
    super(props)

    const {todo} = this.props
    this.state = {
      todo_value: todo.todo_value,
      todo_completed: todo.todo_completed,
      isEditing: false,
    }
    this.inputRef = createRef()
  }

  onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {value} = e.target
    this.setState({todo_value: value})
  }

  onChangeCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
    const {checked} = e.target
    const {onUpdateTodo} = this.context
    const {todo} = this.props
    const {todo_value} = this.state

    this.setState({todo_completed: checked}, () => {
      onUpdateTodo(todo.todo_id, {
        todo_completed: checked,
        todo_value,
      })
    })
  }

  onClick = () => {
    const {todo_completed} = this.state

    if (!todo_completed) {
      this.setState({isEditing: true})
    }
  }

  onDelete = () => {
    const {onDeleteTodo} = this.context
    const {todo} = this.props

    onDeleteTodo(todo.todo_id)
  }

  onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      this.onSubmit()
    }
  }

  onSubmit = (e?: FormEvent<HTMLFormElement>) => {
    e?.preventDefault()
    const {todo_value} = this.state
    const {todo} = this.props
    const {onUpdateTodo} = this.context

    if (!todo_value.length) {
      this.onDelete()
    } else {
      onUpdateTodo(todo.todo_id, {
        todo_value,
        todo_completed: false,
      })
    }

    this.setState({isEditing: false}, () => {
      this.inputRef.current?.blur()
    })
  }

  render() {
    const {todo_value, todo_completed, isEditing} = this.state
    const inputValueStyle = {
      textDecoration: todo_completed ? 'line-through' : 'auto',
    }

    return (
      <li className="todo">
        <input
          type="checkbox"
          checked={todo_completed}
          onChange={this.onChangeCheckbox}
        />

        <form className="todo__form" onSubmit={this.onSubmit}>
          <input
            className="todo__value"
            type="text"
            style={inputValueStyle}
            value={todo_value}
            ref={this.inputRef}
            onChange={this.onChange}
            onFocus={this.onClick}
            onBlur={() => this.onSubmit()}
            onKeyDown={this.onKeyDown}
            readOnly={!isEditing}
          />

          {isEditing && (
            <button
              type="button"
              className="todo__btn"
              onClick={() => this.onSubmit()}
            >
              <img className="icon" src={confirmIcon} alt="icon confirm" />
            </button>
          )}
        </form>

        <button
          type="button"
          className="todo__btn todo__btn--remove"
          onClick={this.onDelete}
        >
          <img className="icon" src={removeIcon} alt="icon remove" />
        </button>
      </li>
    )
  }
}

export default Todo
