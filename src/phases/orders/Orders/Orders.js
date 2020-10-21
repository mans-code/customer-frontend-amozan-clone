import React, { Component } from "react";
import { connect } from "react-redux";

import Order from "./Components/Order/Order"
import axios from "../../../shared/axios";
import withErrorHandler from "../../../hoc/withErrorHandler/withErrorHandler";
import * as actions from "../store/action/actions";
import Spinner from "../../../UI/Spinner/Spinner";

import "./Orders.css";

class Orders extends Component {
  componentDidMount() {
    //this.props.onFetchOrders(this.props.token, this.props.userId);
  }

  render() {
    let orders = null;
    orders = this.props.orders.map((order, i) => (
      <Order key={i} order={order} />
    ));

    if (!orders) {
      orders = <h3 >You have not Ordered Yet Hope You do Soon</h3>;
    }

    if (this.props.loading) {
      orders = <Spinner />;
    }

    return (
      <div className="orders">
        <h1>Your Orders</h1>
        <div>{orders}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    orders: state.order.orders,
    loading: state.order.loading,
    token: state.auth.token,
    userId: state.auth.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchOrders: (token, userId) =>
      dispatch(actions.fetchOrders(token, userId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(Orders, axios));
