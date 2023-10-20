import { createActions } from '../helpers/index.js'

export const ACTIONS = {
  TODO: createActions('TODO'),
  STATE_CHANGE: 'STATE_CHANGE',
  SET_USER: 'SET_USER',
}
