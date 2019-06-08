/* Types */
export const Types = {
  UPD_COORDS: 'UPD_COORDS'
}

/* Reducer */
const INITIAL_STATE = {
  coordinates: {
    latitude: -27.4333696,
    longitude: -48.3950592
  }
}

export default function location(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.UPD_COORDS:
      return { ...state, Coordinates: action.payload }
    default:
      return state
  }
}

/* Actions */
export const Creators = {
  updateCoordinates: coordinates => ({
    type: Types.UPD_COORDS,
    payload: { coordinates }
  })
}
