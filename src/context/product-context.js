import React, { useState, useEffect } from "react";

import { storeProducts, detailProduct } from "../data";

export const ProductContext = React.createContext({
  products: [],
  detailProduct: {}
});

export default props => {
  const [productList, setProductList] = useState([]);
  const [dtlProduct, setDtlProduct] = useState(detailProduct);

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
    console.log(`hello from cart.id is ${id}`);
  };

  return (
    <ProductContext.Provider
      value={{
        products: productList,
        detailProduct: dtlProduct,
        handleDetail: handleDetail,
        addToCart: addToCart
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};
