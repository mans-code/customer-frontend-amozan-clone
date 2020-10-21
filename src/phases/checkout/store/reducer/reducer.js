import * as actionTypes from "../action/actionTypes";
import { updateObject } from "../../../../shared/utility";

const initialState = {
  checkoutLoading: false,
  purchaseLoading: false,
  addressesLoding: false,
  stripePublicKey: null,
  
  shippingAddressesList: [],
  chosenShippingAddres: null,
};

const checkoutStart = (state, action) => {
  return updateObject(state, { checkoutLoading: true });
};

const setStripeKey = (state, action) => {
  return updateObject(state, { stripePublicKey: action.stripePublicKey });
};

const purchaseProductStart = (state, action) => {
  return updateObject(state, { purchaseLoading: true });
};

const purchaseProductSuccess = (state, action) => {
  return updateObject(state, {
    purchaseLoading: false,
  });
};

const purchaseProductFail = (state, action) => {
  return updateObject(state, { purchaseLoading: false });
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
    return updateObject(state, { chosenShippingAddres: action.shippingAddress}); 
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHECKOUT_START:
      return checkoutStart();
    case actionTypes.SET_STRIPE_PUBLIC_KEY:
      return setStripeKey(state, action);
    case actionTypes.FETCH_SHIPPING_ADDRESSES_START:
      return fetchShippingAddressesStart();
    case actionTypes.SET_SHIPPING_ADDRESSES:
      return setShippingAddresses(state, action);
      case actionTypes.SET_CHOSEN_SHIPPING_ADDRESS:
         return setChosenShippingAddress(state, action)
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
