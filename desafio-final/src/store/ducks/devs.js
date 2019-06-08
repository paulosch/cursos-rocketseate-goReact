//Types
export const Types = {
  ADD_CLICK: 'devs/ADD_CLICK',
  ADD_REQUEST: 'devs/ADD_REQUEST',
  ADD_SUCCESS: 'devs/ADD_SUCCESS',
  ADD_FAILURE: 'devs/ADD_FAILURE',
  DEL_REQUEST: 'devs/DEL_REQUEST',
  DEL_SUCCESS: 'devs/DEL_SUCCESS',
  DEL_FAILURE: 'devs/DEL_FAILURE',
  CANCEL_CLICK: 'devs/CANCEL_CLICK'
}

/*
Reducer
 */
const INITIAL_STATE = {
  loading: false,
  data: [],
  error: null,
  formVisible: false,
  coords: []
}

export default function devs(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_CLICK:
      return { ...state, formVisible: true, coords: action.payload.coords }
    case Types.ADD_REQUEST:
      return { ...state, loading: true, formVisible: false }
    case Types.ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: [...state.data, action.payload.data]
      }
    case Types.ADD_FAILURE:
      return { ...state, loading: false, error: action.payload.error }
    case Types.DEL_REQUEST:
      return {
        ...state,
        loading: false,
        error: null,
        data: state.data.filter(item => item !== action.payload.dev)
      }
    default:
      return state
  }
}

/* actions */
export const Creators = {
  addDevClick: coords => ({
    type: Types.ADD_CLICK,
    payload: { coords }
  }),

  addDevCancelClick: () => ({
    type: Types.CANCEL_CLICK
  }),

  addDevRequest: dev => ({
    type: Types.ADD_REQUEST,
    payload: { dev }
  }),

  addDevSuccess: data => ({
    type: Types.ADD_SUCCESS,
    payload: { data }
  }),

  addDevFailure: error => ({
    type: Types.ADD_FAILURE,
    payload: { error }
  }),

  delDevRequest: dev => ({
    type: Types.DEL_REQUEST,
    payload: { dev }
  }),

  delDevSuccess: dev => ({
    type: Types.DEL_SUCCESS,
    payload: { dev }
  }),

  delDevFailure: error => ({
    type: Types.DEL_FAILURE,
    payload: { error }
  })
}
