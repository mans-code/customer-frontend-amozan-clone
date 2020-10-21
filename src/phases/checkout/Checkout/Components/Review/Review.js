import React from "react";
import { connect } from "react-redux";
import Product from "../../../../../shared/Componets/Product/Product";
import Button from "../../../../../UI/Button/Button";
import "./Review.css";

function Review({ basket, nextStep }) {
  return (
    <div className="review">
      <h2 className="review__title">Your Order</h2>
      <div className="review__cart">
        {basket.map((item, i) => (
          <Product
            key={i}
            sku={item.sku}
            variationId={item.variationId}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
            quantity={item.quantity}
            checkout
          />
        ))}
      </div>

      <div className="review__confirm">
        <Button onClick={nextStep} btnType="success">
          CONFIRM
        </Button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    basket: state.cart.basket,
  };
};

export default connect(mapStateToProps)(Review);
