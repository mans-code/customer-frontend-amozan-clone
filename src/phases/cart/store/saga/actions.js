import { put } from "redux-saga/effects";
import { yieldCustomerId, mapCartResponse } from "../../../../shared/utility";
import axios from "../../../../shared/axios";
import * as actions from "../action/actions";
import {setCustomerId} from "../../../auth/store/action/actions";

const cartAction = {
  DELETE: "DELETE",
  ADD: "ADD",
  UPDATE: "UPDATE",
  RESET: "RESET",
};

const getRequestBody = (action, cartAction) => {
  return {
    sku: action.product.sku,
    variationId: action.product.variationId,
    quantity: action.product.quantity,
    cartAction: cartAction,
  };
};

export function* updateCart(action, cartAction) {
  const customerId = yield yieldCustomerId();
  const reqBody = getRequestBody(action, cartAction);
  const url = `carts/${customerId}`;
  console.log(reqBody)
  try {
    const response = yield axios.patch(url, reqBody);
    const data = mapCartResponse(response.data);
    yield put(actions.setCart(data));
  } catch (error) {
    yield put(actions.updatingCartFaild(error, action.product));
  }
}

export function* initCart(action) {
  try {
    const response = yield axios.get("/anonymous");
    const data = mapCartResponse(response.data);
    yield put(actions.setCart(data));
    yield put(setCustomerId(data.customerId));
  } catch (error) {
    yield put(actions.fetchCartFailed());
  }
}

export function* addToCart(action) {
  yield updateCart(action, cartAction.ADD);
}

export function* removeFromCart(action) {
  yield updateCart(action, cartAction.DELETE);
}

export function* changeProductQuantity(action) {
  yield updateCart(action, cartAction.UPDATE);
}
