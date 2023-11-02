import { sendRequest } from 'src/services/http'

export const client = {
  get: (url, isVerify) => sendRequest(url, 'GET', null, isVerify),
  post: (url, data, isVerify) => sendRequest(url, 'POST', data, isVerify),
  patch: (url, data) => sendRequest(url, 'PATCH', data, true),
  delete: (url, isVerify) => sendRequest(url, 'DELETE', null, isVerify),
}
