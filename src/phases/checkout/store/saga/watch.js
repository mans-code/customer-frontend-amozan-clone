import { takeLatest } from "redux-saga/effects";
import * as actionTypes from "../action/actionTypes";
import * as action from "./actions";

export default function* watchCheckout() {
  yield takeLatest(actionTypes.INIT_CHECKOUT, action.initCheckout);
  yield takeLatest(
    actionTypes.FETCH_SHIPPING_ADDRESSES,
    action.fetchShippingAddresses
  );
}
