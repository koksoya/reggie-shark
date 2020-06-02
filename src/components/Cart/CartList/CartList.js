import React, { useContext } from "react";

import CartItem from "../CartItem/CartItem";
import { ProductContext } from "../../../context/product-context";

const CartList = props => {
  const cart = useContext(ProductContext).cart;
  return (
    <div className="container-fluid">
      {cart.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default CartList;
