import { put, call, delay } from "redux-saga/effects";
import axios from "../../axios";

import * as actions from "../actions/index";

export function* logout(action) {
  yield call([localStorage, "removeItem"], "token");
  yield call([localStorage, "removeItem"], "expirationDate");
  yield call([localStorage, "removeItem"], "customerId");
  yield put(actions.logoutSucceed());
}

export function* timeout(action) {
  yield delay(action.expirationTime * 1000);
  yield put(actions.logout());
}

export function* authUser(action) {
  yield put(actions.authStart());
  const authData = {
    email: action.email,
    password: action.password,
  };
  let url = "/auths/signin";
  if (!action.isSignup) {
    url = "/auths/signup";
    authData.username = authData.email;
    authData.firstName = "mans";
    authData.lastName = "saad";
  }
  // try {
  //   const response = yield axios.post(url, authData);

  //   const expirationDate = yield new Date(
  //     new Date().getTime() + response.data.expiresIn * 1000
  //   );
  //   yield localStorage.setItem("token", response.data.token);
  //   yield localStorage.setItem("expirationDate", expirationDate);
  //   yield localStorage.setItem("customerId", response.data.customerId);
  //   yield put(
  //     actions.authSuccess(response.data.idToken, response.data.customerId)
  //   );
  //   yield put(actions.checkAuthTimeout(response.data.expiresIn));
  // } catch (error) {
  //   yield put(actions.authFail(error.response.data.error));
  // }
}

export function* checkState(action) {
  const token = yield localStorage.getItem("token");
  if (!token) {
    yield put(actions.logout());
  } else {
    const expirationDate = yield new Date(
      localStorage.getItem("expirationDate")
    );
    if (expirationDate <= new Date()) {
      yield put(actions.logout());
    } else {
      const customerId = yield localStorage.getItem("customerId");
      yield put(actions.authSuccess(token, customerId));
      yield put(
        actions.checkAuthTimeout(
          (expirationDate.getTime() - new Date().getTime()) / 1000
        )
      );
    }
  }
}
