import { NavigateT } from 'src/types'

export type LayoutProps = {
  setTodos: (id: string) => void
} & NavigateT
