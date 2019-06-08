import React from 'react'
import Post from './Post/Post'

const Posts = props => {
  const listItems = props.posts.map((item, index) => (
    <Post key={index} item={item} />
  ))
  return <div>{listItems}</div>
}

export default Posts
