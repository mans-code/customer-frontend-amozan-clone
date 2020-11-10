import React, { Component } from "react";
import Spinner from "../../../UI/Spinner/Spinner";
import CheckoutNav from "./Components/Nav/CheckoutNav";
import { connect } from "react-redux";
import * as actions from "../store/action/actions";
import { setCart } from "../../cart/store/action/actions";
import Address from "./Components/Address/Address";
import Review from "./Components/Review/Review";
import Payment from "./Components/Payment/Payment";
import Summary from "./Components/Summary/Summary";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import "./Checkout.css";

class Checkout extends Component {
  
  stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

  handleNextStep = () => {
    this.setState((prevState) => {
      return { currentStep: prevState.currentStep.next };
    });
  };

  summary = {
    value: 3,
    next: null,
    component: <Summary nextStep={this.handleNextStep} />,
  };

  payment = {
    value: 2,
    next: this.summary,
    component: (
      <Elements stripe={this.stripePromise}>
        <Payment nextStep={this.handleNextStep} />
      </Elements>
    ),
  };

  review = {
    value: 1,
    next: this.payment,
    component: <Review nextStep={this.handleNextStep} />,
  };
  address = {
    value: 0,
    next: this.review,
    component: <Address nextStep={this.handleNextStep} />,
  };

  state = { currentStep: this.address };

  componentDidMount() {
    this.props.onCheckoutInit();
  }

  componentWillUnmount() {
    if (this.props.purchasing) {
      this.props.onCheckoutCanceled();
    } else {
      this.props.onCheckoutConfirmed();
    }
  }

  render() {
    if (this.props.loading) {
      return <Spinner />;
    }
    const currentStep = this.state.currentStep;
    return (
      <div className="checkout">
        <CheckoutNav stepNum={currentStep.value} />
        {currentStep.component}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.checkout.checkoutLoading,
    purchasing: state.checkout.purchasing,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCheckoutInit: () => {
      dispatch(actions.initCheckout());
      dispatch(actions.fetchShippingAddresses());
    },
    onCheckoutCanceled: () => dispatch(actions.checkoutCanceled()),
    onCheckoutConfirmed: () =>
      dispatch(
        setCart({
          cart: [],
          totalPrice: 0,
          numOfItems: 0,
          currency: "$",
        })
      ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
