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
  CALL_MODAL: 'CALL_MODAL',
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
  'confirmPassword',
]

export const GENDER_OPTIONS = [
  {
    value: '',
    text: 'Not specified',
    options: { disabled: true, selected: true },
  },
  { value: 'm', text: 'Male' },
  { value: 'f', text: ' Female' },
]

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
