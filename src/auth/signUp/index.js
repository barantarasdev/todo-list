import { Component } from 'react'

import { GENDER_OPTIONS } from 'src/auth/signUp/constants'
import Select from 'src/components/common/select'
import Input from 'src/components/common/input'
import { PrimaryContext } from 'src/context'
import { signUp } from 'src/services/userService'
import { validateSignUp } from 'src/helpers/validationHelper'
import { onLogIn } from 'src/helpers/userHelper'
import { ROUTES } from 'src/constants'
import 'src/auth/styles.css'

class SignUp extends Component {
  static contextType = PrimaryContext

  constructor(props) {
    super(props)

    this.state = {
      formData: {
        email: '',
        name: '',
        password: '',
        confirmPassword: '',
        tel: '',
        age: '',
        gender: '',
        site: '',
      },
      errors: [],
    }
  }

  onChange = ({ target: { id, value } }) => {
    const isErrors = Object.keys(this.state.errors).length

    this.setState((prevStates) => ({
      formData: { ...prevStates.formData, [id]: value },
    }))

    if (isErrors) {
      const validatedInput = validateSignUp(
        id,
        value,
        id === 'confirmPassword' ? this.state.formData.password : null,
      )

      this.setState(({ errors }) => {
        const newErrors = { ...errors }

        if (validatedInput) {
          newErrors[id] = validatedInput
        } else {
          delete newErrors[id]
        }

        return {
          errors: { ...newErrors },
        }
      })
    }
  }

  onSubmit = async (e) => {
    e.preventDefault()
    const { formData } = this.state
    const errors = {}

    Object.entries(formData).forEach(([key, value]) => {
      const error = validateSignUp(
        key,
        value,
        key === 'confirmPassword' ? formData.password : null,
      )

      if (error) {
        errors[key] = error
      }
    })

    this.setState({ errors })

    if (!Object.keys(this.state.errors).length) {
      const newUser = {
        user_name: formData.name,
        user_email: formData.email,
        user_password: formData.password,
        user_confirm_password: formData.confirmPassword,
        user_phone: formData.tel,
        user_age: Number(formData.age),
        user_gender: formData.gender,
        user_site: formData.site,
      }

      try {
        const { access_token, refresh_token, user_id } = await signUp(newUser)
        onLogIn(
          { user_name: newUser.user_name, user_id },
          access_token,
          refresh_token,
        )
        this.context.setTodos([])
        this.context.setRoute(ROUTES.HOME)
      } catch (err) {
        this.context.setSnackbar('User already exists')
      }
    }
  }

  onClick = () => {
    this.context.setRoute(ROUTES.SIGN_IN)
  }

  render() {
    const { errors, formData } = this.state

    return (
      <div className="auth">
        <h2>Sign up</h2>

        <form className="auth__form" onSubmit={this.onSubmit} noValidate>
          <Input
            id="name"
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={this.onChange}
            errors={errors}
          />

          <Input
            id="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={this.onChange}
            errors={errors}
          />

          <Input
            id="tel"
            type="tel"
            placeholder="Phone"
            value={formData.tel}
            onChange={this.onChange}
            errors={errors}
          />

          <Input
            id="age"
            type="number"
            placeholder="Age"
            value={formData.age}
            onChange={this.onChange}
            errors={errors}
          />

          <div className="input">
            <Select
              id="gender"
              options={GENDER_OPTIONS}
              value={formData.gender}
              onChange={this.onChange}
            />

            <label className="input__label" htmlFor="gender">
              {errors.gender && <>{errors.gender}</>}
            </label>
          </div>

          <Input
            id="site"
            type="url"
            placeholder="Site"
            value={formData.site}
            onChange={this.onChange}
            errors={errors}
          />

          <Input
            id="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={this.onChange}
            errors={errors}
          />

          <Input
            id="confirmPassword"
            type="password"
            placeholder="Confirm password"
            value={formData.confirmPassword}
            onChange={this.onChange}
            errors={errors}
          />

          <button className="auth__btn" type="submit">
            Sign up
          </button>

          <button className="auth__link" onClick={this.onClick}>
            Sign in
          </button>
        </form>
      </div>
    )
  }
}

export default SignUp
