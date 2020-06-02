import React from "react";
import CartItem from "../CartItem/CartItem";

const CartList = props => {
  return (
    <div className="container-fluid">
      {props.value.cart.map(item => (
        <CartItem key={item.id} item={item} value={props.value} />
      ))}
    </div>
  );
};

export default CartList;
