import { put } from "redux-saga/effects";
import axios from "../../../../shared/axios"
import { yieldCustomerId, mapCartResponse } from "../../../../shared/utility";
import * as actions from "../action/actions";
import {setCart} from "../../../cart/store/action/actions";

const getCheckoutUrl = ( cutomerId, path="") => {
    console.log("getCheckout", cutomerId, `/checkout/${cutomerId}/${path}`)
    return `/checkout/${cutomerId}/${path}`;
  }
  
  export function* initCheckout(action) {
    yield put(actions.checkoutStart());
    const customerId = yield yieldCustomerId();

    const url = getCheckoutUrl(customerId);
    console.log(url, customerId, "checkout url ")
  
    try {
      const response = yield axios.post(url);
      const cart = mapCartResponse(response.data.cart);
      const stripePublicKey = response.data.stripePublicKey;
      console.log(response, "Checkout Res")
      yield put(setCart(cart));
      yield put(actions.setStripeKey(stripePublicKey));
    } catch (error) {
      yield put(actions.checkoutFaild(error));
    }
  }

  export function* fetchShippingAddresses(action) {
    yield put(actions.fetchShippingAddressesStart());;
    const customerId = yield yieldCustomerId();
    const url = `/customers/${customerId}/shipping`;
  
    try {
      const response = yield axios.get(url);
      yield put(actions.setShippingAddresses(response.data));
    } catch (error) {
        yield put(actions.setShippingAddresses([])); // TODO 
    }
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