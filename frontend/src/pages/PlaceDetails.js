import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom'; 
import loadjs from 'loadjs';
import Footer from '../components/Footer';


const PlaceDetails = () => {

  
    return(
       <div>
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
              <img src="/img/logo.png" data-at2x="/img/logo@2x.png" alt="logo" />
            </a>
          </div>
          {/* Main Menu */}
          <div className="inner-nav desktop-nav">
            <ul className="clearlist">
              {/* Item With Sub */}
              <li>
                <Link to="/" className="mn-has-sub">Home <i className="fa fa-angle-down button_open"></i></Link>
                <ul className="mn-sub">
                  <li><Link to="/">Standart Slider</Link></li>
                  <li><Link to="/index-search">Main Search</Link></li>
                  <li><Link to="/index-slider">Full Slider</Link></li>
                  <li><Link to="/index-video">Video Slider</Link></li>
                </ul>
              </li>
              {/* End Item With Sub */}
              <li className="slash">/</li>
              {/* Item With Sub */}
              <li>
                <Link to="/hotels-search" className="mn-has-sub active">Hotels <i className="fa fa-angle-down button_open"></i></Link>
                {/* Sub */}
                <ul className="mn-sub">
                  <li><Link to="/hotels-list">Hotels list</Link></li>
                  <li><Link to="/hotels-search">Hotels search</Link></li>
                  <li className="active"><Link to="/hotels-details">Hotels details</Link></li>
                </ul>
                {/* End Sub */}
              </li>
              {/* End Item With Sub */}
              <li className="slash">/</li>
              {/* Item With Sub */}
              <li className="megamenu">
                <Link to="/page-about-us" className="mn-has-sub">Pages <i className="fa fa-angle-down button_open"></i></Link>
                {/* Sub */}
                <ul className="mn-sub mn-has-multi">
                  <li className="mn-sub-multi">
                    <span className="mn-group-title">Pages</span>
                    <ul>
                      <li><Link to="/page-about-us">About Us</Link></li>
                      <li><Link to="/page-services">Services</Link></li>
                      <li><Link to="/page-procces">Our Process</Link></li>
                      <li><Link to="/page-our-team">Our Team</Link></li>
                      <li><Link to="/page-profile">Profile</Link></li>
                      <li><Link to="/page-elements">Elements</Link></li>
                    </ul>
                  </li>
                  <li className="mn-sub-multi">
                    <span className="mn-group-title">Portfolio</span>
                    <ul>
                      <li><Link to="/portfolio-3-col">Three Columns</Link></li>
                      <li><Link to="/portfolio-4-col">Four Columns</Link></li>
                      <li><Link to="/portfolio-masonry">Portfolio Masonry</Link></li>
                      <li><Link to="/portfolio-with-sidebar">With Sidebar</Link></li>
                      <li><Link to="/portfolio-gallery">Gallery</Link></li>
                      <li><Link to="/page-portfolio-single">Portfolio Single</Link></li>
                    </ul>
                  </li>
                  <li className="mn-sub-multi">
                    <span className="mn-group-title">Blog</span>
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
              <li>
                <Link to="/shop-grid" className="mn-has-sub">Shop <i className="fa fa-angle-down button_open"></i></Link>
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
              <li className="search">
                <Link to="#" className="mn-has-sub">Search</Link>
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
      {/* breadcrumbs start */}
      <section style={{ backgroundImage: "url('pic/breadcrumbs/bg-2.jpg')" }} className="breadcrumbs style-2 gray-90">
        <div className="container">
          <div className="text-left breadcrumbs-item">
            <Link to="/">home</Link><i>/</i><Link to="/hotels">hotels</Link><i>/</i><span className="last">Hotel Bohemians</span>
            <h2><span>Hotel</span> Bohemians<span className="stars stars-4"><span>4 stars</span></span></h2>
            <div className="location"><i className="flaticon-suntour-map"></i>
              <p className="font-4">9300 Meadow Lane, Kalamazoo, MI 49009, Istanbul, Turkey</p><a href="#location" className="scrollto">Show map</a>
            </div>
          </div>
          <div className="breadright"><a href="#" className="cws-button small alt">Get price</a>
            <p>Best Price Guarantee</p>
          </div>
        </div>
      </section>
      {/* ! breadcrumbs end */}
    </header>
        <div className="content-body">
      <section className="page-section pt-0 pb-50">
        <div className="container">
          <div className="menu-widget with-switch mt-30 mb-30">
            <ul className="magic-line">
              <li className="current_item"><a href="#overview" className="scrollto">Overview</a></li>
              <li><a href="#prices" className="scrollto">Prices</a></li>
              <li><a href="#location" className="scrollto">Location</a></li>
              <li><a href="#amenties" className="scrollto">Amenities</a></li>
              <li><a href="#reviews" className="scrollto">Reviews (28) <span className="stars stars-5"></span></a></li>
            </ul>
          </div>
        </div>
        <div className="container">
       
          <div id="flex-slider" className="flexslider">
            <ul className="slides">
              <li><img src="pic/flexslider/l-1.jpg" alt="slider" /></li>
              <li><img src="pic/flexslider/l-2.jpg" alt="slider" /></li>
              <li><img src="pic/flexslider/l-3.jpg" alt="slider" /></li>
              <li><img src="pic/flexslider/l-4.jpg" alt="slider" /></li>
              <li><img src="pic/flexslider/l-5.jpg" alt="slider" /></li>
              <li><img src="pic/flexslider/l-6.jpg" alt="slider" /></li>
              <li><img src="pic/flexslider/l-7.jpg" alt="slider" /></li>
              <li><img src="pic/flexslider/l-8.jpg" alt="slider" /></li>
              <li><img src="pic/flexslider/l-9.jpg" alt="slider" /></li>
              <li><img src="pic/flexslider/l-1.jpg" alt="slider" /></li>
            </ul>
          </div>
          <div id="flex-carousel" className="flexslider">
            <ul className="slides">
              <li><img src="pic/flexslider/1@2x.jpg" data-at2x="pic/flexslider/1@2x.jpg" alt="carousel" /></li>
              <li><img src="pic/flexslider/2.jpg" data-at2x="pic/flexslider/2@2x.jpg" alt="carousel" /></li>
              <li><img src="pic/flexslider/3.jpg" data-at2x="pic/flexslider/3@2x.jpg" alt="carousel" /></li>
              <li><img src="pic/flexslider/4.jpg" data-at2x="pic/flexslider/4@2x.jpg" alt="carousel" /></li>
              <li><img src="pic/flexslider/5.jpg" data-at2x="pic/flexslider/5@2x.jpg" alt="carousel" /></li>
              <li><img src="pic/flexslider/6.jpg" data-at2x="pic/flexslider/6@2x.jpg" alt="carousel" /></li>
              <li><img src="pic/flexslider/7@2x.jpg" data-at2x="pic/flexslider/7@2x.jpg" alt="carousel" /></li>
              <li><img src="pic/flexslider/8@2x.jpg" data-at2x="pic/flexslider/8@2x.jpg" alt="carousel" /></li>
              <li><img src="pic/flexslider/9.jpg" data-at2x="pic/flexslider/9@2x.jpg" alt="carousel" /></li>
              <li><img src="pic/flexslider/1.jpg" data-at2x="pic/flexslider/1@2x.jpg" alt="carousel" /></li>
            </ul>
          </div>
        </div>
        <div className="container mt-30">
          <h4 className="mb-20">Morbi facilisis nisi et leo egestas gravida</h4>
          <div className="row">
            <div className="col-md-8">
              <p className="mb-15">Barcelo Eresin Topkapi offers a modern setting in Istanbul and features a swimming pool, free Wi-Fi and complimentary private parking on-site. It also has a sauna, a Jacuzzi and a Turkish steam bath.</p>
              <p className="mb-15">Guests can enjoy a range of massage treatments and beauty therapy at the on-site spa, U Spa. It offers child-minding services, a currency exchange and a reception that is available 24/7. It also has superb facilities for meetings and events.</p>
              <p className="mb-15">Rooms offer premium amenities, including mini bars, pillow menus and rain showers. All have a sofa bed, slippers and tea and coffee making facilities.</p>
              <p className="mb-15">The hotel's restaurant, Picasso, serves Turkish and international cuisine. In the evening, guests are able to relax in the cosy lounge bar.</p>
              <p>The area surrounding <ins className="alt-4">Barcelo Eresin</ins> is popular for its shopping. The helpful staff at the tour desk are available to book tours and sightseeing trips in Istanbul.</p>
            </div>
            <div className="col-md-4">
              <div className="bg-gray-3 p-30-40">
                <ul className="style-1 mb-0">
                  <li>Parking</li>
                  <li>Concierge service</li>
                  <li>Gift shop</li>
                  <li>Meeting/Banquet facilities</li>
                  <li>Wheelchair accessible</li>
                  <li>Restaurant</li>
                  <li>Express check out</li>
                  <li>Air-conditioned</li>
                  <li>Babysitting/child services (surcharge)</li>
                </ul>
                <a href="#"><ins className="alt-5">More amenities</ins></a>
              </div>
            </div>
          </div>
        </div>
        {/* section prices */}
        <div id="prices" className="container mb-50 mt-40">
          <div className="search-hotels room-search pattern">
            <div className="search-room-title">
              <h5>Choose your room</h5>
            </div>
            <div className="tours-container">
              <div className="tours-box">
                <div className="tours-search mb-20">
                  <form method="post" className="form search divider-skew">
                    <div className="search-wrap">
                      <input type="text" placeholder="Destination" className="form-control search-field" /><i className="flaticon-suntour-map search-icon"></i>
                    </div>
                  </form>
                  <div className="tours-calendar divider-skew">
                    <input placeholder="Depart date" type="text" onFocus={(e) => (e.target.type = 'date')} onBlur={(e) => (e.target.type = 'text')} className="calendar-default textbox-n" /><i className="flaticon-suntour-calendar calendar-icon"></i>
                  </div>
                  <div className="tours-calendar divider-skew">
                    <input placeholder="Return date" type="text" onFocus={(e) => (e.target.type = 'date')} onBlur={(e) => (e.target.type = 'text')} className="calendar-default textbox-n" /><i className="flaticon-suntour-calendar calendar-icon"></i>
                  </div>
                  <div className="selection-box divider-skew"><i className="flaticon-suntour-adult box-icon"></i>
                    <select>
                      <option>Adult</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </select>
                  </div>
                  <div className="selection-box divider-skew"><i className="flaticon-suntour-children box-icon"></i>
                    <select>
                      <option>Child</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </select>
                  </div>
                  <div className="selection-box"><i className="flaticon-suntour-bed box-icon"></i>
                    <select>
                      <option>Room</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </select>
                  </div>
                  <div className="button-search">GO</div>
                </div>
              </div>
            </div>
          </div>
          <div className="room-table">
            <table className="table alt-2">
              <thead>
                <tr>
                  <th>Room Type</th>
                  <th>Max.</th>
                  <th>Options</th>
                  <th>Today's price</th>
                  <th>Booking</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><img src="pic/190x130.jpg" data-at2x="pic/190x130@2x.jpg" alt="room" />
                    <h6>Grand Hotel Wien</h6>
                    <p className="mb-0">(Extra beds available: Crib, <br /> Rollaway bed) Room sleeps <br /> 4 guests (up to 3 children)</p>
                  </td>
                  <td>
                    <div className="table-icon"><i className="flaticon-people"></i><i className="flaticon-people"></i><i className="flaticon-people"></i><i className="flaticon-people"></i><i className="flaticon-people alt"></i></div>
                    <p>4 guest</p>
                  </td>
                  <td>
                    <ul className="style-1">
                      <li>Special conditions, pay when you stay</li>
                      <li>Breakfast included</li>
                      <li>Free Parking</li>
                    </ul>
                  </td>
                  <td className="room-price">$120</td>
                  <td><a href="#" className="cws-button alt gray">Book now</a></td>
                </tr>
                <tr>
                  <td><img src="pic/190x130.jpg" data-at2x="pic/190x130@2x.jpg" alt="room" />
                    <h6>Deluxe Room, Sea View</h6>
                    <p className="mb-0">(Extra beds available: Crib, <br /> Rollaway bed)</p>
                  </td>
                  <td>
                    <div className="table-icon"><i className="flaticon-people"></i><i className="flaticon-people"></i><i className="flaticon-people alt"></i><i className="flaticon-people alt"></i><i className="flaticon-people alt"></i></div>
                    <p>2 guest</p>
                  </td>
                  <td>
                    <ul className="style-1">
                      <li>Special conditions, pay when you stay</li>
                      <li>Breakfast included</li>
                      <li>Free Parking</li>
                      <li>Free Internet</li>
                    </ul>
                  </td>
                  <td className="room-price">Sold out</td>
                  <td><a href="#" className="cws-button alt gray">Book now</a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* section location */}
        <div id="location" className="container mb-50">
          <div className="row">
            <div className="col-md-12">
              <h4 className="trans-uppercase mb-10">Location</h4>
              <div className="cws_divider mb-30"></div>
              {/* google map */}
              <div className="map-wrapper">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25295.930156304785!2d16.371063311644324!3d48.208404844730474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d07986fcad78b%3A0x73f5a4d267cc4174!2zTmFnbGVyZ2Fzc2UgMTAsIDEwMTAgV2llbiwg0JDQstGB0YLRgNC40Y8!5e0!3m2!1sru!2sua!4v1453294615596" allowFullScreen=""></iframe>
              </div>
              <ul className="icon inline mt-20">
                <li><a href="#">9300 Meadow Lane, Kalamazoo, MI 49009<i className="flaticon-suntour-map"></i></a></li>
                <li><a href="#">00 1 877-859-5095<i className="flaticon-suntour-phone"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
        {/* section amenities */}
        <div id="amenties" className="container mb-50">
          <div className="row">
            <div className="col-md-12">
              <h4 className="trans-uppercase mb-10">Amenities</h4>
              <div className="cws_divider mb-10"></div>
            </div>
          </div>
          <div className="row mt-0 masonry">
            <div className="col-md-3 col-sm-6">
              <h6 className="trans-uppercase">General</h6>
              <ul className="style-1">
                <li>Room Service</li>
                <li>Newspapers</li>
                <li>Non-smoking Rooms</li>
                <li>Family Rooms</li>
                <li>Elevator</li>
                <li>Safe</li>
                <li>Heating</li>
                <li>All Spaces Non-Smoking</li>
                <li>Air Conditioning</li>
                <li>Carpeted</li>
              </ul>
              <h6 className="trans-uppercase mt-20">Business Facilities</h6>
              <ul className="style-1">
                <li>Fax/Photocopying</li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6">
              <h6 className="trans-uppercase">Media & Technology</h6>
              <ul className="style-1">
                <li>Telephone</li>
                <li>Radio</li>
                <li>Cable channels</li>
                <li>Flat-screen TV</li>
              </ul>
              <h6 className="trans-uppercase mt-20">Bathroom</h6>
              <ul className="style-1">
                <li>Hairdryer</li>
                <li>Toilet</li>
                <li>Bathroom</li>
                <li>Slippers</li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6">
              <h6 className="trans-uppercase">Food & Drink</h6>
              <ul className="style-1">
                <li>Bar</li>
                <li>Breakfast in the Room</li>
                <li>Restaurant with Dining Menu</li>
                <li>Special Diet Meals (upon request)</li>
                <li>Minibar</li>
              </ul>
              <h6 className="trans-uppercase mt-20">Activities</h6>
              <ul className="style-1">
                <li>Hiking</li>
                <li>Cycling</li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6">
              <h6 className="trans-uppercase">Front Desk Services</h6>
              <ul className="style-1">
                <li>24-Hour Front Desk</li>
                <li>Currency Exchange</li>
                <li>Tour Desk</li>
                <li>Ticket Service</li>
                <li>Baggage Storage</li>
                <li>Concierge Service</li>
              </ul>
              <h6 className="trans-uppercase mt-20">Cleaning Services</h6>
              <ul className="style-1">
                <li>Laundry</li>
                <li>Dry Cleaning</li>
                <li>Ironing Service</li>
                <li>Shoeshine</li>
                <li>Daily Housekeeping</li>
              </ul>
            </div>
          </div>
        </div>
        {/* section reviews */}
        <div id="reviews" className="container mb-60">
          <div className="row">
            <div className="col-md-12">
              <h4 className="trans-uppercase mb-10">Reviews travellers</h4>
              <div className="cws_divider mb-30"></div>
            </div>
          </div>
          <div className="reviews-wrap">
            <div className="reviews-top pattern relative">
              <div className="reviews-total">
                <h5>Excellent</h5>
                <div className="reviews-sub-mark">4.2</div>
                <div className="stars-perc"><span style={{ width: '85%' }}></span></div><span>Based on 67 reviews</span>
              </div>
              <div className="reviews-marks">
                <ul>
                  <li>Cleanliness<span><span className="stars-perc"><span style={{ width: '85%' }}></span></span>4.5</span></li>
                  <li>Location<span><span className="stars-perc"><span style={{ width: '80%' }}></span></span>4.0</span></li>
                  <li>Staff<span><span className="stars-perc"><span style={{ width: '100%' }}></span></span>5.0</span></li>
                  <li>Free Wi-Fi<span><span className="stars-perc"><span style={{ width: '65%' }}> </span></span>3.5</span></li>
                </ul>
                <ul>
                  <li>Comfort<span><span className="stars-perc"><span style={{ width: '85%' }}> </span></span>4.5</span></li>
                  <li>Facilities<span><span className="stars-perc"><span style={{ width: '80%' }}></span></span>4.0</span></li>
                  <li>Value for money<span><span className="stars-perc"><span style={{ width: '100%' }}> </span></span>5.0</span></li>
                </ul>
              </div>
            </div>
            <div className="comments">
              <div className="comment-body">
                <div className="avatar"><img src="pic/blog/90x90/1.jpg" data-at2x="pic/blog/90x90/1@2x.jpg" alt="review" />12 Reviews</div>
                <div className="comment-info">
                  <div className="comment-meta">
                    <div className="title">
                      <h5>Lovely clean, comfortable hotel <span>Rachel George</span></h5>
                    </div>
                    <div className="comment-date">
                      <div className="stars stars-5">5</div><span>Mon, 03-23-2016</span>
                    </div>
                  </div>
                  <div className="comment-content">
                    <p>Proin ut pretium sem. Maecenas id commodo massa. Sed vitae urna hendrerit, commodo dolor non, porttitor odio. Suspendisse ac arcu eu enim lobortis luctus sed quis velit. Nam ut vestibulum orci, at sodales libero. Fusce egestas urna a dolor fermentum, id tincidunt leo eleifend. Phasellus pulvinar hendrerit pulvinar.</p>
                  </div>
                </div>
              </div>
              <div className="comment-body">
                <div className="avatar"><img src="pic/blog/90x90/2.jpg" data-at2x="pic/blog/90x90/2@2x.jpg" alt="review" />12 Reviews</div>
                <div className="comment-info">
                  <div className="comment-meta">
                    <div className="title">
                      <h5>Brilliant hotel with history <span>Phillip Ferguson</span></h5>
                    </div>
                    <div className="comment-date">
                      <div className="stars stars-4">4</div><span>Mon, 03-23-2016</span>
                    </div>
                  </div>
                  <div className="comment-content">
                    <p>Vestibulum tellus justo, scelerisque sit amet imperdiet et, placerat non massa. Aliquam erat volutpat. Proin vitae enim cursus, dapibus est at, feugiat mauris. Sed molestie dolor sed ante dictum dictum. Quisque at nulla ipsum. Praesent interdum euismod turpis, eget tristique justo porta eu. Cras ullamcorper pulvinar nibh, eget faucibus neque porta in.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="reviews-bottom">
              <h4>You've been in this hotel?</h4>
            </div>
          </div>
        </div>
        {/* review */}
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h4 className="trans-uppercase mb-10">Write a review</h4>
              <div className="cws_divider mb-30"></div>
            </div>
          </div>
          <div className="review-content pattern relative">
            <div className="row">
              <div className="col-md-5 mb-md-30 mb-xs-0">
                <div className="review-total"><img src="pic/blog/120x120.jpg" data-at2x="pic/blog/120x120@2x.jpg" alt="review" />
                  <div className="review-total-content">
                    <h6>Hotel Bohemians</h6>
                    <div className="stars stars-4"></div>
                    <ul className="icon">
                      <li>Istanbul, Turkey<i className="flaticon-suntour-map"></i></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-7">
                <div className="review-marks clearfix mb-30">
                  <ul>
                    <li>Cleanliness
                      <div className="stars stars-5"></div>
                    </li>
                    <li>Location
                      <div className="stars stars-5"></div>
                    </li>
                    <li>Staff
                      <div className="stars stars-5"></div>
                    </li>
                    <li>Free Wi-Fi
                      <div className="stars stars-5"></div>
                    </li>
                  </ul>
                  <ul>
                    <li>Comfort
                      <div className="stars stars-5"></div>
                    </li>
                    <li>Facilities
                      <div className="stars stars-5"></div>
                    </li>
                    <li>Value for money
                      <div className="stars stars-5"></div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <form className="form clearfix">
              <div className="row">
                <div className="col-md-4">
                  <input type="text" name="firstName" placeholder="First Name" className="form-row form-row-first" />
                </div>
                <div className="col-md-4">
                  <input type="text" name="lastName" placeholder="Last Name" className="form-row form-row-first" />
                </div>
                <div className="col-md-4">
                  <input type="text" name="bookingNumber" placeholder="Booking Number" className="form-row form-row-first" />
                </div>
                <div className="col-md-12">
                  <input type="text" name="reviewTitle" placeholder="Title of your review" className="form-row form-row-last" />
                </div>
                <div className="col-md-12">
                  <textarea name="reviewMessage" placeholder="Message of your review" className="mb-20" rows="4"></textarea>
                  <input type="submit" value="Add a review" className="cws-button alt float-right" />
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* ! review */}
      </section>
    </div>
        <Footer />
        </div>
    );
};

export default PlaceDetails;