import * as actionTypes from "./actionTypes";

export const purchaseCartSuccess = (id, orderData) => {
  return {
    type: actionTypes.PURCHASE_CART_SUCCESS,
    orderId: id,
    orderData: orderData,
  };
};

export const purchaseCartFail = (error) => {
  return {
    type: actionTypes.PURCHASE_CART_FAIL,
    error: error,
  };
};

export const purchaseCartStart = () => {
  return {
    type: actionTypes.PURCHASE_CART_START,
  };
};

export const initCheckout = () => {
  return {
    type: actionTypes.INIT_CHECKOUT,
  };
};

export const checkoutStart = () => {
  return {
    type: actionTypes.CHECKOUT_START,
  };
}

export const checkoutFaild = () => {
  return {
    type: actionTypes.CHECKOUT_FAILD,
  };
};

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
    shippingAddresses: shippingAddresses
  };
};

export const setChosenShippingAddress = (shippingAddress) =>{
  return {
    type: actionTypes.SET_CHOSEN_SHIPPING_ADDRESS,
    shippingAddress: shippingAddress
  };
};

export const fetchShippingAddressesFaild = () => {
  return {
    type: actionTypes.CHECKOUT_FAILD,
  };
};
export const setStripeKey = (stripeKey, error) => {
  return {
    type: actionTypes.SET_STRIPE_PUBLIC_KEY,
  };
};

export const purchaseCart = (orderData, token) => {
  return {
    type: actionTypes.PURCHASE_CART,
    orderData: orderData,
    token: token,
  };
};
