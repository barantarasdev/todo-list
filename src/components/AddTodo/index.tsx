import {
  ChangeEvent,
  Component,
  ContextType,
  createRef,
  FormEvent,
  RefObject,
} from 'react'

import clearIcon from 'src/../public/assets/icons/clear.svg'
import * as Styled from 'src/components/AddTodo/styles'
import {AddTodoStatesT} from 'src/components/AddTodo/types'
import PrimaryContext from 'src/context'
import {getDataFromLocalStorage} from 'src/helpers/storageHelper'

class AddTodo extends Component<{}, AddTodoStatesT> {
  static contextType = PrimaryContext

  context!: ContextType<typeof PrimaryContext>

  private readonly inputRef: RefObject<HTMLInputElement>

  constructor(props: {}) {
    super(props)

    this.state = {value: ''}
    this.inputRef = createRef<HTMLInputElement>()
  }

  onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {value} = e.target

    this.setState({value})
  }

  onClear = () => {
    this.setState({value: ''}, () => {
      this.inputRef.current?.focus()
    })
  }

  onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const {value} = this.state
    const {onCreateTodo} = this.context

    const todo_value = value

    if (todo_value.length) {
      const {user_id} = getDataFromLocalStorage('user')

      const todo = {
        todo_value,
        user_id,
        todo_completed: false,
      }

      onCreateTodo(todo)
      this.setState({value: ''})
    }
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

export default AddTodo
