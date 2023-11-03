import {
  ChangeEvent,
  Component,
  ContextType,
  createRef,
  FormEvent,
  RefObject,
} from 'react'

import clearIcon from 'src/../public/assets/icons/clear.svg'
import {AddTodoStatesT} from 'src/components/AddTodo/types'
import PrimaryContext from 'src/context'
import {getDataFromLocalStorage} from 'src/helpers/storageHelper'
import 'src/components/AddTodo/styles.css'

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
