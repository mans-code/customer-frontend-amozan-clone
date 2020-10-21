import React from "react";
import Button from "../../../../../UI/Button/Button";
import "./Payment.css";


function Payment({nextStep}) {
  return (
    <div className="payment">
      <h2 className="payment__title">Complete Your Order With Payment</h2>
      <Button btnType="success" onClick={nextStep}>Pay</Button>
    </div>
  );
}

export default Payment;
