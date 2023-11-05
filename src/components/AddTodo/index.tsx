import {ChangeEvent, Component, FormEvent, RefObject, createRef} from 'react'
import {connect} from 'react-redux'
import clearIcon from 'src/../public/assets/icons/clear.svg'
import * as Styled from 'src/components/AddTodo/styles'
import {AddTodoProps, AddTodoStatesT} from 'src/components/AddTodo/types'
import {getDataFromLocalStorage} from 'src/helpers/storageHelper'
import {mapDispatchToTodosProps} from 'src/store/slices/todosSlice/TodoMap'

class AddTodo extends Component<AddTodoProps, AddTodoStatesT> {
  private readonly inputRef: RefObject<HTMLInputElement>

  constructor(props: AddTodoProps) {
    super(props)

    this.state = {value: ''}
    this.inputRef = createRef<HTMLInputElement>()
  }

  onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {value} = e.target
    this.setState({value})
  }

  onClear = () => {
    this.setState({value: ''}, () => this.inputRef.current?.focus())
  }

  onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const {value: todo_value} = this.state
    const {createTodo} = this.props

    if (todo_value.length) {
      const {user_id} = getDataFromLocalStorage('user')

      createTodo({
        todo_value,
        user_id,
        todo_completed: false,
      })
    }

    this.onClear()
  }

  render() {
    const {value} = this.state

    return (
      <Styled.FormBlock>
        <Styled.Form onSubmit={this.onSubmit}>
          <Styled.InputBlock>
            <Styled.Input
              ref={this.inputRef}
              type="text"
              value={value}
              onChange={this.onChange}
              placeholder="New todo..."
            />

            {!!value.length && (
              <Styled.IconButton type="button" onClick={this.onClear}>
                <img src={clearIcon} alt="clear icon" />
              </Styled.IconButton>
            )}
          </Styled.InputBlock>

          <Styled.Button type="submit">ADD</Styled.Button>
        </Styled.Form>
      </Styled.FormBlock>
    )
  }
}

export default connect(null, mapDispatchToTodosProps)(AddTodo)
