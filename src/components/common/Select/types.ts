import { SelectChangeEvent } from '@mui/material'
import { GeneralOptionT } from 'src/types'

export type SelectProps = {
  items: GeneralOptionT[]
  name: string
  value: string
  placeholder: string
  onChange: (e: SelectChangeEvent<string>) => void
  helperText: string | null
  error: boolean
}
