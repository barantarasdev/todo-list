import {useNavigate} from 'react-router-dom'

export type LayoutProps = {
  navigate: ReturnType<typeof useNavigate>
  setTodos: (id: string) => void
}
