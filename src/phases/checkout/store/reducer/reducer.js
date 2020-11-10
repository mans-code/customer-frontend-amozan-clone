import * as actionTypes from "../action/actionTypes";
import { updateObject } from "../../../../shared/utility";

const initialState = {
  checkoutLoading: true,
  purchaseLoading: true,
  purchasing: false,
  addressesLoding: false,
  purchaseError: null,
  nextStep: null,
  shippingAddressesList: [],
  chosenShippingAddres: null,
  stripeCustomerToken: null,
  paymentInfo: null,
};

const checkoutStart = (state, action) => {
  return updateObject(state, { checkoutLoading: true, purchasing: true });
};

const checkoutCanceled = (state, action) => {
  return updateObject(state, { chosenShippingAddres: null, purchasing: false });
};

const checkoutSuccessed = (state, action) => {
  return updateObject(state, { checkoutLoading: false });
};

const setNextStep = (state, action) => {
  return updateObject(state, {
    nextStep: action.nextStep,
  });
};

const fetchShippingAddressesStart = (state, action) => {
  return updateObject(state, { addressesLoding: true });
};

const setShippingAddresses = (state, action) => {
  return updateObject(state, {
    addressesLoding: false,
    shippingAddresses: action.shippingAddresses,
  });
};

const setChosenShippingAddress = (state, action) => {
  return updateObject(state, { chosenShippingAddres: action.shippingAddress });
};

const setStripeCustomerToken = (state, action) => {
  return updateObject(state, { stripeCustomerToken: action.token });
};

const purchaseProductStart = (state, action) => {
  return updateObject(state, { purchaseLoading: true });
};

const purchaseProductSuccess = (state, action) => {
  return updateObject(state, {
    purchaseLoading: false,
    paymentInfo: action.paymentInfo,
    purchasing: false,
  });
};

const purchaseProductFail = (state, action) => {
  return updateObject(state, {
    purchaseLoading: false,
    purchaseError: action.error,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHECKOUT_START:
      return checkoutStart(state, action);
    case actionTypes.CHECKOUT_SUCCESSED:
      return checkoutSuccessed(state, action);
    case actionTypes.CHECKOUT_CANCELED:
      return checkoutCanceled(state, action);
    case actionTypes.SET_NEXT_STEP:
      return setNextStep(state, action);
    case actionTypes.FETCH_SHIPPING_ADDRESSES_START:
      return fetchShippingAddressesStart(state, action);
    case actionTypes.SET_SHIPPING_ADDRESSES:
      return setShippingAddresses(state, action);
    case actionTypes.SET_CHOSEN_SHIPPING_ADDRESS:
      return setChosenShippingAddress(state, action);
    case actionTypes.SET_STRIPE_CUSTOMER_TOKEN:
      return setStripeCustomerToken(state, action);
    case actionTypes.PURCHASE_CART_START:
      return purchaseProductStart(state, action);
    case actionTypes.PURCHASE_CART_SUCCESS:
      return purchaseProductSuccess(state, action);
    case actionTypes.PURCHASE_CART_FAIL:
      return purchaseProductFail(state, action);
    default:
      return state;
  }
};

export default reducer;
