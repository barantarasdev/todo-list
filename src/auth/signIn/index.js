import { Component } from 'react'

import { PrimaryContext } from 'src/context'
import { signIn } from 'src/services/userService'
import { getTodos } from 'src/services/todoService'
import { onLogIn } from 'src/helpers/userHelper'
import { ROUTES } from 'src/constants'
import 'src/auth/styles.css'
import Input from 'src/components/common/input'

class SignIn extends Component {
  static contextType = PrimaryContext

  constructor(props) {
    super(props)

    this.state = { email: '', password: '' }
  }

  onChange = ({ target: { id, value } }) => {
    this.setState({ [id]: value })
  }

  onClick = () => {
    this.context.setRoute(ROUTES.SIGN_UP)
  }

  onSubmit = async (e) => {
    e.preventDefault()

    const userData = {
      user_email: this.state.email,
      user_password: this.state.password,
    }

    try {
      const { user_name, access_token, refresh_token, user_id } =
        await signIn(userData)
      onLogIn({ user_name, user_id }, access_token, refresh_token)

      const { todos } = await getTodos(user_id)
      this.context.setRoute(ROUTES.HOME)
      this.context.setTodos(todos)
    } catch (error) {
      this.context.setSnackbar('User not found')
    }
  }

  render() {
    const { email, password } = this.state

    return (
      <div className="auth">
        <h2>Sign in</h2>

        <form className="auth__form" onSubmit={this.onSubmit} noValidate>
          <Input
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={this.onChange}
          />

          <Input
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={this.onChange}
          />

          <button className="auth__btn" type="submit">
            Sign in
          </button>

          <button className="auth__link" onClick={this.onClick}>
            Sign up
          </button>
        </form>
      </div>
    )
  }
}

export default SignIn
