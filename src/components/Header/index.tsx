'use client'

import { AppBar, Button } from '@mui/material'
import { usePathname, useRouter } from 'next/navigation'

import Menu from '@/components/Menu'
import Logo from '@/components/Logo'
import { RoutesE } from '@/types'

function Header() {
  const path = usePathname()
  const name = path === RoutesE.SIGN_IN ? 'Sing up' : 'Sign in'
  const router = useRouter()

  const onClick = () => {
    if (path === RoutesE.SIGN_IN) {
      router.push(RoutesE.SIGN_UP)

      return
    }

    router.push(RoutesE.SIGN_IN)
  }

  return (
    <AppBar>
      <Logo />

      {path === RoutesE.HOME ? (
        <Menu />
      ) : (
        <Button color="info" onClick={onClick}>
          {name}
        </Button>
      )}
    </AppBar>
  )
}

export default Header
