import { MethodsE } from '@/types'
import { SendRequestProps } from './types'
import sendRequest from './apiCall'

const { POST, PATCH, DELETE } = MethodsE

const client = {
  get: <T>(props: SendRequestProps) => sendRequest<T>(props),
  post: <T>(props: SendRequestProps) =>
    sendRequest<T>({ ...props, method: POST }),
  patch: <T>(props: SendRequestProps) =>
    sendRequest<T>({ ...props, method: PATCH }),
  delete: <T>(props: SendRequestProps) =>
    sendRequest<T>({ ...props, method: DELETE }),
}

export default client
