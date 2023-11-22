/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { useAppDispatch } from '@/hooks/useRedux'
import { updateSocketIdCreator } from '@/store/slices/boardsSlice/actionCreator'
import { SocketDataT, SocketsEventsE } from '@/types'
import getSocket from '@/common/singletones'

function useSocket(event: SocketsEventsE) {
  const socket = getSocket()
  const dispatch = useAppDispatch()
  const router = useRouter()
  const { id } = useParams()
  const [data, setData] = useState<SocketDataT>(null)

  useEffect(() => {
    socket.on('connect', () => {
      dispatch(
        updateSocketIdCreator({
          sockedId: socket.id,
          router,
          boardId: id as string,
        })
      )
    })

    socket.on(event, (body: SocketDataT) => {
      setData(body)
    })

    return () => {
      socket.off(event)
    }
  }, [event, dispatch, id])

  return { data }
}

export default useSocket
