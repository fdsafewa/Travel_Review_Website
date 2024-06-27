import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      {/* site top panel */}
      <div className="site-top-panel">
        <div className="container p-relative">
          <div className="row">
            <div className="col-md-6 col-sm-7">
              {/* lang select wrapper */}
              <div className="top-left-wrap font-3">
                <div className="mail-top">
                  <a href="mailto:support.suntour@example.com">
                    <i className="flaticon-suntour-email"></i>suntour@example.com
                  </a>
                </div>
                <span>/</span>
                <div className="tel-top">
                  <a href="tel:(723)-700-1183">
                    <i className="flaticon-suntour-phone"></i>(723)-700-1183
                  </a>
                </div>
              </div>
              {/* ! lang select wrapper */}
            </div>
            <div className="col-md-6 col-sm-5 text-right">
              <div className="top-right-wrap">
                <div className="top-login"><a href="#">My Account</a></div>
                <div className="curr-wrap dropdown">
                  <div>
                    <ul>
                      <li>
                        <a href="#" className="lang-sel icl-en">Currency<i className="fa fa-angle-down"></i></a>
                        <ul>
                          <li><a href="#">USD</a></li>
                          <li><a href="#">EUR</a></li>
                          <li><a href="#">GBP</a></li>
                          <li><a href="#">AUD</a></li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="lang-wrap dropdown">
                  <div>
                    <ul>
                      <li>
                        <a href="#" className="lang-sel icl-en">Language <i className="fa fa-angle-down"></i></a>
                        <ul>
                          <li><a href="#">English</a></li>
                          <li><a href="#">Deutsch</a></li>
                          <li><a href="#">Espanol</a></li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ! site top panel */}
      {/* Navigation panel */}
      <nav className="main-nav js-stick">
        <div className="full-wrapper relative clearfix container">
          {/* Logo ( * your text or image into link tag *) */}
          <div className="nav-logo-wrap local-scroll">
            <a href="/" className="logo">
              <img src="img/logo.png" data-at2x="img/logo@2x.png" alt="logo" />
            </a>
          </div>
          {/* Main Menu */}
          <div className="inner-nav desktop-nav">
            <ul className="clearlist">
              {/* Item With Sub */}
              <li>
                <NavLink to="/" className={({ isActive }) => isActive ? "mn-has-sub active" : "mn-has-sub"}>
                  Home <i className="fa fa-angle-down button_open"></i>
                </NavLink>
                <ul className="mn-sub">
                  <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Standard Slider</NavLink></li>
                  <li><NavLink to="/index-search">Main Search</NavLink></li>
                  <li><NavLink to="/index-slider">Full Slider</NavLink></li>
                  <li><NavLink to="/index-video">Video Slider</NavLink></li>
                </ul>
              </li>
              {/* End Item With Sub */}
              <li className="slash">/</li>
              {/* Item With Sub */}
              <li>
                <NavLink to="/placelist" className={({ isActive }) => isActive ? "mn-has-sub active" : "mn-has-sub"}>
                  Places <i className="fa fa-angle-down button_open"></i>
                </NavLink>
                {/* Sub */}
                <ul className="mn-sub">
                  <li><a href="/placelist" className={({ isActive }) => isActive ? "mn-has-sub active" : "mn-has-sub"}>Places list</a></li>
                  <li><a href="/PlaceDetails/666d40519fd22893e8dae2f2" className={({ isActive }) => isActive ? "mn-has-sub active" : "mn-has-sub"}>Places details</a></li>
                </ul>
                {/* End Sub */}
              </li>
              {/* End Item With Sub */}
              <li className="slash">/</li>
              {/* Item With Sub */}
              <li className="megamenu">
                <NavLink to="/page-about-us" className={({ isActive }) => isActive ? "mn-has-sub active" : "mn-has-sub"}>
                  Pages <i className="fa fa-angle-down button_open"></i>
                </NavLink>
                {/* Sub */}
                <ul className="mn-sub mn-has-multi">
                  <li className="mn-sub-multi"><a className="mn-group-title">Pages</a>
                    <ul>
                      <li><NavLink to="/page-about-us">About Us</NavLink></li>
                      <li><NavLink to="/page-services">Services</NavLink></li>
                      <li><NavLink to="/page-process">Our Process</NavLink></li>
                      <li><NavLink to="/page-our-team">Our Team</NavLink></li>
                      <li><NavLink to="/page-profile">Profile</NavLink></li>
                      <li><NavLink to="/page-elements">Elements</NavLink></li>
                    </ul>
                  </li>
                  <li className="mn-sub-multi"><a className="mn-group-title">Portfolio</a>
                    <ul>
                      <li><NavLink to="/portfolio-3-col">Three Columns</NavLink></li>
                      <li><NavLink to="/portfolio-4-col">Four Columns</NavLink></li>
                      <li><NavLink to="/portfolio-masonry">Portfolio Masonry</NavLink></li>
                      <li><NavLink to="/portfolio-with-sidebar">With Sidebar</NavLink></li>
                      <li><NavLink to="/portfolio-gallery">Gallery</NavLink></li>
                      <li><NavLink to="/page-portfolio-single">Portfolio Single</NavLink></li>
                    </ul>
                  </li>
                  <li className="mn-sub-multi"><a className="mn-group-title">Blog</a>
                    <ul>
                      <li><NavLink to="/blog-2-col-sidebar">Two Columns + Sidebar</NavLink></li>
                      <li><NavLink to="/blog-3-col">Three Columns</NavLink></li>
                      <li><NavLink to="/blog-4-col">Four Columns</NavLink></li>
                      <li><NavLink to="/blog-single">Blog Single</NavLink></li>
                      <li><NavLink to="/blog-grid">Blog Grid</NavLink></li>
                      <li><NavLink to="/blog-list">Blog List</NavLink></li>
                    </ul>
                  </li>
                </ul>
                {/* End Sub */}
              </li>
              {/* End Item With Sub */}
              <li className="slash">/</li>
              {/* Item With Sub */}
              <li>
                <NavLink to="/shop-grid" className={({ isActive }) => isActive ? "mn-has-sub active" : "mn-has-sub"}>
                  Shop <i className="fa fa-angle-down button_open"></i>
                </NavLink>
                {/* Sub */}
                <ul className="mn-sub">
                  <li><NavLink to="/shop-grid">Shop Grid</NavLink></li>
                  <li><NavLink to="/shop-cart">Shop Cart</NavLink></li>
                  <li><NavLink to="/shop-checkout">Shop Checkout</NavLink></li>
                  <li><NavLink to="/shop-single">Shop Single Product</NavLink></li>
                </ul>
                {/* End Sub */}
              </li>
              {/* End Item With Sub */}
              <li className="slash">/</li>
              {/* Item */}
              <li><NavLink to="/page-contact">Contact</NavLink></li>
              {/* End Item */}
              {/* Search */}
              <li className="search"><a href="#" className="mn-has-sub">Search</a>
                <ul className="search-sub">
                  <li>
                    <div className="container">
                      <div className="mn-wrap">
                        <form method="post" className="form">
                          <div className="search-wrap">
                            <input type="text" placeholder="Where will you go next?" className="form-control search-field" />
                            <i className="flaticon-suntour-search search-icon"></i>
                          </div>
                        </form>
                      </div>
                      <div className="close-button"><span>Search</span></div>
                    </div>
                  </li>
                </ul>
              </li>
              {/* End Search */}
            </ul>
          </div>
          {/* End Main Menu */}
        </div>
      </nav>
      {/* End Navigation panel */}
    </header>
  );
};

export default Header;
