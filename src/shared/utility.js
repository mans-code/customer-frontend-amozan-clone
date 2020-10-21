import { select } from "redux-saga/effects";

export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties,
  };
};

export const checkValidity = (value, rules) => {
  let isValid = true;
  if (!rules) {
    return true;
  }

  if (rules.required) {
    isValid = value.trim() !== "" && isValid;
  }

  if (rules.minLength) {
    isValid = value.length >= rules.minLength && isValid;
  }

  if (rules.maxLength) {
    isValid = value.length <= rules.maxLength && isValid;
  }

  if (rules.isEmail) {
    const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    isValid = pattern.test(value) && isValid;
  }

  if (rules.isNumeric) {
    const pattern = /^\d+$/;
    isValid = pattern.test(value) && isValid;
  }

  return isValid;
};

const mapCartProduct = (cart) => {
  let newcart = cart.productInfos ? cart.productInfos : [];
  newcart = cart.map((product) => {
    const price = product.money.amount;
    const image = product.imageUrl;

    delete product["imageUrl"];
    delete product["money"];

    product.price = price;
    product.image = image;
    product.rating = 5;
    return product;
  });
  return newcart;
};

export function* yieldCustomerId() {
  const state = yield select();
  return state.auth.customerId;
}

export const mapCartResponse = (data) => {
  const totalPrice = data.money ? data.money.amount : 0;
  const currency = data.money ? data.money.currency : "USD";

  return {
    customerId: data.id,
    cart: mapCartProduct(data.productInfos),
    numOfItems: data.totalQuantity,
    totalPrice: totalPrice,
    currency: currency,
  };
};