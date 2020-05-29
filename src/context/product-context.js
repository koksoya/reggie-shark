import React, { useState, useEffect } from "react";

import { storeProducts, detailProduct } from "../data";

export const ProductContext = React.createContext({
  products: [],
  detailProduct: {},
  crt: []
});

export default props => {
  const [productList, setProductList] = useState([]);
  const [dtlProduct, setDtlProduct] = useState(detailProduct);
  const [cart, setCart] = useState([]);

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
    setCart(prevCart => ([...prevCart, product]));
    setProductList(updatedProducts);
  };

  return (
    <ProductContext.Provider
      value={{
        products: productList,
        detailProduct: dtlProduct,
        crt: cart,
        handleDetail: handleDetail,
        addToCart: addToCart
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};
