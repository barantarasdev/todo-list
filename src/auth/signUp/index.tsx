import { ChangeEvent, Component, FormEvent } from 'react'
import { connect } from 'react-redux'
import { SignUpProps, SignUpStatesT } from 'src/auth/signUp/types'
import * as Styled from 'src/auth/styles'
import Input from 'src/components/common/Input'
import Select from 'src/components/common/Select'
import { GENDER_OPTIONS } from 'src/constants'
import validateSignUp from 'src/helpers/validationHelper'
import withNavigation from 'src/hocks/withNavigation'
import { mapDispatchToUserProps } from 'src/store/slices/userSlice/userMap'
import { InputBlock, Label } from 'src/styles'
import { RoutesPath, Validate } from 'src/types'

class SignUp extends Component<SignUpProps, SignUpStatesT> {
  constructor(props: SignUpProps) {
    super(props)

    this.state = {
      formData: {
        userEmail: '',
        userName: '',
        userPassword: '',
        userConfirmPassword: '',
        userPhone: '',
        userAge: '',
        userGender: '',
        userSite: '',
      },
      errors: {},
      isSubmitted: false,
    }
  }

  onChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    const { formData, isSubmitted } = this.state

    this.setState(prevStates => ({
      formData: { ...prevStates.formData, [name]: value },
    }))

    if (isSubmitted) {
      const validatedInput = validateSignUp(
        name as Validate,
        value,
        name === Validate.CONFIRM_PASSWORD ? formData.userPassword : null
      )

      this.setState(prevStates => {
        const newErrors = { ...prevStates.errors }

        if (validatedInput) {
          newErrors[name] = validatedInput
        } else {
          delete newErrors[name]
        }

        return {
          errors: { ...newErrors },
        }
      })
    }
  }

  onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { formData } = this.state
    const newErrors: Record<string, string> = {}
    const { signUp, navigate } = this.props

    Object.entries(formData).forEach(([key, value]) => {
      const error = validateSignUp(
        key as Validate,
        value,
        key === 'userConfirmPassword' ? formData.userPassword : null
      )

      if (error) {
        newErrors[key] = error
      }
    })

    this.setState({ errors: newErrors, isSubmitted: true })

    if (!Object.values(newErrors).length) {
      signUp({ ...formData }, navigate)
      this.setState({ isSubmitted: false })
    }
  }

  render() {
    const { errors, formData } = this.state
    const {
      NAME,
      AGE,
      EMAIL,
      CONFIRM_PASSWORD,
      PASSWORD,
      SITE,
      PHONE,
      GENDER,
    } = Validate

    return (
      <Styled.FormBlock>
        <Styled.Title>Sign up</Styled.Title>

        <Styled.Form onSubmit={this.onSubmit} noValidate>
          <Input
            name={NAME}
            type="text"
            placeholder="Name"
            value={formData.userName}
            onChange={this.onChange}
            errors={errors}
          />

          <Input
            name={EMAIL}
            type="email"
            placeholder="Email"
            value={formData.userEmail}
            onChange={this.onChange}
            errors={errors}
          />

          <Input
            name={PHONE}
            type="tel"
            placeholder="Phone"
            value={formData.userPhone}
            onChange={this.onChange}
            errors={errors}
          />

          <Input
            name={AGE}
            type="number"
            placeholder="Age"
            value={formData.userAge}
            onChange={this.onChange}
            errors={errors}
          />

          <InputBlock>
            <Select
              isError={!!errors.userGender}
              name={GENDER}
              options={GENDER_OPTIONS}
              value={formData.userGender}
              onChange={this.onChange}
            />

            <Label $isError={!!errors.userGender} htmlFor={GENDER}>
              {errors.userGender}
            </Label>
          </InputBlock>

          <Input
            name={SITE}
            type="url"
            placeholder="Site"
            value={formData.userSite}
            onChange={this.onChange}
            errors={errors}
          />

          <Input
            name={PASSWORD}
            type="password"
            placeholder="Password"
            value={formData.userPassword}
            onChange={this.onChange}
            errors={errors}
            isPassword
          />

          <Input
            name={CONFIRM_PASSWORD}
            type="password"
            placeholder="Confirm password"
            value={formData.userConfirmPassword}
            onChange={this.onChange}
            errors={errors}
            isPassword
          />

          <Styled.Button type="submit" disabled={!!Object.keys(errors).length}>
            Sign up
          </Styled.Button>

          <Styled.Link to={RoutesPath.SIGN_IN}>Sign in</Styled.Link>
        </Styled.Form>
      </Styled.FormBlock>
    )
  }
}

export default withNavigation(connect(null, mapDispatchToUserProps)(SignUp))
