import React from "react";
import { useMatch } from 'react-router-dom';
import GameOptions from "./GameOptions";
import Logo from "../images/company-logo.png";
import { LOGO_ALT, ROUTE_PATH_GAME } from "../strings";

const Header = () => {
  const isOnGamePage = useMatch(ROUTE_PATH_GAME);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={Logo} alt={LOGO_ALT} />
      </div>
      {isOnGamePage && (<GameOptions />)}
    </div>
  );
};
export default Header;
