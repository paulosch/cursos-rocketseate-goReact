import React, { PureComponent } from 'react'

import { Avatar } from './styles'

export default class Pin extends PureComponent {
  render() {
    const { size = 20, avatar, name } = this.props

    return <Avatar src={avatar} width={size} height={size} alt={name} />
  }
}
