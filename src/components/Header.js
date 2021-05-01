import React from "react";
import styled from "@emotion/styled";
import icon from "../assets/pokeball.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Nav>
      <Link to="/">
        <h3>Pokemon</h3>
      </Link>
      <Link to="/my-pokemon">
        <Icon src={icon} alt="pokeball" />
      </Link>
    </Nav>
  );
};

const Nav = styled.nav({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  height: "60px",
  backgroundColor: "#FDFD96",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 16px",
});

const Icon = styled.img({
  width: 22,
  height: 22,
  marginTop: 4,
});

export default Header;
