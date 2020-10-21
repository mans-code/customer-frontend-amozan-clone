import { takeEvery, takeLatest } from "redux-saga/effects";
import * as actionTypes from "../action/actionTypes";
import * as action from "./actions";

export default function* watchCart() {
  yield takeLatest(actionTypes.INIT_CART, action.initCart);
  yield takeEvery(actionTypes.ADD_TO_CART, action.addToCart);
  yield takeEvery(actionTypes.REMOVE_FROM_CART, action.removeFromCart);
  yield takeLatest(
    actionTypes.CHANGE_PRODUCT_QUANTITY,
    action.changeProductQuantity
  );
}
