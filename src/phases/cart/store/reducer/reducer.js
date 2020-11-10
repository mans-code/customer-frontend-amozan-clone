import * as actionTypes from "../action/actionTypes";
import { updateObject } from "../../../../shared/utility";
const initialState = {
  basket: [],
  totalPrice: 0.0,
  numOfItems: 0,
  currency: "USD",
  error: false,
};

const setCart = (state, action) => {
  return updateObject(state, {
    basket: action.payload.cart,
    totalPrice: action.payload.totalPrice,
    numOfItems: action.payload.numOfItems,
    currency: action.payload.currency,
  });
};

const updatingCartFaild = (state, action) => {
  return updateObject(state, {});
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CART:
      return setCart(state, action);
    case actionTypes.UPDATING_CART_FAILED:
      return updatingCartFaild(state, action);
    default:
      return state;
  }
};

export default reducer;

// const removeProductWithSku = (cart, sku) => {
//   const index = cart.findIndex((product) => product.sku === sku);
//   cart.splice(index, 1);
//   return index;
// };

// const calculateTotalPrice = (cart) => {
//   const sumPrices = (total, { price, quantity }) => total + price * quantity;
//   return cart.reduce(sumPrices, 0);
// };

// const calculateNumOfItems = (cart) => {
//   const sumQuantities = (total, { quantity }) => total + quantity;
//   return cart.reduce(sumQuantities, 0);
// };

// const updateStateAfterCartOperation = (updatedCart, state) => {
//   const updatedTotalPrice = calculateTotalPrice(updatedCart);
//   const updatedTotalNumOfItems = calculateNumOfItems(updatedCart);

//   const updatedState = {
//     cart: updatedCart,
//     totalPrice: updatedTotalPrice,
//     numOfItems: updatedTotalNumOfItems,
//   };

//   return updateObject(state, updatedState);
// };

// const updateProductQuantity = (state, action) => {
//   const sku = action.product.sku;
//   const updatedCart = [...state.cart];
//   const index = removeProductWithSku(updatedCart, sku);

//   const newQuantity = action.product.quantity;
//   const updatedProduct = updateObject(action.product, {
//     quantity: newQuantity,
//   });
//   updatedCart.splice(index, 0, updatedProduct);

//   return updateStateAfterCartOperation(updatedCart, state);
// };

// const removeProduct = (state, action) => {
//   const sku = action.product.sku;
//   const updatedCart = [...state.cart];
//   removeProductWithSku(updatedCart, sku);
//   return updateStateAfterCartOperation(updatedCart, state);
// };

// const addProduct = (state, action) => {
//   const updatedCart = [...state.cart, action.product];
//   return updateStateAfterCartOperation(updatedCart, state);
// };
