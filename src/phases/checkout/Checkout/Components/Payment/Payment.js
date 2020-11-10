import React, { useState } from "react";
import { connect } from "react-redux";
import { useElements, useStripe, CardElement } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import Button from "../../../../../UI/Button/Button";
import { setStripeCustomerToken } from "../../../store/action/actions";
import "./Payment.css";

function Payment({ nextStep, amount, onPaymentSubmit }) {
  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setDisabled(true);

    const card = elements.getElement(CardElement);
    const { token, error } = await stripe.createToken(card);

    if (error) {
      setError(error.message);

      return;
    }

    onPaymentSubmit(token);
    nextStep();
  };

  const handleChange = (event) => {
    const isVaildCard = event.complete && !event.error;
    setDisabled(!isVaildCard);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="payment">
      <h2 className="payment__title">Complete Your Order With Payment</h2>
      <div className="payment__details">
        <form className="form" onSubmit={handleSubmit}>
          {error && <div className="payment__error">{error}</div>}
          <CardElement onChange={handleChange} />
          <div className="payment__priceContainer">
            <CurrencyFormat
              decimalScale={2}
              value={amount}
              displayType={"text"}
              thousandSeparato={true}
              prefix={"$"}
              renderText={(val) => <h3>Order Total: {val}</h3>}
            />

            {/* <button disabled={processing || disabled || succeeded}>
            <span>{processing ? <p>Processing</p> : "Bay Now"}</span>
          </button> */}
          </div>

          <div className="payment__button">
            <Button btnType="success" disabled={disabled}>
              "Bay Now"
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    amount: state.cart.totalPrice,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onPaymentSubmit: (token) => dispatch(setStripeCustomerToken(token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Payment);
