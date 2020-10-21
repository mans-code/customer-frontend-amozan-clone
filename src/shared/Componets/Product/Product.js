import React, { useRef } from "react";
import { connect } from "react-redux";
import Button from "../../../UI/Button/Button";
import * as actions from "../../../phases/cart/store/action/actions";

const QTY_ADD = 1;
const QTY_REMOVE = -1;

const Product = ({
  sku,
  variationId,
  title,
  image,
  price,
  rating,
  quantity,
  onProductAdded,
  onProductRemoved,
  onQuantityChanged,
  checkout,
  hideButton,
}) => {
  const quantityRef = useRef();

  const css = checkout
    ? require("./CheckoutProduct.module.css")
    : require("./HomeProduct.module.css");

  const product = {
    sku,
    title,
    image,
    variationId,
    price,
    rating,
    quantity: quantity ? quantity : 1,
  };

  const onQtyChanged = (operation) => {
    const qty = Number(quantityRef.current.value) + operation;
    if (qty <= 1) {
      return;
    }
    onQuantityChanged({ ...product, quantity: qty });
  };

  const addProduct = () => {
    onProductAdded(product);
  };

  const removeProduct = () => {
    onProductRemoved(product);
  };

  let qty = (
    <div className={css.quantity}>
      <input
        onClick={() => onQtyChanged(QTY_REMOVE)}
        type="button"
        value="-"
        className={css.minus}
      />
      <input
        ref={quantityRef}
        type="number"
        step="1"
        min="1"
        name="quantity"
        value={quantity}
        onChange={(e) => {}}
        className={css.inputText}
      />
      <input
        type="button"
        onClick={() => onQtyChanged(QTY_ADD)}
        value="+"
        className={css.plus}
      />
    </div>
  );

  qty = hideButton ? (
    <p className="order__qty">
      <strong>2 </strong> Units
    </p>
  ) : (
    qty
  );

  qty = checkout ? qty : null;

  const button = (
    <Button
      btnType={checkout ? "cartRemove" : "cartAdd"}
      onClick={checkout ? removeProduct : addProduct}
    >
      {checkout ? "Remove from Cart" : "Add to Cart"}
    </Button>
  );

  const img = <img className={css.product__image} alt="OPPS" src={image} />;
  return (
    <div className={css.product}>
      {checkout ? img : null}
      <div className={css.product__info}>
        <p>{title}</p>

        <p className={css.product__price}>
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className={css.product__rating}>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span key={i} role="img" aria-label="*">
                🌟
              </span>
            ))}
        </div>
        {qty}
        {checkout && !hideButton ? button : null}
      </div>

      {checkout ? null : img}
      {checkout ? null : button}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onProductAdded: (product) => dispatch(actions.addProduct(product)),
    onProductRemoved: (product) => dispatch(actions.removeProduct(product)),
    onQuantityChanged: (product) =>
      dispatch(actions.changeProductQuantity(product)),
  };
};

export default connect(null, mapDispatchToProps)(Product);
