import * as actionTypes from "../action/actionTypes";
import { updateObject } from "../../../../shared/utility";


const initialState = {
  orders: [
    {
      id: "12234545",
      totalPrice: 100.52,
      date: "September 17th 2020, 10:40am",
      basket: [
        {
          sku: "12234545",
          title: "The Lean startup: new constant Innovation",
          price: 11.22,
          rating: 5,
          image:
            "https://m.media-amazon.com/images/I/81Pi4nhjlwL._AC_UY327_FMwebp_QL65_.jpg",
        },
        {
          sku: "12234545",
          title: "The Lean startup: new constant Innovation",
          price: 11.22,
          rating: 5,
          image:
            "https://m.media-amazon.com/images/I/81Pi4nhjlwL._AC_UY327_FMwebp_QL65_.jpg",
        },
      ],
    },
    {
      id: "12234545",
      totalPrice: 100.52,
      date: "September 17th 2020, 10:40am",
      basket: [
        {
          sku: "12234545",
          title: "The Lean startup: new constant Innovation",
          price: 11.22,
          rating: 5,
          image:
            "https://m.media-amazon.com/images/I/81Pi4nhjlwL._AC_UY327_FMwebp_QL65_.jpg",
        },
        {
          sku: "12234545",
          title: "The Lean startup: new constant Innovation",
          price: 11.22,
          rating: 5,
          image:
            "https://m.media-amazon.com/images/I/81Pi4nhjlwL._AC_UY327_FMwebp_QL65_.jpg",
        },
      ],
    },
  ],
  loading: false,
};



const fetchOrdersStart = (state, action) => {
  return updateObject(state, { loading: true });
};

const fetchOrdersSuccess = (state, action) => {
  return updateObject(state, {
    orders: action.orders,
    loading: false,
  });
};

const fetchOrdersFail = (state, action) => {
  return updateObject(state, { loading: false });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ORDERS_START:
      return fetchOrdersStart(state, action);
    case actionTypes.FETCH_ORDERS_SUCCESS:
      return fetchOrdersSuccess(state, action);
    case actionTypes.FETCH_ORDERS_FAIL:
      return fetchOrdersFail(state, action);
    default:
      return state;
  }
};

export default reducer;
