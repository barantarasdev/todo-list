import { createActions, getInputsWithLabels } from '../helpers/index.js'
import { Select } from '../blocks/select.js'

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

export const VALIDATION_TYPES = [
  'age',
  'gender',
  'email',
  'phone',
  'site',
  'name',
  'password',
]

const GENDER_OPTIONS = [
  {
    value: '',
    text: 'Not specified',
    options: { disabled: true, selected: true },
  },
  { value: 'm', text: 'Male' },
  { value: 'f', text: ' Female' },
]

export function getSignInValues() {
  const values = [
    {
      tag: 'input',
      classes: ['input', 'auth__input'],
      id: 'email',
      options: {
        type: 'email',
        name: 'email',
        placeholder: 'Email',
      },
    },
    {
      tag: 'input',
      classes: ['input', 'auth__input'],
      id: 'password',
      options: {
        type: 'password',
        name: 'password',
        placeholder: 'Password',
      },
    },
  ]

  return [
    ...getInputsWithLabels(values),
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
  const inputs = [
    {
      tag: 'input',
      classes: ['input', 'auth__input'],
      id: 'name',
      options: {
        type: 'text',
        name: 'name',
        placeholder: 'Name',
      },
    },
    {
      tag: 'input',
      classes: ['input', 'auth__input'],
      id: 'age',
      options: {
        type: 'number',
        name: 'age',
        placeholder: 'Age',
      },
    },
    {
      element: new Select(GENDER_OPTIONS, 'gender').getElement(),
      id: 'gender',
    },
    {
      tag: 'input',
      classes: ['input', 'auth__input'],
      id: 'site',
      options: {
        type: 'url',
        name: 'site',
        placeholder: 'Site',
      },
    },
    {
      tag: 'input',
      classes: ['input', 'auth__input'],
      id: 'email',
      options: {
        type: 'email',
        name: 'email',
        placeholder: 'Email',
      },
    },
    {
      tag: 'input',
      classes: ['input', 'auth__input'],
      id: 'phone',
      options: {
        type: 'tel',
        name: 'phone',
        placeholder: 'Phone',
      },
    },
    {
      tag: 'input',
      classes: ['input', 'auth__input'],
      id: 'password',
      options: {
        type: 'password',
        name: 'password',
        placeholder: 'Password',
      },
    },
  ]

  return [
    ...getInputsWithLabels(inputs),
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
