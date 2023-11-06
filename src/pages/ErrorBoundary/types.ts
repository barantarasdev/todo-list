import { PropsWithChildren } from 'react'
import { NavigateFunction } from 'react-router'
import { NavigateT } from 'src/types'

export type ErrorBoundaryProps = {
  logout: (navigate: NavigateFunction) => void
} & PropsWithChildren &
  NavigateT
