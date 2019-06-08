import React, { Component, Fragment } from 'react'
import ReactMapGL, { Marker } from 'react-map-gl'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as DevsActions } from '../../store/ducks/devs'

import Form from './form'
import Pin from './pin'
import Panel from './panel'

class Main extends Component {
  state = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: this.props.coordinates.latitude,
      longitude: this.props.coordinates.longitude,
      zoom: 15
    }
  }

  mapClick(map) {
    this.props.addDevClick(map.lngLat)
  }

  render() {
    const { viewport } = this.state
    const { devs, delDevRequest } = this.props

    return (
      <Fragment>
        {!devs.formVisible && devs.data.length > 0 && (
          <Panel devs={devs} delDevRequest={delDevRequest} />
        )}

        {devs.formVisible && <Form />}

        <ReactMapGL
          mapStyle="mapbox://styles/mapbox/streets-v10"
          mapboxApiAccessToken={
            'pk.eyJ1IjoicGF1bG9ucGkiLCJhIjoiY2p0ZXp5bjdtMThzeTQ2bXVkdWU1ZWRhdyJ9.lAvHWjxbaqrukRyWOMvp7w'
          }
          {...viewport}
          onViewportChange={viewport => this.setState({ viewport })}
          onClick={e => this.mapClick(e)}
        >
          {devs.data.map(dev => (
            <Marker
              key={dev.id}
              longitude={dev.coords[0]}
              latitude={dev.coords[1]}
            >
              <Pin size={40} avatar={dev.avatar} name={dev.name} />
            </Marker>
          ))}
        </ReactMapGL>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  coordinates: state.locations.coordinates,
  devs: state.devs
})

const mapDispatchToProps = dispatch => bindActionCreators(DevsActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)
