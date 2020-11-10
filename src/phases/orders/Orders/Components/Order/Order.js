import React from 'react';
import CurrencyFormat from "react-currency-format";
import Product from "../../../../../shared/Componets/Product/Product"
import './Order.css';

function Order({ order }) {
    return (
      <div className="order">
        <h4>Order Number: <span className="order__id"> {order.id}</span></h4>
        <p>
          {order.date}
        </p>
  
        {order.basket?.map((item, i) => (
          <Product
            key={i}
            sku={item.sku}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
            checkout
            hideButton={true}
          />
        ))}
  
        <CurrencyFormat
          decimalScale={2}
          value={order.totalPrice}
          displayType={"text"}
          thousandSeparato={true}
          prefix={"$"}
          renderText={(val) => <h3 className="order__total">Order Total: {val}</h3>}
        />
      </div>
    );
  }
  export default Order;