import {PureComponent} from 'react'

import Avatar from 'src/components/Avatar'
import 'src/components/Header/styles.css'
import {getDataFromLocalStorage} from 'src/helpers/storageHelper'

class Header extends PureComponent {
  render() {
    const {user_name} = getDataFromLocalStorage('user')

    return (
      <header className="header">
        <h1>Welcome, {user_name}</h1>

        <Avatar />
      </header>
    )
  }
}

export default Header
