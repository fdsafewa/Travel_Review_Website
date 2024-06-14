import React from "react";
import "./Header.css";
import log from "../image/logo2.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="headerContainer">
        <div className="logo">
          <Link to="/">
            <img src={log} alt="Logo" />
          </Link>
        </div>
        <ul className="menuItems">
          <li className="menuItem">Review</li>
          <li className="menuItem">
            <Link to="/places" className="menuItem">
              Community
            </Link>
          </li>
          <li className="menuItem">
            <Link to="/login" className="menuItem">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
