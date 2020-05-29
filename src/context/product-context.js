import React, { useState, useEffect } from "react";

import { storeProducts, detailProduct } from "../data";

export const ProductContext = React.createContext();

export default props => {
  const [productList, setProductList] = useState([]);
  const [dtlProduct, setDtlProduct] = useState(detailProduct);
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState(detailProduct);

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

  return (
    <ProductContext.Provider
      value={{
        products: productList,
        detailProduct: dtlProduct,
        modalProduct: modalProduct,
        cart: cart,
        isModalOpen: isModalOpen,
        handleDetail: handleDetail,
        addToCart: addToCart,
        openModal: openModal,
        closeModal: closeModal
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};
