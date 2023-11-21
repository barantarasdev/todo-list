import { useMemo } from 'react'

import { FieldProps } from '@/components/common/Field/types'

function useField({ type }: Pick<FieldProps, 'type'>) {
  const isPassword = useMemo(() => type === 'password', [type])

  return { isPassword }
}

export default useField
