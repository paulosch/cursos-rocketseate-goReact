import React from 'react'
import Avatar from './Avatar'

const Post = props => {
  const postedAt = initDate => {
    let timeDiff = Date.now() - new Date(initDate)
    let minutos = timeDiff / 60000
    let extenso = ''

    if (minutos < 60) {
      extenso = `há ${Math.round(minutos)} minutos`
    } else if (minutos < 1440) {
      let tempo = Math.round(minutos / 60)
      extenso = `há ${tempo} hora${tempo !== 1 ? 's' : ''}`
    } else {
      extenso = 'mais de um dia'
    }

    return extenso
  }

  return (
    <div className="item">
      <div className="header">
        <Avatar src={props.item.avatar} alt={props.item.user} />
        <span>
          {props.item.user}
          <br />
          <span className="postedAt">{postedAt(props.item.postedAt)}</span>
        </span>
      </div>

      <p>{props.item.content}</p>
    </div>
  )
}

export default Post
