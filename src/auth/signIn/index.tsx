import { ChangeEvent, Component, FormEvent } from 'react'
import { connect } from 'react-redux'
import { SignInProps } from 'src/auth/signIn/types'
import * as Styled from 'src/auth/styles'
import Input from 'src/components/common/Input'
import withNavigation from 'src/hocks/withNavigation'
import { mapDispatchToUserProps } from 'src/store/slices/userSlice/userMap'
import { RoutesPath, SignInT, Validate } from 'src/types'

class SignIn extends Component<SignInProps, SignInT> {
  constructor(props: SignInProps) {
    super(props)

    this.state = { userEmail: '', userPassword: '' }
  }

  onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    this.setState(prevState => ({
      ...prevState,
      [id as keyof SignInT]: value,
    }))
  }

  onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { userEmail, userPassword } = this.state
    const { signIn, navigate } = this.props

    signIn(userEmail, userPassword, navigate)
  }

  render() {
    const { userEmail, userPassword } = this.state
    const isDisabledButton = !userEmail.length || !userPassword.length
    const { EMAIL, PASSWORD } = Validate

    return (
      <Styled.FormBlock>
        <Styled.Title>Sign in</Styled.Title>

        <Styled.Form onSubmit={this.onSubmit} noValidate>
          <Input
            name={EMAIL}
            type="email"
            placeholder="Email"
            value={userEmail}
            onChange={this.onChange}
          />

          <Input
            name={PASSWORD}
            type="password"
            placeholder="Password"
            value={userPassword}
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

export default withNavigation(connect(null, mapDispatchToUserProps)(SignIn))
