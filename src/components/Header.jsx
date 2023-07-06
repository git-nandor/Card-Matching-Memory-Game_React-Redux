import React from "react";
import Logo from "../images/company-logo.png";
import { LOGO_ALT } from "./strings";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={Logo} alt={LOGO_ALT} />
      </div>
    </div>
  );
};
export default Header;
