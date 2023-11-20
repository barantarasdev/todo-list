import { MethodsE } from '@/types'

export type SendRequestProps = {
  url: string
  method?: MethodsE
  data?: unknown
  isVerify?: boolean
  count?: number
}
