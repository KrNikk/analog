import React from "react";
import logo from "../images/logo.png";

const Header = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", height: "10rem" }}>
      <a href="/">
        <img src={logo} alt="analog-space-logo" />
      </a>
    </div>
  ); 
};

export default Header;
