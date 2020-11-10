import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";

import cartReducer from "./phases/cart/store/reducer/reducer";
import orderReducer from "./phases/orders/store/reducer/reducer";
import authReducer from "./phases/auth/store/reducer/reducer";
import checkoutReducer from "./phases/checkout/store/reducer/reducer";

import watchAuth from "./phases/auth/store/saga/watch";
import watchCart from "./phases/cart/store/saga/watch";
import watchOrder from "./phases/orders/store/saga/watch";
import watchCheckout from "./phases/checkout/store/saga/watch";

import App from "./hoc/App/App";
import * as serviceWorker from "./serviceWorker";

import "./index.css";

const composeEnhancers =
  (process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null) || compose;

const rootReducer = combineReducers({
  cart: cartReducer,
  order: orderReducer,
  auth: authReducer,
  checkout: checkoutReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, sagaMiddleware))
);

sagaMiddleware.run(watchAuth);
sagaMiddleware.run(watchCart);
sagaMiddleware.run(watchOrder);
sagaMiddleware.run(watchCheckout);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
