import React, { useState } from "react";

import { storeProducts, detailProduct } from "../data";

export const ProductContext = React.createContext({
  products: [],
  detailProduct: {}
});

export default props => {
  const [productList, setProductList] = useState(storeProducts);
  const [dtlProduct, setDtlProduct] = useState(detailProduct);

  const handleDetail = () => {
    console.log("hello from detail");
  };

  const addToCart = () => {
    console.log("hello from add to cart");
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
