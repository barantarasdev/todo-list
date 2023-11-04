import {ChangeEvent} from 'react'
import {GeneralOptionT} from 'src/types'

export type SelectProps = {
  value: string
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void
  options: GeneralOptionT[]
  id: string
  isError?: boolean
}
