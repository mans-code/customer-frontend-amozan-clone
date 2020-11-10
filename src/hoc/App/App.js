import React, { Component } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import asyncComponent from "../asyncComponent/asyncComponent";

import Layout from "../Layout/Layout";
import Home from "../../phases/home/Home/Home";
import Logout from "../../phases/auth/Logout/Logout";
import {authCheckState} from "../../phases/auth/store/action/actions";
import {initCart} from "../../phases/cart/store/action/actions";

const asyncCheckout = asyncComponent(() => {
  return import("../../phases/checkout/Checkout/Checkout");
});

const asyncOrders = asyncComponent(() => {
  return import("../../phases/orders/Orders/Orders");
});

const asyncAuth = asyncComponent(() => {
  return import("../../phases/auth/Auth/Auth");
});

const asyncCart = asyncComponent(() => {
  return import("../../phases/cart/Cart/Cart");
});

class App extends Component {
  componentDidMount() {
    this.props.onAppLoaded();
  }

  render() {
    let routes = (
      <Switch>
        <Route path="/auth" component={asyncAuth} />
        <Route path="/cart" component={asyncCart} />
        <Route path="/orders" component={asyncOrders} />
        <Route path="/" exact component={Home} />
        <Route path="/checkout" component={asyncCheckout} />
        <Redirect to="/" />
      </Switch>
    );

    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/checkout" component={asyncCheckout} />
          <Route path="/orders" component={asyncOrders} />
          <Route path="/logout" component={Logout} />
          <Route path="/auth" component={asyncAuth} />
          <Route path="/cart" component={asyncCart} />
          <Route path="/" exact component={Home} />
          <Redirect to="/" />
        </Switch>
      );
    }

    let app = <Layout>{routes}</Layout>;

    const isCheckout = this.props.location.pathname.includes("checkout");
    if (isCheckout) {
      app = routes;
    }

    return app;
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAppLoaded: () => {
      dispatch(authCheckState());
      dispatch(initCart());
    },
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
