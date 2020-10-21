import { takeLatest } from "redux-saga/effects";
import * as actionTypes from "../action/actionTypes";
import * as action from "./actions";

export default function* watchOrder() {
  yield takeLatest(actionTypes.FETCH_ORDERS, action.fetchOrders);
}
