import {Dispatch} from '@reduxjs/toolkit'
import {ChangeEvent, Component, FormEvent} from 'react'
import {connect} from 'react-redux'
import {SignInProps} from 'src/auth/signIn/types'
import * as Styled from 'src/auth/styles'
import Input from 'src/components/common/Input'
import {storeUser} from 'src/helpers/userHelper'
import withNavigation from 'src/hocks/withNavigation'
import {signIn} from 'src/services/userService'
import {mapDispatchToSnackbarProps} from 'src/store/slices/snackbarSlice/snackbarMap'
import {mapDispatchToTodosProps} from 'src/store/slices/todosSlice/TodoMap'
import {RoutesPath, SignInT} from 'src/types'

class SignIn extends Component<SignInProps, SignInT> {
  constructor(props: SignInProps) {
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

  onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const {user_email, user_password} = this.state
    const {navigate, setSnackbar, setTodos} = this.props

    try {
      const {user_name, access_token, refresh_token, user_id} = await signIn({
        user_email,
        user_password,
      })
      storeUser({user_name, user_id}, access_token, refresh_token)

      setTodos(user_id)
      navigate(RoutesPath.HOME)
    } catch (error) {
      setSnackbar('User not found')
    }
  }

  render() {
    const {user_email, user_password} = this.state
    const isDisabledButton = !user_email.length || !user_password.length

    return (
      <Styled.FormBlock>
        <Styled.Title>Sign in</Styled.Title>

        <Styled.Form onSubmit={this.onSubmit} noValidate>
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
            isPassword
          />

          <Styled.Button type="submit" disabled={isDisabledButton}>
            Sign in
          </Styled.Button>

          <Styled.Link to={RoutesPath.SIGN_UP}>Sign up</Styled.Link>
        </Styled.Form>
      </Styled.FormBlock>
    )
  }
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    ...mapDispatchToTodosProps(dispatch),
    ...mapDispatchToSnackbarProps(dispatch),
  }
}

export default withNavigation(connect(null, mapDispatchToProps)(SignIn))
