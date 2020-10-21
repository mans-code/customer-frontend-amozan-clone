import React from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import CurrencyFormat from "react-currency-format";
import {setAuthRedirectPath} from "../../../../auth/store/action/actions";

import "./SubTotal.css";

function SubTotal({ numOfItems, totalPrice, onSetAuthRedirectPath, isAuthenticated, proceed }) {
  const history = useHistory();
  
  const checkoutHandler = () => {
    if (isAuthenticated) {
      history.push('/checkout');
    } else {
        onSetAuthRedirectPath('/checkout');
        history.push('/auth');
    }
  } 

  return (
    <div className="subtotal">
      <CurrencyFormat
        decimalScale={2}
        value={totalPrice}
        displayType={"text"}
        thousandSeparato={true}
        prefix={"$"}
        renderText={(val) => (
          <>
            <p>
              Subtotal({numOfItems} items): <strong>{val}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order is a gift
            </small>
          </>
        )}
      />

      <button onClick={checkoutHandler} disabled={!proceed}>
        Proceed to Checkout
      </button>

    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    totalPrice: state.cart.totalPrice,
    numOfItems: state.cart.numOfItems,
    isAuthenticated: state.auth.token !== null,
  };
};

const mapDispatchToProps = dispatch => {
  return {
      onSetAuthRedirectPath: (path) => dispatch(setAuthRedirectPath(path)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubTotal);
