import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { ProductContext } from "../../context/product-context";
import styled from "styled-components";
import Button from "../Button/Button";

const Modal = () => {
  const { isModalOpen, closeModal, modalProduct } = useContext(ProductContext);
  const { title, img, price } = modalProduct;

  return (
    <div>
      {!isModalOpen ? null : (
        <ModalContainer>
          <div className="container">
            <div className="row">
              <div
                id="modal"
                className="col-8 mx-auto col-md-6 col-lg-4 
                text-center text-capitalize p-5"
              >
                <h5>item added to the cart</h5>
                <img src={img} alt="product" className="img-fluid" />
                <h5>{title}</h5>
                <h5 className="text-muted">price : $ {price}</h5>
                <Link to="/">
                  <Button onClick={() => closeModal()}>
                    continue shopping
                  </Button>
                </Link>
                <Link to="/cart">
                  <Button cart onClick={() => closeModal()}>
                    go to cart
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </ModalContainer>
      )}
    </div>
  );
};

export default Modal;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: var(--mainWhite);
  }
`;
