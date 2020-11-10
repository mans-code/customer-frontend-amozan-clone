import { put, select } from "redux-saga/effects";
import axios from "../../../../shared/axios";
import { yieldCustomerId, mapCartResponse } from "../../../../shared/utility";
import * as actions from "../action/actions";
import { setCart } from "../../../cart/store/action/actions";

const getCheckoutUrl = (cutomerId, path = "") => {
  return `/checkout/${cutomerId}/${path}`;
};

function* yieldRequestBodyForCompleteingCheckout(action) {
  const state = yield select();
  const token = state.checkout.stripeCustomerToken;
  const address = state.checkout.chosenShippingAddres;
  return {
    address,
    token
  };
}

export function* initCheckout(action) {
  yield put(actions.checkoutStart());
  const customerId = yield yieldCustomerId();
  const url = getCheckoutUrl(customerId);

  try {
    const response = yield axios.post(url);
    const cart = mapCartResponse(response.data.cart);
    yield put(setCart(cart));
    yield put(actions.checkoutSuccessed());
  } catch (error) {
    yield put(actions.checkoutFaild(error));
  }
}

export function* fetchShippingAddresses(action) {
  yield put(actions.fetchShippingAddressesStart());
  const customerId = yield yieldCustomerId();
  const url = `/customers/${customerId}/shipping`;

  try {
    const response = yield axios.get(url);
    yield put(actions.setShippingAddresses(response.data));
  } catch (error) {
    yield put(actions.setShippingAddresses([])); // TODO
  }
}

export function* checkoutComplete(action) {
  console.log("checkoutComplete Start")
  yield put(actions.purchaseCartStart());

  const customerId = yield yieldCustomerId();
  const url = getCheckoutUrl(customerId, "complete");

  const reqBody = yield yieldRequestBodyForCompleteingCheckout();
  console.log("purchaseCar start");
  try {
    const response = yield axios.post(url, reqBody);
    yield put(actions.purchaseCartSuccess(response.data));
    console.log("checkoutComplete Success");
  } catch (error) {
    console.log("checkoutComplete Faild")
    yield put(actions.purchaseCartFail(error));
  }
}

export function* checkoutCanceled(action) {
  const customerId = yield yieldCustomerId();
  const url = getCheckoutUrl(customerId, "leaving");
  try {
   yield axios.post(url);
  } catch (error) {}
}

// export function* purchaseCartSaga(action) {
//   yield put(actions.purchaseCartStart());
//   try {
//     const response = yield axios.post(
//       "/orders.json?auth=" + action.token,
//       action.orderData
//     );
//     yield put(
//       actions.purchaseCartSuccess(response.data.name, action.orderData)
//     );
//   } catch (error) {
//     yield put(actions.purchaseCartFail(error));
//   }
// }
