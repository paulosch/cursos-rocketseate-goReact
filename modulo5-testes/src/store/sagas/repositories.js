import { call, put } from "redux-saga/effects";
import api from "../../services/api";

import { Creators as RespositoiresActions } from "../ducks/repositories";

export function* getRepositories() {
  try {
    const response = yield call(api.get, "/users/paulosch/repos");

    yield put(RespositoiresActions.getSuccess(response.data));
  } catch (err) {
    yield put(RespositoiresActions.getFailure);
  }
}
