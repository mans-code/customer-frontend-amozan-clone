import React from 'react';
import CurrencyFormat from "react-currency-format";
import Product from "../../../../../shared/Componets/Product/Product"
import './Order.css';

function Order({ order }) {
    return (
      <div className="order">
        <h2>Order</h2>
        <p>{
        //moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")
        }</p>
        <p className="order__id">
          <small>{order.id}</small>
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
          renderText={(val) => <h3>Order Total: {val}</h3>}
        />
      </div>
    );
  }
  export default Order;