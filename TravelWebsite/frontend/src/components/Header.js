import React, { useContext } from "react";
import "./Header.css";
import log from "../image/logo2.png";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Header = () => {
  const { auth, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
    window.location.reload();
  };

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
            {auth.isAuthenticated ? (
              <Link onClick={handleLogout} className="menuItem">Logout</Link>
            ) : (
              <Link to="/login" className="menuItem">Login</Link>
            )}
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;