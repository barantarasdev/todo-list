import sendRequest from 'src/services/callApi'
import { Methods } from 'src/types'

const { GET, POST, PATCH, DELETE } = Methods

const client = {
  get: <T>(url: string, isVerify: boolean) =>
    sendRequest<T>(url, GET, null, isVerify),
  post: <T>(url: string, data: unknown, isVerify?: boolean) =>
    sendRequest<T>(url, POST, data, isVerify),
  patch: <T>(url: string, data: unknown) =>
    sendRequest<T>(url, PATCH, data, true),
  delete: <T>(url: string, isVerify: boolean) =>
    sendRequest<T>(url, DELETE, null, isVerify),
}

export default client
