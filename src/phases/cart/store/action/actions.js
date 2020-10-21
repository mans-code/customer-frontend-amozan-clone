import * as actionTypes from "./actionTypes";

export const addProduct = (product) => {
  return {
    type: actionTypes.ADD_TO_CART,
    product,
  };
};

export const removeProduct = (product) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    product,
  };
};

export const changeProductQuantity = (product) => {
  return {
    type: actionTypes.CHANGE_PRODUCT_QUANTITY,
    product,
  };
};

export const setCart = (payload) => {
  return {
    type: actionTypes.SET_CART,
    payload,
  };
};

export const updatingCartFaild = (error, product) => {
  return {
    type: actionTypes.UPDATING_CART_FAILED,
    error,
  };
};


export const fetchCartFailed = () => {
  return {
    type: actionTypes.FETCH_CART_FAILED,
  };
};

export const initCart = () => {
  return {
    type: actionTypes.INIT_CART,
  };
};
