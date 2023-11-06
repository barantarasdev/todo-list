import { PureComponent } from 'react'
import Avatar from 'src/components/Avatar'
import StyledHeader from 'src/components/Header/styles'
import { getDataFromLocalStorage } from 'src/helpers/storageHelper'

class Header extends PureComponent {
  render() {
    const { userName } = getDataFromLocalStorage('user')

    return (
      <StyledHeader>
        <h1>Welcome, {userName} 👋</h1>

        <Avatar />
      </StyledHeader>
    )
  }
}

export default Header
