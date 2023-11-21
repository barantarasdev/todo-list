import { SelectChangeEvent } from '@mui/material'

import { GendersT, OptionT } from '@/types'

export type SelectProps = {
  items: OptionT<GendersT>[]
  name: string
  value: string
  placeholder: string
  onChange: (e: SelectChangeEvent<string>) => void
  helperText: string | null
  error: boolean
}
