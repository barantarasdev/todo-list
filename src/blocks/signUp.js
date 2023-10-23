import { CommonInput } from './commonInput.js'
import { Select } from './select.js'
import { GENDER_OPTIONS } from '../constants/index.js'
import { CommonButton } from './commonButton.js'

export class SignUp {
  constructor(rootElement, handleClick) {
    this.rootElement = rootElement
    this.handleClick = handleClick
  }

  getElement = () => {
    const inputs = [
      new CommonInput(
        'text',
        'name',
        ['input', 'auth__input'],
        'Name',
      ).getElement(),
      new CommonInput(
        'number',
        'age',
        ['input', 'auth__input'],
        'Age',
      ).getElement(),
      new Select(GENDER_OPTIONS, 'gender').getElement(),
      new CommonInput(
        'url',
        'site',
        ['input', 'auth__input'],
        'Site',
      ).getElement(),
      new CommonInput(
        'email',
        'email',
        ['input', 'auth__input'],
        'Email',
      ).getElement(),
      new CommonInput(
        'tel',
        'phone',
        ['input', 'auth__input'],
        'Phone',
      ).getElement(),
      new CommonInput(
        'password',
        'password',
        ['input', 'auth__input'],
        'Password',
      ).getElement(),
      new CommonInput(
        'password',
        'confirmPassword',
        ['input', 'auth__input'],
        'Confirm password',
      ).getElement(),
    ]

    const submitButton = new CommonButton(
      ['button', 'auth__button'],
      'submit',
      'Sing up',
    ).getElement()
    const linkButton = new CommonButton(
      ['auth__link'],
      'button',
      'Sing in',
      {
        key: 'link',
        value: 'signIn',
      },
      this.handleClick,
    ).getElement()

    inputs.forEach((input) => {
      const label = document.createElement('label')
      label.classList.add('auth__form__label')
      label.setAttribute('for', input.id)

      this.rootElement.append(input)
      this.rootElement.append(label)
    })

    this.rootElement.append(submitButton)
    this.rootElement.append(linkButton)

    return this.rootElement
  }
}
