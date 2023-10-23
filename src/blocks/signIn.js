import { CommonInput } from './commonInput.js'
import { CommonButton } from './commonButton.js'

export class SignIn {
  constructor(rootElement, handleClick) {
    this.rootElement = rootElement
    this.handleClick = handleClick
  }

  getElement = () => {
    const email = new CommonInput(
      'email',
      'email',
      ['input', 'auth__input'],
      'Email',
    ).getElement()
    const password = new CommonInput(
      'password',
      'password',
      ['input', 'auth__input'],
      'Password',
    ).getElement()
    const buttonSubmit = new CommonButton(
      ['button', 'auth__button'],
      'submit',
      'Sing in',
    ).getElement()
    const buttonLink = new CommonButton(
      ['auth__link'],
      'button',
      'Sing up',
      {
        key: 'link',
        value: 'signUp',
      },
      this.handleClick,
    ).getElement()

    this.rootElement.append(name)
    this.rootElement.append(email)
    this.rootElement.append(password)
    this.rootElement.append(buttonSubmit)
    this.rootElement.append(buttonLink)
    this.rootElement.classList.add('auth__signIn')

    return this.rootElement
  }
}
