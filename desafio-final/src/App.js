import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { geolocated } from 'react-geolocated'
import { ToastContainer } from 'react-toastify'

import 'font-awesome/css/font-awesome.min.css'
import GlobalStyle from './styles/global'

import 'react-toastify/dist/ReactToastify.css'
import './config/reactotron'
import store from './store'
import Routes from './routes'

class App extends Component {
  componentDidUpdate() {}

  render() {
    return (
      <Provider store={store}>
        <GlobalStyle />
        <ToastContainer />
        <Routes />
      </Provider>
    )
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false
  },
  userDecisionTimeout: 5000
})(App)
