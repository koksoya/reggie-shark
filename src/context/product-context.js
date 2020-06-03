import React, { useState, useEffect } from "react";

import { storeProducts, detailProduct } from "../data";

export const ProductContext = React.createContext();

export default props => {
  const [productList, setProductList] = useState([]);
  const [dtlProduct, setDtlProduct] = useState(detailProduct);
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState(detailProduct);
  const [cartSubtotal, setCartSubtotal] = useState(0);
  const [cartTax, setCartTax] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach(item => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    });
    setProductList(tempProducts);
  };

  useEffect(() => {
    setProducts();
  }, []);

  useEffect(() => {
    addTotals(cart);
  }, [cart]);

  const getItem = id => {
    return productList.find(item => item.id === id);
  };

  const handleDetail = id => {
    const product = getItem(id);
    setDtlProduct(product);
  };

  const addToCart = id => {
    let updatedProducts = [...productList];
    const index = updatedProducts.indexOf(getItem(id));
    const product = updatedProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    setCart(prevCart => [...prevCart, product]);
    setProductList(updatedProducts);
  };

  const openModal = id => {
    const product = getItem(id);
    setModalProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const increment = id => {
    let tempCart = [...cart];
    const index = tempCart.indexOf(getItem(id));
    const product = tempCart[index];
    product.count += 1;
    product.total += product.price;
    setCart(tempCart);
  };

  const decrement = id => {
    let tempCart = [...cart];
    const index = tempCart.indexOf(getItem(id));
    const product = tempCart[index];
    product.count -= 1;
    if (product.count === 0) {
      removeItem(id);
    } else {
      product.total -= product.price;
      setCart(tempCart);
    }
  };

  const removeItem = id => {
    let tempProducts = [...productList];
    let tempCart = [...cart];
    tempCart = tempCart.filter(item => item.id !== id);

    const index = tempProducts.indexOf(getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;
    setProductList(tempProducts);
    setCart(tempCart);
  };

  const clearCart = () => {
    setCart(prevCart => {
      setProducts();
      return [];
    });
  };

  const addTotals = crt => {
    let subtotal = 0;
    crt.map(item => (subtotal += item.total));
    const tempTax = subtotal * 0.13;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subtotal + tax;
    setCartSubtotal(subtotal);
    setCartTax(tax);
    setCartTotal(total);
  };

  return (
    <ProductContext.Provider
      value={{
        products: productList,
        detailProduct: dtlProduct,
        modalProduct: modalProduct,
        cart: cart,
        cartSubtotal: cartSubtotal,
        cartTax: cartTax,
        cartTotal: cartTotal,
        isModalOpen: isModalOpen,
        handleDetail: handleDetail,
        addToCart: addToCart,
        openModal: openModal,
        closeModal: closeModal,
        increment: increment,
        decrement: decrement,
        removeItem: removeItem,
        clearCart: clearCart
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};
