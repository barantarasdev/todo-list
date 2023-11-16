import { useAppSelector } from '@/hooks/useRedux'

function useHome() {
  const { userName } = useAppSelector(state => state.user)

  return { userName }
}

export default useHome
