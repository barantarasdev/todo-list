import React, {ChangeEvent, Component, createRef, RefObject} from 'react'
import {connect} from 'react-redux'
import confirmIcon from 'src/../public/assets/icons/confirm.svg'
import removeIcon from 'src/../public/assets/icons/remove.svg'

import * as Styled from 'src/components/Todo/styles'
import {TodoProps, TodoStatesT} from 'src/components/Todo/types'
import {mapDispatchToTodosProps} from 'src/store/slices/todosSlice/TodoMap'

class Todo extends Component<TodoProps, TodoStatesT> {
  private readonly inputRef: RefObject<HTMLInputElement>

  constructor(props: TodoProps) {
    super(props)

    const {
      todo: {todo_value, todo_completed},
    } = this.props
    this.state = {
      todo_value,
      todo_completed,
      isEditing: false,
    }
    this.inputRef = createRef()
  }

  onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {value: todo_value} = e.target
    this.setState({todo_value})
  }

  onChangeCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
    const {checked: todo_completed} = e.target
    const {
      todo: {todo_id},
      updateTodo,
    } = this.props
    const {todo_value} = this.state

    this.setState({todo_completed}, () => {
      updateTodo(todo_id, {
        todo_completed,
        todo_value,
      })
    })
  }

  onFocus = () => {
    const {todo_completed} = this.state

    if (!todo_completed) {
      this.setState({isEditing: true})
    }
  }

  onBlur = () => {
    const {isEditing} = this.state

    if (isEditing) {
      this.onSubmit()
    }
  }

  onDelete = () => {
    const {
      todo: {todo_id},
      deleteTodo,
    } = this.props

    deleteTodo(todo_id)
  }

  onSubmit = (e?: any) => {
    if (e) {
      e.preventDefault()
    }

    const {todo_value} = this.state
    const {
      todo: {todo_id},
      updateTodo,
    } = this.props

    if (!todo_value.length) {
      this.onDelete()
    } else {
      updateTodo(todo_id, {
        todo_value,
        todo_completed: false,
      })
    }

    this.setState({isEditing: false}, () => this.inputRef.current?.blur())
  }

  render() {
    const {todo_value, todo_completed, isEditing} = this.state

    return (
      <Styled.Item $isFocused={isEditing} $isCompleted={todo_completed}>
        <input
          type="checkbox"
          checked={todo_completed}
          onChange={this.onChangeCheckbox}
        />

        <Styled.Form onSubmit={this.onSubmit}>
          <Styled.Input
            $isCompleted={todo_completed}
            type="text"
            value={todo_value}
            ref={this.inputRef}
            onChange={this.onChange}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            readOnly={!isEditing}
          />

          {isEditing && (
            <Styled.Button type="button" onClick={this.onSubmit}>
              <img src={confirmIcon} alt="icon confirm" />
            </Styled.Button>
          )}
        </Styled.Form>

        <Styled.RemoveButton type="button" onClick={this.onDelete}>
          <img src={removeIcon} alt="icon remove" />
        </Styled.RemoveButton>
      </Styled.Item>
    )
  }
}

export default connect(null, mapDispatchToTodosProps)(Todo)
