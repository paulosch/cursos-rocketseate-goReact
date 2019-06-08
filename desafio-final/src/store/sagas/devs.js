import { call, put, select } from 'redux-saga/effects'
import { toast } from 'react-toastify'
import api from '../../services/api'

import { Creators as DevActions } from '../ducks/devs'

export function* addDev(action) {
  try {
    const { data } = yield call(api.get, `/users/${action.payload.dev}`)

    const isDuplicated = yield select(state =>
      state.devs.data.find(dev => dev.id === data.id)
    )

    if (isDuplicated) {
      yield put(
        DevActions.addDevFailure(`Dev ${action.payload.dev} já está na lista`)
      )

      yield toast.error(`Dev ${action.payload.dev} já está na lista`)
    } else {
      const coords = yield select(state => state.devs.coords)

      const devData = {
        id: data.id,
        login: data.login,
        name: data.name,
        url: data.html_url,
        avatar: data.avatar_url,
        coords: coords
      }

      yield put(DevActions.addDevSuccess(devData))

      yield toast.success('Dev adicionado com sucesso!')
    }
  } catch (err) {
    yield put(DevActions.addDevFailure(`error: ${err}`))
    yield toast.error('Erro ao adicionar usuário!')
  }
}
