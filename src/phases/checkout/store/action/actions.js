import * as actionTypes from "./actionTypes";

export const setNextStep = (nextStep) => {
  return {
    type: actionTypes.SET_NEXT_STEP,
    nextStep,
  };
};

//========================CHECKOUT========================

export const initCheckout = () => {
  return {
    type: actionTypes.INIT_CHECKOUT,
  };
};

export const checkoutStart = () => {
  return {
    type: actionTypes.CHECKOUT_START,
  };
};

export const checkoutSuccessed = (error) => {
  return {
    type: actionTypes.CHECKOUT_SUCCESSED,
    error,
  };
};

export const checkoutCanceled = () => {
  return {
    type: actionTypes.CHECKOUT_CANCELED,
  };
};

export const checkoutFaild = () => {
  return {
    type: actionTypes.CHECKOUT_FAILD,
  };
};

//========================SHIPPING_ADDRESS========================

export const fetchShippingAddresses = () => {
  return {
    type: actionTypes.FETCH_SHIPPING_ADDRESSES,
  };
};

export const fetchShippingAddressesStart = () => {
  return {
    type: actionTypes.FETCH_SHIPPING_ADDRESSES_START,
  };
};

export const setShippingAddresses = (shippingAddresses) => {
  return {
    type: actionTypes.SET_SHIPPING_ADDRESSES,
    shippingAddresses: shippingAddresses,
  };
};

export const setChosenShippingAddress = (shippingAddress) => {
  return {
    type: actionTypes.SET_CHOSEN_SHIPPING_ADDRESS,
    shippingAddress: shippingAddress,
  };
};

export const fetchShippingAddressesFaild = () => {
  return {
    type: actionTypes.CHECKOUT_FAILD,
  };
};

//========================PAYMENT_INFO========================

export const setStripeCustomerToken = (token) => {
  return {
    type: actionTypes.SET_STRIPE_CUSTOMER_TOKEN,
    token: token.id,
  };
};

//========================PURCHASE=============================

export const initPurchaseCart = () => {
  return {
    type: actionTypes.INIT_PURCHASE_CART,
  };
};

export const purchaseCartStart = () => {
  return {
    type: actionTypes.PURCHASE_CART_START,
  };
};

export const purchaseCartSuccess = (paymentInfo) => {
  return {
    type: actionTypes.PURCHASE_CART_SUCCESS,
    paymentInfo,
  };
};

export const purchaseCartFail = (error) => {
  return {
    type: actionTypes.PURCHASE_CART_FAIL,
    error: error,
  };
};
