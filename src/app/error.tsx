'use client'

/* eslint-disable react-hooks/exhaustive-deps */

import { Button, Typography } from '@mui/material'

import { MainSection } from '@/styles'

function Error({ reset }: { reset: () => void }) {
  return (
    <MainSection>
      <Typography variant="h3">Something went wrong!</Typography>

      <Button onClick={reset}>Try again</Button>
    </MainSection>
  )
}

export default Error
