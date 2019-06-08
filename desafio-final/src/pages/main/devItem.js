import React from 'react'

import {
  DevItemHtml,
  AvatarWOB,
  Strong,
  Small,
  ContainerText,
  IconDanger,
  Icon
} from './styles'

const DevItem = ({ dev, delDevRequest }) => {
  const deleteDev = e => {
    delDevRequest(dev)
  }

  return (
    <DevItemHtml key={dev.id}>
      <AvatarWOB src={dev.avatar} width="40" height="40" />
      <ContainerText>
        <Strong>{dev.name}</Strong>
        <Small>{dev.login}</Small>
      </ContainerText>

      <IconDanger className="fa fa-times" color="red" onClick={deleteDev} />
      <a href={dev.url} target="blank">
        <Icon className="fa fa-chevron-right" color="gray" />
      </a>
    </DevItemHtml>
  )
}

export default DevItem
