import React from 'react';
import { Link } from 'react-router-dom'; // if you are using react-router for navigation

const Footer =() => {
    return(
      <div>
       {/* footer */}
       <footer>

  {/* copyright */}
  <div className="site-bottom-panel">
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <p>© Copyright 2016 <span>Suntour</span> &nbsp;&nbsp;|&nbsp;&nbsp; All Rights Reserved</p>
        </div>
        <div className="col-sm-6 text-right"><a href="index.html" className="footer-link">Home</a><a href="page-about-us.html" className="footer-link">Pages</a><a href="hotels-search.html" className="footer-link">Hotels</a><a href="blog-grid.html" className="footer-link">Blog</a><a href="shop-grid.html" className="footer-link">Shop</a><a href="page-contact.html" className="footer-link">Contacts</a></div>
      </div>
    </div>
  </div>
  {/* end copyright */}
  {/* scroll top */}
</footer>
</div>
    );
};

export default Footer;