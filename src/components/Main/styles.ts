'use client'

import { styled } from '@mui/material'

import { HEADER_HEIGHT, PRIMARY_PADDING } from '@/constants'

const Main = styled('main')`
  height: 100%;
  min-width: fit-content;
  padding: ${HEADER_HEIGHT + PRIMARY_PADDING}px ${PRIMARY_PADDING}px
    ${PRIMARY_PADDING}px;
`

export default Main
