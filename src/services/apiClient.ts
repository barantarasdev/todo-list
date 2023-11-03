import sendRequest from 'src/services/http'

const client = {
  get: (url: string, isVerify: boolean) =>
    sendRequest(url, 'GET', null, isVerify),
  post: (url: string, data: any, isVerify?: boolean) =>
    sendRequest(url, 'POST', data, isVerify),
  patch: (url: string, data: any) => sendRequest(url, 'PATCH', data, true),
  delete: (url: string, isVerify: boolean) =>
    sendRequest(url, 'DELETE', null, isVerify),
}

export default client
