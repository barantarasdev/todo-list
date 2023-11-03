import {ChangeEvent, Component, ContextType, FormEvent} from 'react'

import Input from 'src/components/common/input'
import PrimaryContext from 'src/context'
import {storeUser} from 'src/helpers/userHelper'
import {getTodos} from 'src/services/todoService'
import {signIn} from 'src/services/userService'
import 'src/auth/styles.css'
import {Routes, SignInT} from 'src/types'

class SignIn extends Component<{}, SignInT> {
  static contextType = PrimaryContext

  context!: ContextType<typeof PrimaryContext>

  constructor(props: {}) {
    super(props)

    this.state = {user_email: '', user_password: ''}
  }

  onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {id, value} = e.target
    this.setState(prevState => ({
      ...prevState,
      [id as keyof SignInT]: value,
    }))
  }

  onClick = () => {
    const {setRoute} = this.context
    setRoute(Routes.SIGN_UP)
  }

  onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const {user_email, user_password} = this.state
    const {setRoute, setSnackbar, setTodos} = this.context

    try {
      const {user_name, access_token, refresh_token, user_id} = await signIn({
        user_email,
        user_password,
      })
      storeUser({user_name, user_id}, access_token, refresh_token)

      const {todos} = await getTodos(user_id)
      setRoute(Routes.HOME)
      setTodos(todos)
    } catch (error) {
      setSnackbar('User not found')
    }
  }

  render() {
    const {user_email, user_password} = this.state

    return (
      <div className="auth">
        <h2>Sign in</h2>

        <form className="auth__form" onSubmit={this.onSubmit} noValidate>
          <Input
            id="user_email"
            type="email"
            placeholder="Email"
            value={user_email}
            onChange={this.onChange}
          />

          <Input
            id="user_password"
            type="password"
            placeholder="Password"
            value={user_password}
            onChange={this.onChange}
          />

          <button className="auth__btn" type="submit">
            Sign in
          </button>

          <button type="button" className="auth__link" onClick={this.onClick}>
            Sign up
          </button>
        </form>
      </div>
    )
  }
}

export default SignIn
