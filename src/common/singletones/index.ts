import io, { Socket } from 'socket.io-client'

const SOCKET_URL = process.env.NEXT_PUBLIC_BASE_URL || ''

let socket: Socket

const getSocket = () => {
  if (!socket) {
    socket = io(SOCKET_URL)
  }

  return socket
}

export default getSocket
