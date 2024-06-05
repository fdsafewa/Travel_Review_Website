import React from "react";
import "./Header.css"
import log from './image/logo2.png';

const Header = () => {
    return(
        <header className="header">
            <div className="headerContainer">
            <div className="logo">
                <img src={log} alt="" />
            </div>
            <ul className="menuItems">
                <li className="menuItem">Review</li>
                <li className="menuItem">Community</li>
                <li className="menuItem">More</li>
            </ul>
            </div>
        </header>
    )
}

export default Header;
