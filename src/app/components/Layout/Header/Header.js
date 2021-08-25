import React from "react";
import logo from "../../../../assets/pokefrav.png";
import "./styles.css";

function Header() {
  return (
    <div className="header">
      <img src={logo} className="responsive" alt="logo" />
    </div>
  );
}

export default Header;
