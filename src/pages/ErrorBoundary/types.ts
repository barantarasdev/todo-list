import { PropsWithChildren } from 'react'
import { NavigateFunction } from 'react-router'

export type ErrorBoundaryProps = {
  logout: (navigate: NavigateFunction) => void
  navigate: NavigateFunction
} & PropsWithChildren
