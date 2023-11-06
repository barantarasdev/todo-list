import React, {
  ChangeEvent,
  Component,
  FormEvent,
  RefObject,
  createRef,
} from 'react'
import { connect } from 'react-redux'
import confirmIcon from 'src/../public/assets/icons/confirm.svg'
import removeIcon from 'src/../public/assets/icons/remove.svg'
import * as Styled from 'src/components/Todo/styles'
import { TodoProps, TodoStatesT } from 'src/components/Todo/types'
import Checkbox from 'src/components/common/Checkbox'
import { mapDispatchToTodosProps } from 'src/store/slices/todosSlice/todoMap'

class Todo extends Component<TodoProps, TodoStatesT> {
  private readonly inputRef: RefObject<HTMLInputElement>

  constructor(props: TodoProps) {
    super(props)

    const {
      todo: { todoValue, todoCompleted },
    } = this.props
    this.state = {
      todoValue,
      todoCompleted,
      isEditing: false,
    }
    this.inputRef = createRef()
  }

  onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value: todoValue } = e.target
    this.setState({ todoValue })
  }

  onChangeCheckbox = () => {
    const {
      todo: { todoId },
      updateTodo,
    } = this.props
    const { todoValue, todoCompleted } = this.state

    this.setState({ todoCompleted: !todoCompleted }, () => {
      updateTodo(todoId, {
        todoCompleted: !todoCompleted,
        todoValue,
      })
    })
  }

  onFocus = () => {
    const { todoCompleted } = this.state

    if (!todoCompleted) {
      this.setState({ isEditing: true })
    }
  }

  onBlur = () => {
    const { isEditing } = this.state

    if (isEditing) {
      this.onSubmit()
    }
  }

  onDelete = () => {
    const {
      todo: { todoId },
      deleteTodo,
    } = this.props

    deleteTodo(todoId)
  }

  onSubmit = (e?: FormEvent<HTMLFormElement>) => {
    if (e) {
      e.preventDefault()
    }

    const { todoValue } = this.state
    const {
      todo: { todoId },
      updateTodo,
    } = this.props

    if (!todoValue.length) {
      this.onDelete()
    } else {
      updateTodo(todoId, {
        todoValue,
        todoCompleted: false,
      })
    }

    this.setState({ isEditing: false }, () => this.inputRef.current?.blur())
  }

  render() {
    const { todoValue, todoCompleted, isEditing } = this.state

    return (
      <Styled.Item $isFocused={isEditing} $isCompleted={todoCompleted}>
        <Checkbox value={todoCompleted} onChange={this.onChangeCheckbox} />

        <Styled.Form onSubmit={this.onSubmit}>
          <Styled.Input
            $isCompleted={todoCompleted}
            type="text"
            value={todoValue}
            ref={this.inputRef}
            onChange={this.onChange}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            readOnly={!isEditing}
          />

          {isEditing && (
            <Styled.Button type="button" onClick={() => this.onSubmit()}>
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
