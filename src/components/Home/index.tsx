'use client'

import { Typography } from '@mui/material'

import WithPrivateRoute from '@/hocks/WithPrivateRoutes'
import useHome from '@/components/Home/useHome'
import Section from '@/components/Home/styles'

function Main() {
  const { userName } = useHome()

  return (
    <Section>
      <Typography variant="h1">
        Welcome, <br /> {userName}
      </Typography>
    </Section>
  )
}

export default WithPrivateRoute(Main)
