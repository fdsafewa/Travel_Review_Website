import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
      <div>
        {/* Header */}
        <header>
          <div className="site-top-panel">
            <div className="container p-relative">
              <div className="row">
                <div className="col-md-6 col-sm-7">
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
                </div>
                <div className="col-md-6 col-sm-5 text-right">
                  <div className="top-right-wrap">
                    <div className="top-login"><a href="#">My Account</a></div>
                    <div className="curr-wrap dropdown">
                      <div>
                        <ul>
                          <li>
                            <a href="#" className="lang-sel icl-en">
                              Currency<i className="fa fa-angle-down"></i>
                            </a>
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
                    {/* lang select wrapper */}
                    <div className="lang-wrap dropdown">
                      <div>
                        <ul>
                          <li>
                            <a href="#" className="lang-sel icl-en">
                              Language<i className="fa fa-angle-down"></i>
                            </a>
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
          <nav className="main-nav js-stick">
            <div className="full-wrapper relative clearfix container">
              <div className="nav-logo-wrap local-scroll">
                <a href="/" className="logo">
                  <img src="img/logo.png" data-at2x="img/logo@2x.png" alt="Logo" />
                </a>
              </div>
              <div className="inner-nav desktop-nav">
                <ul className="clearlist">
                  <li>
                    <a href="/" className="mn-has-sub active">
                      Home <i className="fa fa-angle-down button_open"></i>
                    </a>
                    <ul className="mn-sub">
                      <li className="active"><a href="/">Standard Slider</a></li>
                      <li><a href="/">Main Search</a></li>
                      <li><a href="/">Full Slider</a></li>
                      <li><a href="/">Video Slider</a></li>
                    </ul>
                  </li>
                  <li className="slash">/</li>
                  <li>
                    <a href="/hotels" className="mn-has-sub">
                      Hotels <i className="fa fa-angle-down button_open"></i>
                    </a>
                    <ul className="mn-sub">
                      <li><a href="/hotels">Hotels list</a></li>
                      <li><a href="/hotels">Hotels search</a></li>
                      <li><a href="/hotels">Hotels details</a></li>
                    </ul>
                  </li>
                  <li className="slash">/</li>
                  <li className="megamenu">
                    <a href="/page-about-us" className="mn-has-sub">
                      Pages <i className="fa fa-angle-down button_open"></i>
                    </a>
                    <ul className="mn-sub mn-has-multi">
                      <li className="mn-sub-multi">
                        <a className="mn-group-title">Pages</a>
                        <ul>
                          <li><a href="/page-about-us">About Us</a></li>
                          <li><a href="/page-services">Services</a></li>
                          <li><a href="/page-procces">Our Process</a></li>
                          <li><a href="/page-our-team">Our Team</a></li>
                          <li><a href="/page-profile">Profile</a></li>
                          <li><a href="/page-elements">Elements</a></li>
                        </ul>
                      </li>
                      <li className="mn-sub-multi">
                        <a className="mn-group-title">Portfolio</a>
                        <ul>
                          <li><a href="/portfolio-3-col">Three Columns</a></li>
                          <li><a href="/portfolio-4-col">Four Columns</a></li>
                          <li><a href="/portfolio-masonry">Portfolio Masonry</a></li>
                          <li><a href="/portfolio-with-sidebar">With Sidebar</a></li>
                          <li><a href="/portfolio-gallery">Gallery</a></li>
                          <li><a href="/page-portfolio-single">Portfolio Single</a></li>
                        </ul>
                      </li>
                      <li className="mn-sub-multi">
                        <a className="mn-group-title">Blog</a>
                        <ul>
                          <li><a href="/blog-2-col-sidebar">Two Columns + Sidebar</a></li>
                          <li><a href="/blog-3-col">Three Columns</a></li>
                          <li><a href="/blog-4-col">Four Columns</a></li>
                          <li><a href="/blog-single">Blog Single</a></li>
                          <li><a href="/blog-grid">Blog Grid</a></li>
                          <li><a href="/blog-list">Blog List</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="slash">/</li>
                  <li>
                    <a href="/shop-grid" className="mn-has-sub">
                      Shop <i className="fa fa-angle-down button_open"></i>
                    </a>
                    <ul className="mn-sub">
                      <li><a href="/shop-grid">Shop Grid</a></li>
                      <li><a href="/shop-cart">Shop Cart</a></li>
                      <li><a href="/shop-checkout">Shop Checkout</a></li>
                      <li><a href="/shop-single">Shop Single Product</a></li>
                    </ul>
                  </li>
                  <li className="slash">/</li>
                  <li><a href="/page-contact">Contact</a></li>
                  <li className="search">
                    <a href="#" className="mn-has-sub">Search</a>
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
                          <div className="close-button">
                            <span>Search</span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
  
        {/* Main content from your index.html */}
        <main>
          <div className="tp-banner-container">
            <div className="tp-banner-slider">
              <ul>
                <li data-masterspeed="700" data-slotamount="7" data-transition="fade">
                  <img src="Suntour/rs-plugin/assets/loader.gif" data-lazyload="Suntour/pic/slider/main/slide-1.jpg" data-bgposition="center" alt="" data-kenburns="on" data-duration="30000" data-ease="Linear.easeNone" data-scalestart="100" data-scaleend="120" data-rotatestart="0" data-rotateend="0" data-offsetstart="0 0" data-offsetend="0 0" data-bgparallax="10" />
                  <div data-x="['center','center','center','center']" data-y="center" data-transform_in="x:-150px;opacity:0;s:1500;e:Power3.easeInOut;" data-transform_out="x:150px;opacity:0;s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;" data-start="400" className="tp-caption sl-content">
                    <div className="sl-title-top">Welcome to</div>
                    <div className="sl-title">Honolulu</div>
                    <div className="sl-title-bot">Starting <span>$105</span> per night</div>
                  </div>
                </li>
                <li data-masterspeed="700" data-transition="fade">
                  <img src="Suntour/rs-plugin/assets/loader.gif" data-lazyload="Suntour/pic/slider/main/slide-2.jpg" data-bgposition="center" alt="" data-kenburns="on" data-duration="30000" data-ease="Linear.easeNone" data-scalestart="100" data-scaleend="120" data-rotatestart="0" data-rotateend="0" data-offsetstart="0 0" data-offsetend="0 0" data-bgparallax="10" />
                  <div data-x="['center','center','center','center']" data-y="center" data-transform_in="y:-150px;opacity:0;s:1500;e:Power3.easeInOut;" data-transform_out="y:150px;opacity:0;s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;" data-start="400" className="tp-caption sl-content">
                    <div className="sl-title-top">Welcome to</div>
                    <div className="sl-title">Istanbul</div>
                    <div className="sl-title-bot">Starting <span>$255</span> per night</div>
                  </div>
                </li>
                <li data-masterspeed="700" data-transition="fade">
                  <img src="Suntour/rs-plugin/assets/loader.gif" data-lazyload="Suntour/pic/slider/main/slide-3.jpg" data-bgposition="center" alt="" data-kenburns="on" data-duration="30000" data-ease="Linear.easeNone" data-scalestart="100" data-scaleend="120" data-rotatestart="0" data-rotateend="0" data-offsetstart="0 0" data-offsetend="0 0" data-bgparallax="10" />
                  <div data-x="['center','center','center','center']" data-y="center" data-transform_in="x:150px;opacity:0;s:1500;e:Power3.easeInOut;" data-transform_out="x:-150px;opacity:0;s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;" data-start="400" className="tp-caption sl-content">
                    <div className="sl-title-top">Welcome to</div>
                    <div className="sl-title">Dubai</div>
                    <div className="sl-title-bot">Starting <span>$280</span> per night</div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="slider-info-wrap clearfix">
              <div className="slider-info-content">
                <div className="slider-info-item">
                  <div className="info-item-media">
                    <img src="Suntour/pic/slider-info-1.jpg" data-at2x="Suntour/pic/slider-info-1@2x.jpg" alt="" />
                    <div className="info-item-text">
                      <div className="info-price font-4"><span>start per night</span> $105</div>
                      <div className="info-temp font-4"><span>local temperature</span> 36° / 96.8°</div>
                      <p className="info-text">Nunc hendrerit nulla molestie ipsum tincidunt vestibulum. Nunc condimentum nibh.</p>
                    </div>
                  </div>
                  <div className="info-item-content">
                    <div className="main-title">
                      <h3 className="title"><span className="font-4">Hawaii</span> Honolulu</h3>
                      <div className="price"><span>$105</span> per night</div>
                      <a href="hotels-details.html" className="button">Details</a>
                    </div>
                  </div>
                </div>
                <div className="slider-info-item">
                  <div className="info-item-media">
                    <img src="Suntour/pic/slider-info-2.jpg" data-at2x="Suntour/pic/slider-info-2@2x.jpg" alt="" />
                    <div className="info-item-text">
                      <div className="info-price font-4"><span>start per night</span> $55</div>
                      <div className="info-temp font-4"><span>local temperature</span> 31° / 87.8°</div>
                      <p className="info-text">Donec semper mattis diam sit amet eleifend. Vestibulum ante ipsum primis in faucibus orci luctus et.</p>
                    </div>
                  </div>
                  <div className="info-item-content">
                    <div className="main-title">
                      <h3 className="title"><span className="font-4">Turkey</span> Antalya</h3>
                      <div className="price"><span>$55</span> per night</div>
                      <a href="hotels-details.html" className="button">Details</a>
                    </div>
                  </div>
                </div>
                <div className="slider-info-item">
                  <div className="info-item-media">
                    <img src="Suntour/pic/slider-info-3.jpg" data-at2x="Suntour/pic/slider-info-3@2x.jpg" alt="" />
                    <div className="info-item-text">
                      <div className="info-price font-4"><span>start per night</span> $95</div>
                      <div className="info-temp font-4"><span>local temperature</span> 41° / 105.8°</div>
                      <p className="info-text">Donec ac eros dapibus, pulvinar enim in, vestibulum nisi. Sed bibendum magna at massa laoreet gravida.</p>
                    </div>
                  </div>
                  <div className="info-item-content">
                    <div className="main-title">
                      <h3 className="title"><span className="font-4">Indonesia</span> Bali</h3>
                      <div className="price"><span>$95</span> per night</div>
                      <a href="hotels-details.html" className="button">Details</a>
                    </div>
                  </div>
                </div>
                <div className="slider-info-item">
                  <div className="info-item-media">
                    <img src="Suntour/pic/slider-info-4.jpg" data-at2x="Suntour/pic/slider-info-4@2x.jpg" alt="" />
                    <div className="info-item-text">
                      <div className="info-price font-4"><span>start per night</span> $80</div>
                      <div className="info-temp font-4"><span>local temperature</span> 25° / 77°</div>
                      <p className="info-text">Etiam malesuada lectus tempor, ultricies lectus in, convallis massa.</p>
                    </div>
                  </div>
                  <div className="info-item-content">
                    <div className="main-title">
                      <h3 className="title"><span className="font-4">Austria</span> Serfaus</h3>
                      <div className="price"><span>$80</span> per night</div>
                      <a href="hotels-details.html" className="button">Details</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
  
        {/* Footer */}
        <footer>
          {/* Add footer content here */}
        </footer>
      </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
