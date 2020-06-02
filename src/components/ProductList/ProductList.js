import React, { useContext } from "react";

import Title from "../Title/Title";
import Product from "../Product/Product";
import { ProductContext } from "../../context/product-context";

const ProductList = () => {
  const products = useContext(ProductContext).products;

  return (
    <React.Fragment>
      <div className="py-5">
        <div className="container">
          <Title name="our" title="products" />
          <div className="row">
            {products.map(product => (
              <Product
                key={product.id}
                product={product}
              />
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductList;
