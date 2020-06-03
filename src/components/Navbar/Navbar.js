import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import Button from "../Button/Button";
import logo from "../../logo.png"

const Navbar = () => {
  return (
    <NavWrapper
      className="navbar navbar-expand-sm 
      navbar-dark px-sm-5"
    >
      <Link to="/">
        <img src={logo} style={{ width: "5rem", height: "5rem" }} alt="socks logo" className="navbar-brand" />
      </Link>
      <ul className="navbar-nav align-items-center">
        <li className="nav-item ml-5">
          <Link to="/" className="nav-link">
            products
          </Link>
        </li>
      </ul>
      <Link to="/cart" className="ml-auto">
        <Button>
          <span className="mr-2">
            <i className="fas fa-cart-plus" />
          </span>
          my cart
        </Button>
      </Link>
    </NavWrapper>
  );
};

const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;

export default Navbar;
