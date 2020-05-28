import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { ProductContext } from "../../context/product-context";
import Button from "../Button/Button";

const Details = () => {
  const productContext = useContext(ProductContext);
  const {
    id,
    company,
    title,
    img,
    info,
    price,
    inCart
  } = productContext.detailProduct;
  const { addToCart, handleDetail } = productContext;

  return (
    <div className="container py-5">
      {/* title */}
      <div className="row">
        <div className="col-10 mx-auto text-center text-slanted text-blue my-5 ">
          <h1>{title}</h1>
        </div>
      </div>
      {/* end title */}
      {/* product info  */}
      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3">
          <img src={img} className="img-fluid" alt="product" />
        </div>
        {/* product text  */}
        <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
          <h2>model: {title}</h2>
          <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
            made by : <span className="text-uppercase">{company}</span>
          </h4>
          <h4 className="text-blue">
            <strong>
              price : <span>$</span>
              {price}
            </strong>
          </h4>
          <p className="text-capitalize font-weight-bold mt-3 mb-0">
            some info about the product:
          </p>
          <p className="text-muted lead">{info}</p>
          {/* buttons */}
          <div>
            <Link to="/">
              <Button>back to products</Button>
            </Link>
            <Button
              cart={inCart}
              disabled={inCart ? true : false}
              onClick={() => addToCart(id)}
            >
              {inCart ? "inCart" : "add to cart"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
