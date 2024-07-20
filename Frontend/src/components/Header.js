import React,{ useState, useEffect } from 'react';
import { Link, useNavigate, NavLink, useLocation } from 'react-router-dom'; // if you are using react-router for navigation

const Header = () => {
  const [username, setUsername] = useState('');
  const [userRole, setUserRole] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    const role = localStorage.getItem('role');
    setUserRole(role);
    if (user && user.name) {
      setUsername(user.name); 
    }

  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('role'); // Remove the role from localStorage
    setUsername('');
    setUserRole(null); // Update the state to reflect logged out status
    navigate('/');
    window.location.reload();
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
                          <i className="fa fa-angle-down"></i>
                        </a>
                        <ul>
                          <li><a href="#">Profile</a></li>
                          <li> <a href="#" onClick={handleLogout} className="lang-sel icl-en">Logout</a></li>
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
              <img src="/img/logo.png" data-at2x="/img/logo@2x.png" alt="logo" />
            </a>
          </div>
          {/* Main Menu */}
          <div className="inner-nav desktop-nav">
            <ul className="clearlist">
              {/* Item With Sub */}
              <li>
                <a href="/" className={({ isActive }) => isActive ? "mn-has-sub active" : "mn-has-sub"}>
                  Home <i className="fa fa-angle-down button_open"></i>
                </a>
                <ul className="mn-sub">
                  <li><Link to="/" className={({ isActive }) => isActive ? "active" : ""}>Standard Slider</Link></li>
                  <li><NavLink to="/index-search">Main Search</NavLink></li>
                  <li><NavLink to="/index-slider">Full Slider</NavLink></li>
                  <li><NavLink to="/index-video">Video Slider</NavLink></li>
                </ul>
              </li>
              {/* End Item With Sub */}
              <li className="slash">/</li>
              {/* Item With Sub */}
              <li>
                <NavLink
                  to="/placelist"
                  className={() => {
                    const match = location.pathname.toLowerCase().includes("place");
                    return match ? "mn-has-sub active" : "mn-has-sub";
                  }}
                >
                  Places <i className="fa fa-angle-down button_open"></i>
                </NavLink>
                {/* Sub */}
                <ul className="mn-sub">
                  <li><a href="/placelist" className={({ isActive }) => isActive ? "mn-has-sub active" : "mn-has-sub"}>Places list</a></li>
                  <li><a href="/PlaceDetails/666d40519fd22893e8dae2f2" className={({ isActive }) => isActive ? "mn-has-sub active" : "mn-has-sub"}>Places details</a></li>
                  {userRole === '0' && (
                    <li>
                      <a href="/addplace" className={({ isActive }) => isActive ? "mn-has-sub active" : "mn-has-sub"}>
                        Add a Place
                      </a>
                    </li>
                  )}
                </ul>
                {/* End Sub */}
              </li>
              {/* End Item With Sub */}
              <li className="slash">/</li>
              {/* Item With Sub */}
              <li className="megamenu">
                <NavLink to="/community" className={({ isActive }) => isActive ? "mn-has-sub active" : "mn-has-sub"}>
                  Community <i className="fa fa-angle-down button_open"></i>
                </NavLink>
              </li>
              {/* End Item With Sub */}
              <li className="slash">/</li>
              {/* Item With Sub */}
              {username && (
                <li className="megamenu">
                  <NavLink to="/recommendationlist" className={({ isActive }) => isActive ? "mn-has-sub active" : "mn-has-sub"}>
                    Recommendations <i className="fa fa-angle-down button_open"></i>
                  </NavLink>
                </li>
              )}
              {/* End Item With Sub */}
              {/* Search */}
              <li className='search-nav'>
                <a href="/search" className="mn-has-sub">
                  Search
                </a>
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
