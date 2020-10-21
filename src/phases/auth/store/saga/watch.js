import { takeEvery, all } from "redux-saga/effects";
import * as actionTypes from "../action/actionTypes";
import * as action from "./actions";

export default function* watchAuth() {
  yield all([
    takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, action.timeout),
    takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, action.logout),
    takeEvery(actionTypes.AUTH_USER, action.authUser),
    takeEvery(actionTypes.AUTH_CHECK_STATE, action.checkState),
  ]);
}
