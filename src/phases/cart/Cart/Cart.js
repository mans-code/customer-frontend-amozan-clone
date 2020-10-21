import React from "react";
import { connect } from "react-redux";
import Aux from "../../../hoc/Aux/Aux";
import Product from "../../../shared/Componets/Product/Product";
import Subtotal from "./Components/SubTotal/SubTotal";

import "./Cart.css";

function Cart({ basket }) {
  const emptyBasket = basket?.length === 0;
  return (
    <Aux>
      <div className="cart">
        <div className="cart__left">
          <img
            className="cart__ad"
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            alt=""
          />
          {emptyBasket ? (
            <div>
              <h2>Your Shopping Basket is empty</h2>
              <p>
                You have no items in your basket. To buy one or more items,
                Click "Add to basket" next to the item.
              </p>
            </div>
          ) : (
            <div>
              <h2 className="cart__title">Your Shopping Basket</h2>
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
          )}
        </div>

        <div className="cart__right">
          <Subtotal proceed={!emptyBasket} />
        </div>
      </div>
    </Aux>
  );
}

const mapStateToProps = (state) => {
  return {
    basket: state.cart.basket,
    purchased: state.order.purchased,
  };
};

export default connect(mapStateToProps)(Cart);
