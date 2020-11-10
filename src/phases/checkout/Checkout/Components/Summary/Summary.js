import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Spinner from "../../../../../UI/Spinner/Spinner";
import Button from "../../../../../UI/Button/Button";
import { initPurchaseCart } from "../../../store/action/actions";
import { connect } from "react-redux";
import Order from "../../../../orders/Orders/Components/Order/Order";
import "./Summary.css";

const getDate = () => {
  const d = new Date();
  const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
  const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
  const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
  return `${da}-${mo}-${ye}`;
}

function Summary({ loading, onCheckoutComplet, basket }) {
  useEffect(() => {
    onCheckoutComplet();
  }, [onCheckoutComplet]);


  const history = useHistory();

  if (loading) {
    return <Spinner />;
  }

  const order = {
    id: "74425sDExM2",
    date: getDate(),
    basket
  };

  return (
    <div className="summary">
      <h2 className="summary__title">Your Order is Completed</h2>
      <p>We recieved your order and we will send you a confirmation email</p>
      <Order order={order} />
      <div className="summary__button">
        <Button onClick={() => history.replace("/")} btnType="success">
          CONFIRM
        </Button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.checkout.purchaseLoading,
    basket: state.cart.basket,
    order: state.order.orders[0],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCheckoutComplet: () => dispatch(initPurchaseCart()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Summary);
