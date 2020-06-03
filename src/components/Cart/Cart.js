import React, { useContext } from "react";

import { ProductContext } from "./../../context/product-context";
import Title from "../Title/Title";
import CartColumns from "./CartColumns/CartColumns";
import EmptyCart from "./EmptyCart.js/EmptyCart";
import CartList from "./CartList/CartList";
import CartTotals from "./CartTotals/CartTotals";

const Cart = (props) => {
  const cart = useContext(ProductContext).cart;

  const returnCart =
    cart.length > 0 ? (
      <React.Fragment>
        <Title name="your" title="cart" />
        <CartColumns />
        <CartList />
        <CartTotals history={props.history}/>
      </React.Fragment>
    ) : (
      <EmptyCart />
    );

  return <section>{returnCart}</section>;
};

export default Cart;
