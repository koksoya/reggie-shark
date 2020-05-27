import React, { useState } from "react";

import Product from "../Product/Product";
import Title from "../Title/Title";
import { storeProducts } from "../../data";

const ProductList = props => {
  const [products, setProducts] = useState(storeProducts);

  return (
    <React.Fragment>
      <div className="py-5">
        <div className="container">
          <Title name="our" title="products" />
          <div className="row"></div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductList;
