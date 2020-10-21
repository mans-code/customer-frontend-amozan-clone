import React, { Component } from "react";
import Spinner from "../../../UI/Spinner/Spinner";
import StepWizard from 'react-step-wizard';
import StepsNav  from './Components/Steps/Steps';
import { connect } from "react-redux";
import * as actions from "../store/action/actions";
import Address from "./Components/Address/Address";
import Review from "./Components/Review/Review";
import Payment from "./Components/Payment/Payment";
import Summary from "./Components/Summary/Summary";

class Checkout extends Component {
  componentDidMount() {
    this.props.onCheckoutInit();
  }

  render() {
    if (this.props.loading) {
      return <Spinner />;
    }

    return (
      <StepWizard nav={<StepsNav />} isHashEnabled={true}>
        <Address hashKey={"address"} />
        <Review hashKey={"review"}/>
        <Payment hashKey={"payment"} />
        <Summary hashKey={"summary"}/>
      </StepWizard>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.checkout.initWating,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCheckoutInit: () => {
      dispatch(actions.initCheckout());
      dispatch(actions.fetchShippingAddresses());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
