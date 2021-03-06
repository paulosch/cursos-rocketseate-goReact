import React from 'react'

import { Container, Search, User } from './styles'

const Header = () => (
  <Container>
    <Search>
      <input placeholder="Search" />
    </Search>

    <User>
      <img src="https://avatars1.githubusercontent.com/u/42703843" alt="Avar" />
      Paulo Cesar
    </User>
  </Container>
)

export default Header
