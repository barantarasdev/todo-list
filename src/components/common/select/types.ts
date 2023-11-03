import {ChangeEvent} from 'react'
import {GeneralOptionsT} from 'src/types'

export type SelectProps = {
  value: string
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void
  options: GeneralOptionsT
  id: string
}
