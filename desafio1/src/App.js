/* eslint-disable no-unused-vars */
import React, { Component, Fragment } from 'react'
import { render } from 'react-dom'
import Header from './Header'
import Posts from './Posts'
import postsResources from './resources/posts.json'

import './styles/style.scss'

class App extends Component {
  render () {
    return (
      <Fragment>
        <Header title="Desafio 1 GoReact" />

        <div className="content">
          <Posts posts={postsResources} />
        </div>
      </Fragment>
    )
  }
}

render(<App />, document.getElementById('app'))
