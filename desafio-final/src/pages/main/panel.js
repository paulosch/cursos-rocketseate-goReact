import React from 'react'

import DevItem from './devItem'

import { PanelHtml } from './styles'

const Panel = ({ devs, delDevRequest }) => (
  <PanelHtml>
    {devs.data.map(dev => (
      <DevItem key={dev.id} dev={dev} delDevRequest={delDevRequest} />
    ))}
  </PanelHtml>
)

export default Panel
