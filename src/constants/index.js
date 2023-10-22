import { createActions } from '../helpers/index.js'

export const ACTIONS = {
  TODO: createActions('TODO'),
  USER: {
    USER_REGISTER: 'USER_REGISTER',
    USER_SET: 'USER_SET',
  },
  URL: {
    URL_SET: 'URL_SET',
  },
  STATE_CHANGE: 'STATE_CHANGE',
  URL_CHANGE: 'URL_CHANGE',
}

export const ROUTES = {
  HOME: 'home',
  SIGN_IN: 'signIn',
  SIGN_UP: 'signUp',
}

export function getSignInValues() {
  return [
    {
      tag: 'input',
      classes: ['input', 'auth__input'],
      options: {
        type: 'email',
        name: 'email',
        placeholder: 'Email',
        required: true,
      },
    },
    {
      tag: 'input',
      classes: ['input', 'auth__input'],
      options: {
        type: 'password',
        name: 'password',
        placeholder: 'Password',
        required: true,
      },
    },
    {
      tag: 'button',
      classes: ['button', 'auth__button'],
      options: { type: 'submit' },
      value: 'Sing in',
    },
    {
      tag: 'button',
      classes: ['auth__link'],
      options: { type: 'button' },
      value: 'Sign up',
      dataset: { key: 'link', value: 'signUp' },
      events: [
        {
          event: 'click',
          callback: this.handleClick,
        },
      ],
    },
  ]
}

export function getSignUpValues() {
  return [
    {
      tag: 'input',
      classes: ['input', 'auth__input'],
      options: {
        type: 'text',
        name: 'name',
        placeholder: 'Name',
        required: true,
      },
    },
    {
      tag: 'input',
      classes: ['input', 'auth__input'],
      options: {
        type: 'email',
        name: 'email',
        placeholder: 'Email',
        required: true,
      },
    },
    {
      tag: 'input',
      classes: ['input', 'auth__input'],
      options: {
        type: 'password',
        name: 'password',
        placeholder: 'Password',
        required: true,
      },
    },
    {
      tag: 'button',
      classes: ['button', 'auth__button'],
      options: { type: 'submit' },
      value: 'Sing up',
    },
    {
      tag: 'button',
      classes: ['auth__link'],
      options: { type: 'button' },
      value: 'Sign in',
      dataset: { key: 'link', value: 'signIn' },
      events: [
        {
          event: 'click',
          callback: this.handleClick,
        },
      ],
    },
  ]
}

export function getTodoValues() {
  return [
    {
      tag: 'input',
      classes: ['todo__input'],
      options: { type: 'checkbox', checked: this.isChecked },
      events: [{ event: 'change', callback: this.onClickChange }],
    },
    {
      tag: 'input',
      classes: ['todo__value', this.inputCheckedClass],
      options: {
        type: 'text',
        value: this.value,
        readOnly: true,
        required: true,
      },
    },
    {
      tag: 'button',
      classes: ['button', 'todo__button', 'todo__button--save'],
      value: 'Save',
    },
    {
      tag: 'button',
      classes: ['button', 'todo__button', 'todo__button--remove'],
      value: 'Remove',
      events: [{ event: 'click', callback: this.onClickRemove }],
    },
  ]
}
