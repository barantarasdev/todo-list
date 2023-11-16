import { ListItem } from '@mui/material'

import { NAVIGATION_ITEMS } from '@/constants'
import { List, StyledLink } from '@/components/Navigation/styles'
import { usePathname } from 'next/navigation'

function Navigation() {
  const pathname = usePathname()

  return (
    <List>
      {NAVIGATION_ITEMS.map(({ name, href }) => (
        <ListItem key={href}>
          <StyledLink href={href} $isActive={pathname === href}>
            {name}
          </StyledLink>
        </ListItem>
      ))}
    </List>
  )
}

export default Navigation
