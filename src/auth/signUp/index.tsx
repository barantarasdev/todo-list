import {ChangeEvent, Component, FormEvent} from 'react'
import {connect} from 'react-redux'
import {SignUpProps, SignUpStatesT} from 'src/auth/signUp/types'
import * as Styled from 'src/auth/styles'
import Input from 'src/components/common/Input'
import Select from 'src/components/common/Select'
import {GENDER_OPTIONS} from 'src/constants'
import {storeUser} from 'src/helpers/userHelper'
import validateSignUp from 'src/helpers/validationHelper'
import withNavigation from 'src/hocks/withNavigation'
import {signUp} from 'src/services/userService'
import {mapDispatchToSnackbarProps} from 'src/store/slices/snackbarSlice/snackbarMap'
import {InputBlock, Label} from 'src/styles'
import {RoutesPath, ValidateT} from 'src/types'

class SignUp extends Component<SignUpProps, SignUpStatesT> {
  constructor(props: SignUpProps) {
    super(props)

    this.state = {
      formData: {
        user_email: '',
        user_name: '',
        user_password: '',
        user_confirm_password: '',
        user_phone: '',
        user_age: '',
        user_gender: '',
        user_site: '',
      },
      errors: {},
      isSubmitted: false,
    }
  }

  onChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const {id, value} = e.target
    const {formData, isSubmitted} = this.state

    this.setState(prevStates => ({
      formData: {...prevStates.formData, [id]: value},
    }))

    if (isSubmitted) {
      const validatedInput = validateSignUp(
        id as ValidateT,
        value,
        id === 'user_confirm_password' ? formData.user_password : null
      )

      this.setState(prevStates => {
        const newErrors = {...prevStates.errors}

        if (validatedInput) {
          newErrors[id] = validatedInput
        } else {
          delete newErrors[id]
        }

        return {
          errors: {...newErrors},
        }
      })
    }
  }

  onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const {formData} = this.state
    const newErrors: Record<string, string> = {}
    const {navigate, setSnackbar} = this.props

    Object.entries(formData).forEach(([key, value]) => {
      const error = validateSignUp(
        key as ValidateT,
        value,
        key === 'user_confirm_password' ? formData.user_password : null
      )

      if (error) {
        newErrors[key] = error
      }
    })

    this.setState({errors: newErrors, isSubmitted: true})

    if (!Object.values(newErrors).length) {
      try {
        const {access_token, refresh_token, user_id} = await signUp({
          ...formData,
        })
        storeUser(
          {user_name: formData.user_name, user_id},
          access_token,
          refresh_token
        )
        this.setState({isSubmitted: false})
        navigate(RoutesPath.HOME)
      } catch (err) {
        setSnackbar('User already exists')
      }
    }
  }

  render() {
    const {errors, formData} = this.state

    return (
      <Styled.FormBlock>
        <Styled.Title>Sign up</Styled.Title>

        <Styled.Form onSubmit={this.onSubmit} noValidate>
          <Input
            id="user_name"
            type="text"
            placeholder="Name"
            value={formData.user_name}
            onChange={this.onChange}
            errors={errors}
          />

          <Input
            id="user_email"
            type="email"
            placeholder="Email"
            value={formData.user_email}
            onChange={this.onChange}
            errors={errors}
          />

          <Input
            id="user_phone"
            type="tel"
            placeholder="Phone"
            value={formData.user_phone}
            onChange={this.onChange}
            errors={errors}
          />

          <Input
            id="user_age"
            type="number"
            placeholder="Age"
            value={formData.user_age}
            onChange={this.onChange}
            errors={errors}
          />

          <InputBlock>
            <Select
              isError={!!errors.user_gender}
              id="user_gender"
              options={GENDER_OPTIONS}
              value={formData.user_gender}
              onChange={this.onChange}
            />

            <Label $isError={!!errors.user_gender} htmlFor="gender">
              {errors.user_gender}
            </Label>
          </InputBlock>

          <Input
            id="user_site"
            type="url"
            placeholder="Site"
            value={formData.user_site}
            onChange={this.onChange}
            errors={errors}
          />

          <Input
            id="user_password"
            type="password"
            placeholder="Password"
            value={formData.user_password}
            onChange={this.onChange}
            errors={errors}
            isPassword
          />

          <Input
            id="user_confirm_password"
            type="password"
            placeholder="Confirm password"
            value={formData.user_confirm_password}
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

export default withNavigation(connect(null, mapDispatchToSnackbarProps)(SignUp))
