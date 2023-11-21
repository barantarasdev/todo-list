import { Button, Typography } from '@mui/material'
import Link from 'next/link'

import { RoutesE } from '@/types'
import { MainSection } from '@/styles'

function NotFound() {
  return (
    <MainSection>
      <Typography variant="h2">404</Typography>

      <Typography variant="subtitle1">
        The page you are looking for <br />
        has been lost in space.
      </Typography>

      <Link href={RoutesE.HOME}>
        <Button>Return Home</Button>
      </Link>
    </MainSection>
  )
}

export default NotFound
