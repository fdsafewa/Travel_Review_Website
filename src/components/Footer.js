import React from 'react';
import { Link } from 'react-router-dom'; // if you are using react-router for navigation

const Footer =() => {
    return(
      <div>
       {/* footer */}
       <footer style={{backgroundImage: "url('pic/footer/footer-bg.jpg')"}} className="footer">
  <div className="container">
    <div className="row pb-100 pb-md-40">
      {/* widget footer */}
      <div className="col-md-6 col-sm-12 mb-sm-30">
        <div className="logo-soc clearfix">
          <div className="footer-logo"><a href="index.html"><img src="img/logo-white.png" data-at2x="img/logo-white@2x.png" alt="" /></a></div>
        </div>
        <p className="color-g2 mt-10">Vestibulum tincidunt venenatis scelerisque. Proin quis enim lacinia, vehicula massa et, mollis urna. Proin nibh mauris, blandit vitae convallis at, tincidunt vel tellus. Praesent posuere nec lectus non.</p>
        {/* social */}
        <div className="social-link dark"><a href="#" className="cws-social fa fa-twitter"></a><a href="#" className="cws-social fa fa-facebook"></a><a href="#" className="cws-social fa fa-google-plus"></a><a href="#" className="cws-social fa fa-linkedin"></a></div>
        {/* ! social */}
      </div>
      {/* ! widget footer */}
      {/* widget footer */}
      <div className="col-md-3 col-sm-6 mb-sm-30">
        <div className="widget-footer">
          <h4>Latest Tweets</h4>
          <div className="twitter-footer align-left"></div>
        </div>
      </div>
      {/* end widget footer */}
      {/* widget footer */}
      <div className="col-md-3 col-sm-6">
        <div className="widget-footer">
          <h4>Tag cloud</h4>
          <div className="widget-tags-wrap"><a href="#" rel="tag" className="tag">Adventure</a><a href="#" rel="tag" className="tag">Romantic</a><a href="#" rel="tag" className="tag">Wildlife</a><a href="#" rel="tag" className="tag">Beach</a><a href="#" rel="tag" className="tag">Honeymoon</a><a href="#" rel="tag" className="tag">Island</a><a href="#" rel="tag" className="tag">Parks</a><a href="#" rel="tag" className="tag">Family</a><a href="#" rel="tag" className="tag">Travel</a></div>
        </div>
      </div>
      {/* end widget footer */}
    </div>
  </div>
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