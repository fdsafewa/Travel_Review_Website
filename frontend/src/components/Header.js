import React,{ useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom'; // if you are using react-router for navigation

const Header = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.name) {
      setUsername(user.name); // or user.username if you store the username
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUsername('');
    navigate('/login');
  };

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
                </div><span>/</span>
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
             
                <div className="curr-wrap dropdown">
                  <div>
                    <ul>
                      <li>
                        <a href="#" className="lang-sel icl-en"> 
                  {username ? (
                    <>
                      <span>Hi, {username}</span>
                    
                    </>
                  ) : (
                    <Link to="/login">My Account</Link>
                  )}
               <i className="fa fa-angle-down"></i></a>
                        <ul>
                          <li><Link to="/Profile">Profile</Link></li>
                          <li> <a href="#" onClick={handleLogout} className="lang-sel icl-en">Logout</a></li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
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
            <Link to="/" className="logo">
              <img src="img/logo.png" data-at2x="img/logo@2x.png" alt="logo" />
            </Link>
          </div>
          {/* Main Menu */}
          <div className="inner-nav desktop-nav">
            <ul className="clearlist">
              {/* Item With Sub */}
              <li><Link to="/" className="mn-has-sub active">Home <i className="fa fa-angle-down button_open"></i></Link>
                <ul className="mn-sub">
                  <li className="active"><Link to="/">Standart Slider</Link></li>
                  <li><Link to="/index-search">Main Search</Link></li>
                  <li><Link to="/index-slider">Full Slider</Link></li>
                  <li><Link to="/index-video">Video Slider</Link></li>
                </ul>
              </li>
              {/* End Item With Sub */}
              <li className="slash">/</li>
              {/* Item With Sub */}
              <li><Link to="/hotels-search" className="mn-has-sub">Hotels <i className="fa fa-angle-down button_open"></i></Link>
                {/* Sub */}
                <ul className="mn-sub">
                  <li><Link to="/hotels-list">Hotels list</Link></li>
                  <li><Link to="/hotels-search">Hotels search</Link></li>
                  <li><Link to="/hotels-details">Hotels details</Link></li>
                </ul>
                {/* End Sub */}
              </li>
              {/* End Item With Sub */}
              <li className="slash">/</li>
              {/* Item With Sub */}
              <li className="megamenu"><Link to="/page-about-us" className="mn-has-sub">Pages <i className="fa fa-angle-down button_open"></i></Link>
                {/* Sub */}
                <ul className="mn-sub mn-has-multi">
                  <li className="mn-sub-multi"><a className="mn-group-title">Pages</a>
                    <ul>
                      <li><Link to="/page-about-us">About Us</Link></li>
                      <li><Link to="/page-services">Services</Link></li>
                      <li><Link to="/page-procces">Our Procces</Link></li>
                      <li><Link to="/page-our-team">Our Team</Link></li>
                      <li><Link to="/page-profile">Profile</Link></li>
                      <li><Link to="/page-elements">Elements</Link></li>
                    </ul>
                  </li>
                  <li className="mn-sub-multi"><a className="mn-group-title">Portfolio</a>
                    <ul>
                      <li><Link to="/portfolio-3-col">Three Columns</Link></li>
                      <li><Link to="/portfolio-4-col">Four Columns</Link></li>
                      <li><Link to="/portfolio-masonry">Portfolio Masonry</Link></li>
                      <li><Link to="/portfolio-with-sidebar">With Sidebar</Link></li>
                      <li><Link to="/portfolio-gallery">Gallery</Link></li>
                      <li><Link to="/page-portfolio-single">Portfolio Single</Link></li>
                    </ul>
                  </li>
                  <li className="mn-sub-multi"><a className="mn-group-title">Blog</a>
                    <ul>
                      <li><Link to="/blog-2-col-sidebar">Two Columns + Sidebar</Link></li>
                      <li><Link to="/blog-3-col">Three Columns</Link></li>
                      <li><Link to="/blog-4-col">Four Columns</Link></li>
                      <li><Link to="/blog-single">Blog Single</Link></li>
                      <li><Link to="/blog-grid">Blog Grid</Link></li>
                      <li><Link to="/blog-list">Blog List</Link></li>
                    </ul>
                  </li>
                </ul>
                {/* End Sub */}
              </li>
              {/* End Item With Sub */}
              <li className="slash">/</li>
              {/* Item With Sub */}
              <li><Link to="/shop-grid" className="mn-has-sub">Shop <i className="fa fa-angle-down button_open"></i></Link>
                {/* Sub */}
                <ul className="mn-sub">
                  <li><Link to="/shop-grid">Shop Grid</Link></li>
                  <li><Link to="/shop-cart">Shop Cart</Link></li>
                  <li><Link to="/shop-checkout">Shop Checkout</Link></li>
                  <li><Link to="/shop-single">Shop Single Product</Link></li>
                </ul>
                {/* End Sub */}
              </li>
              {/* End Item With Sub */}
              <li className="slash">/</li>
              {/* Item */}
              <li><Link to="/page-contact">Contact</Link></li>
              {/* End Item */}
              {/* Search */}
              <li className="search"><a href="#" className="mn-has-sub">Search</a>
                <ul className="search-sub">
                  <li>
                    <div className="container">
                      <div className="mn-wrap">
                        <form method="post" className="form">
                          <div className="search-wrap">
                            <input type="text" placeholder="Where will you go next?" className="form-control search-field" /><i className="flaticon-suntour-search search-icon"></i>
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
