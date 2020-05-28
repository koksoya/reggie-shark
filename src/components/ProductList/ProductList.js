import React, { useContext } from "react";

import Title from "../Title/Title";
import Product from "../Product/Product";
import { ProductContext } from "../../context/product-context";

const ProductList = () => {
  const productContext = useContext(ProductContext);

  return (
    <React.Fragment>
      <div className="py-5">
        <div className="container">
          <Title name="our" title="products" />
          <div className="row">
            {productContext.products.map(product => (
              <Product
                key={product.id}
                product={product}
                handleDetail={productContext.handleDetail}
                addToCart={productContext.addToCart}
              />
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductList;
