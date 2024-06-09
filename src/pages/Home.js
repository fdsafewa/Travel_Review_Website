import React from 'react';
import { Link } from 'react-router-dom'; 
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Community from './Community';



const Home = () => (

  <div>
   <Header />
  <div className="content-body">
    <div className="tp-banner-container">
      <div className="tp-banner-slider">
        <ul>
          <li data-masterspeed="700" data-slotamount="7" data-transition="fade"><img src="rs-plugin/assets/loader.gif" data-lazyload="pic/slider/main/slide-1.jpg" data-bgposition="center" alt="" data-kenburns="on" data-duration="30000" data-ease="Linear.easeNone" data-scalestart="100" data-scaleend="120" data-rotatestart="0" data-rotateend="0" data-offsetstart="0 0" data-offsetend="0 0" data-bgparallax="10" />
            <div data-x="['center','center','center','center']" data-y="center" data-transform_in="x:-150px;opacity:0;s:1500;e:Power3.easeInOut;" data-transform_out="x:150px;opacity:0;s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;" data-start="400" className="tp-caption sl-content">
              <div className="sl-title-top">Welcome to</div>
              <div className="sl-title">Honolulu</div>
              <div className="sl-title-bot">Starting <span>$105</span> per night</div>
            </div>
          </li>
          <li data-masterspeed="700" data-transition="fade"><img src="rs-plugin/assets/loader.gif" data-lazyload="pic/slider/main/slide-2.jpg" data-bgposition="center" alt="" data-kenburns="on" data-duration="30000" data-ease="Linear.easeNone" data-scalestart="100" data-scaleend="120" data-rotatestart="0" data-rotateend="0" data-offsetstart="0 0" data-offsetend="0 0" data-bgparallax="10" />
            <div data-x="['center','center','center','center']" data-y="center" data-transform_in="y:-150px;opacity:0;s:1500;e:Power3.easeInOut;" data-transform_out="y:150px;opacity:0;s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;" data-start="400" className="tp-caption sl-content">
              <div className="sl-title-top">Welcome to</div>
              <div className="sl-title">Istanbul</div>
              <div className="sl-title-bot">Starting <span>$255</span> per night</div>
            </div>
          </li>
          <li data-masterspeed="700" data-transition="fade"><img src="rs-plugin/assets/loader.gif" data-lazyload="pic/slider/main/slide-3.jpg" data-bgposition="center" alt="" data-kenburns="on" data-duration="30000" data-ease="Linear.easeNone" data-scalestart="100" data-scaleend="120" data-rotatestart="0" data-rotateend="0" data-offsetstart="0 0" data-offsetend="0 0" data-bgparallax="10" />
            <div data-x="['center','center','center','center']" data-y="center" data-transform_in="x:150px;opacity:0;s:1500;e:Power3.easeInOut;" data-transform_out="x:-150px;opacity:0;s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;" data-start="400" className="tp-caption sl-content">
              <div className="sl-title-top">Welcome to</div>
              <div className="sl-title">Dubai</div>
              <div className="sl-title-bot">Starting <span>$280</span> per night</div>
            </div>
          </li>
        </ul>
      </div>
      {/* slider info */}
      <div className="slider-info-wrap clearfix">
        <div className="slider-info-content">
          <div className="slider-info-item">
            <div className="info-item-media"><img src="pic/slider-info-1.jpg" data-at2x="pic/slider-info-1@2x.jpg" alt="" />
              <div className="info-item-text">
                <div className="info-price font-4"><span>start per night</span> $105</div>
                <div className="info-temp font-4"><span>local temperature</span> 36° / 96.8°</div>
                <p className="info-text">Nunc hendrerit nulla molestie ipsum tincidunt vestibulum. Nunc condimentum nibh.</p>
              </div>
            </div>
            <div className="info-item-content">
              <div className="main-title">
                <h3 className="title"><span className="font-4">Hawaii</span> Honolulu</h3>
                <div className="price"><span>$105</span> per night</div><a href="hotels-details.html" className="button">Details</a>
              </div>
            </div>
          </div>
          <div className="slider-info-item">
            <div className="info-item-media"><img src="pic/slider-info-2.jpg" data-at2x="pic/slider-info-2@2x.jpg" alt="" />
              <div className="info-item-text">
                <div className="info-price font-4"><span>start per night</span> $55</div>
                <div className="info-temp font-4"><span>local temperature</span> 31° / 87.8°</div>
                <p className="info-text">Donec semper mattis diam sit amet eleifend. Vestibulum ante ipsum primis in faucibus orci luctus et.</p>
              </div>
            </div>
            <div className="info-item-content">
              <div className="main-title">
                <h3 className="title"><span className="font-4">Turkey</span> Antalya</h3>
                <div className="price"><span>$55</span> per night</div><a href="hotels-details.html" className="button">Details</a>
              </div>
            </div>
          </div>
          <div className="slider-info-item">
            <div className="info-item-media"><img src="pic/slider-info-3.jpg" data-at2x="pic/slider-info-3@2x.jpg" alt="" />
              <div className="info-item-text">
                <div className="info-price font-4"><span>start per night</span> $95</div>
                <div className="info-temp font-4"><span>local temperature</span> 41° / 105.8°</div>
                <p className="info-text">Donec ac eros dapibus, pulvinar enim in, vestibulum nisi. Sed bibendum magna at massa laoreet gravida.</p>
              </div>
            </div>
            <div className="info-item-content">
              <div className="main-title">
                <h3 className="title"><span className="font-4">Indonesia</span> Bali</h3>
                <div className="price"><span>$95</span> per night</div><a href="hotels-details.html" className="button">Details</a>
              </div>
            </div>
          </div>
          <div className="slider-info-item">
            <div className="info-item-media"><img src="pic/slider-info-4.jpg" data-at2x="pic/slider-info-4@2x.jpg" alt="" />
              <div className="info-item-text">
                <div className="info-price font-4"><span>start per night</span> $80</div>
                <div className="info-temp font-4"><span>local temperature</span> 25° / 77°</div>
                <p className="info-text">Etiam malesuada lectus tempor, ultricies lectus in, convallis massa.</p>
              </div>
            </div>
            <div className="info-item-content">
              <div className="main-title">
                <h3 className="title"><span className="font-4">Austria</span> Serfaus</h3>
                <div className="price"><span>$80</span> per night</div><a href="hotels-details.html" className="button">Details</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ! slider-info */}
    </div>
    {/* page section */}
    <section className="page-section pb-0">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h6 className="title-section-top font-4">Special offers</h6>
            <h2 className="title-section"><span>Popular</span> Destinations</h2>
            <div className="cws_divider mb-25 mt-5"></div>
            <p>Nullam ac dolor id nulla finibus pharetra. Sed sed placerat mauris. Pellentesque lacinia imperdiet interdum. Ut nec nulla in purus consequat lobortis. Mauris lobortis a nibh sed convallis.</p>
          </div>
          <div className="col-md-4"><img src="pic/promo-1.png" data-at2x="pic/promo-1@2x.png" alt="" className="mt-md-0 mt-minus-70" /></div>
        </div>
      </div>
      <div className="features-tours-full-width">
        <div className="features-tours-wrap clearfix">
          <div className="features-tours-item">
            <div className="features-media"><img src="pic/tours/1.jpg" data-at2x="pic/tours/1@2x.jpg" alt="" />
              <div className="features-info-top">
                <div className="info-price font-4"><span>start per night</span> $80</div>
                <div className="info-temp font-4"><span>local temperature</span> 30° / 86°</div>
                <p className="info-text">Etiam malesuada lectus tempor, ultricies lectus in, convallis massa.</p>
              </div>
              <div className="features-info-bot">
              <h4 className="title"><span className="font-4">United arab emirates</span> Dubai</h4><a href="/PlaceDetails" className="button">Details</a>
              </div>
            </div>
          </div>
          <div className="features-tours-item">
            <div className="features-media"><img src="pic/tours/2.jpg" data-at2x="pic/tours/2@2x.jpg" alt="" />
              <div className="features-info-top">
                <div className="info-price font-4"><span>start per night</span> $100</div>
                <div className="info-temp font-4"><span>local temperature</span> 23° / 73.4°</div>
                <p className="info-text">Etiam malesuada lectus tempor, ultricies lectus in, convallis massa.</p>
              </div>
              <div className="features-info-bot">
                <h4 className="title"><span className="font-4">United kingdom</span> London</h4><a href="/PlaceDetails" className="button">Details</a>
              </div>
            </div>
          </div>
          <div className="features-tours-item">
            <div className="features-media"><img src="pic/tours/3.jpg" data-at2x="pic/tours/3@2x.jpg" alt="" />
              <div className="features-info-top">
                <div className="info-price font-4"><span>start per night</span> $120</div>
                <div className="info-temp font-4"><span>local temperature</span> 34° / 93.2°</div>
                <p className="info-text">Etiam malesuada lectus tempor, ultricies lectus in, convallis massa.</p>
              </div>
              <div className="features-info-bot">
                <h4 className="title"><span className="font-4">Australia ans oceania</span> Sydney</h4><a href="/PlaceDetails" className="button">Details</a>
              </div>
            </div>
          </div>
          <div className="features-tours-item">
            <div className="features-media"><img src="pic/tours/4.jpg" data-at2x="pic/tours/4@2x.jpg" alt="" />
              <div className="features-info-top">
                <div className="info-price font-4"><span>start per night</span> $105</div>
                <div className="info-temp font-4"><span>local temperature</span> 39° / 102.2°</div>
                <p className="info-text">Etiam malesuada lectus tempor, ultricies lectus in, convallis massa.</p>
              </div>
              <div className="features-info-bot">
                <h4 className="title"><span className="font-4">Brazil</span> Rio de janeiro</h4><a href="/PlaceDetails" className="button">Details</a>
              </div>
            </div>
          </div>
          <div className="features-tours-item">
            <div className="features-media"><img src="pic/tours/5.jpg" data-at2x="pic/tours/5@2x.jpg" alt="" />
              <div className="features-info-top">
                <div className="info-price font-4"><span>start per night</span> $110</div>
                <div className="info-temp font-4"><span>local temperature</span> 35° / 95°</div>
                <p className="info-text">Etiam malesuada lectus tempor, ultricies lectus in, convallis massa.</p>
              </div>
              <div className="features-info-bot">
                <h4 className="title"><span className="font-4">Maldives</span> Male</h4><a href="/PlaceDetails" className="button">Details</a>
              </div>
            </div>
          </div>
          <div className="features-tours-item">
            <div className="features-media"><img src="pic/tours/6.jpg" data-at2x="pic/tours/6@2x.jpg" alt="" />
              <div className="features-info-top">
                <div className="info-price font-4"><span>start per night</span> $85</div>
                <div className="info-temp font-4"><span>local temperature</span> 30° / 86°</div>
                <p className="info-text">Etiam malesuada lectus tempor, ultricies lectus in, convallis massa.</p>
              </div>
              <div className="features-info-bot">
                <h4 className="title"><span className="font-4">Turkey</span> Istanbul</h4><a href="/PlaceDetails" className="button">Details</a>
              </div>
            </div>
          </div>
          <div className="features-tours-item">
            <div className="features-media"><img src="pic/tours/7.jpg" data-at2x="pic/tours/7@2x.jpg" alt="" />
              <div className="features-info-top">
                <div className="info-price font-4"><span>start per night</span> $75</div>
                <div className="info-temp font-4"><span>local temperature</span> 25° / 77°</div>
                <p className="info-text">Etiam malesuada lectus tempor, ultricies lectus in, convallis massa.</p>
              </div>
              <div className="features-info-bot">
                <h4 className="title"><span className="font-4">Austria</span> Vienna</h4><a href="/PlaceDetails" className="button">Details</a>
              </div>
            </div>
          </div>
          <div className="features-tours-item">
            <div className="features-media"><img src="pic/tours/8.jpg" data-at2x="pic/tours/8@2x.jpg" alt="" />
              <div className="features-info-top">
                <div className="info-price font-4"><span>start per night</span> $115</div>
                <div className="info-temp font-4"><span>local temperature</span> 22° / 71.6°</div>
                <p className="info-text">Etiam malesuada lectus tempor, ultricies lectus in, convallis massa.</p>
              </div>
              <div className="features-info-bot">
                <h4 className="title"><span className="font-4">Italy</span> Venice</h4><a href="/PlaceDetails" className="button">Details</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* ! page section */}
    {/* counter section */}
    <section className="small-section">
      <div className="container">
        <div className="row">
          <div className="col-md-2 col-xs-6 mb-md-30">
            <div className="counter-block"><i className="counter-icon flaticon-suntour-world"></i>
              <div className="counter-name-wrap">
                <div data-count="345" className="counter">0</div>
                <div className="counter-name">Tours</div>
              </div>
            </div>
          </div>
          <div className="col-md-2 col-xs-6 mb-md-30">
            <div className="counter-block with-divider"><i className="counter-icon flaticon-suntour-fireworks"></i>
              <div className="counter-name-wrap">
                <div data-count="438" className="counter">0</div>
                <div className="counter-name">Holidays</div>
              </div>
            </div>
          </div>
          <div className="col-md-2 col-xs-6 mb-md-30">
            <div className="counter-block with-divider"><i className="counter-icon flaticon-suntour-hotel"></i>
              <div className="counter-name-wrap">
                <div data-count="526" className="counter">0</div>
                <div className="counter-name">Hotels</div>
              </div>
            </div>
          </div>
          <div className="col-md-2 col-xs-6 mb-md-30">
            <div className="counter-block with-divider"><i className="counter-icon flaticon-suntour-ship"></i>
              <div className="counter-name-wrap">
                <div data-count="169" className="counter">0</div>
                <div className="counter-name">Cruises</div>
              </div>
            </div>
          </div>
          <div className="col-md-2 col-xs-6">
            <div className="counter-block with-divider"><i className="counter-icon flaticon-suntour-airplane"></i>
              <div className="counter-name-wrap">
                <div data-count="293" className="counter">0</div>
                <div className="counter-name">Flights</div>
              </div>
            </div>
          </div>
          <div className="col-md-2 col-xs-6">
            <div className="counter-block with-divider"><i className="counter-icon flaticon-suntour-car"></i>
              <div className="counter-name-wrap">
                <div data-count="675" className="counter">0</div>
                <div className="counter-name">Cars</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* ! counter section */}
    {/* page section parallax */}
    <section className="small-section cws_prlx_section bg-gray-40"><img src="pic/parallax-1.jpg" alt="" className="cws_prlx_layer" />
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <h2 className="title-section-top alt">About</h2>
            <h2 className="title-section alt mb-20"><span>Sun</span>Tour</h2>
            <p className="color-white">Vestibulum tincidunt venenatis scelerisque. Proin quis enim lacinia, vehicula massa et, mollis urna. Proin nibh mauris, blandit vitae convallis at, tincidunt vel tellus. Praesent posuere nec lectus non cursus. Sed commodo odio et ipsum sagittis tincidunt non eget felis.</p>
            <div className="cws_divider short mb-30 mt-30"></div>
            <h3 className="font-5 color-white font-medium">Andrew McDonald</h3>
          </div>
          <div className="col-md-7">
            <div className="embed-responsive embed-responsive-16by9">
              <iframe src="https://www.youtube.com/embed/yib7tvIrL6k" className="embed-responsive-item"></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* ! page section parallax */}
    {/* recomended section */}
    <section className="small-section bg-gray">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h6 className="title-section-top font-4">Top rated</h6>
            <h2 className="title-section"><span>Recomended</span> Hotels</h2>
            <div className="cws_divider mb-25 mt-5"></div>
            <p>Maecenas commodo odio ut vulputate cursus. Integer in egestas lectus. Nam volutpat feugiat mi vitae mollis. Aenean tristique dolor bibendum mi scelerisque ultrices non at lorem.</p>
          </div>
          <div className="col-md-4"><i className="flaticon-suntour-hotel title-icon"></i></div>
        </div>
        <div className="row">
          {/* Recomended item */}
          <div className="col-md-6">
            <div className="recom-item">
              <div className="recom-media">
                <a href="hotels-details.html">
                  <div className="pic"><img src="pic/recomended/1.jpg" data-at2x="pic/recomended/1@2x.jpg" alt="" /></div>
                </a>
                <div className="location"><i className="flaticon-suntour-map"></i> Istanbul, Turkey</div>
              </div>
              {/* Recomended Content */}
              <div className="recom-item-body">
                <a href="hotels-details.html">
                  <h6 className="blog-title">Hotel Bohemians</h6>
                </a>
                <div className="stars stars-4"></div>
                <div className="recom-price"><span className="font-4">$90</span> per night</div>
                <p className="mb-30">Quisque egestas a est in convallis. Maecenas pellentesque.</p><a href="hotels-details.html" className="recom-button">Read more</a><a href="hotels-details.html" className="cws-button small alt">Book now</a>
                <div className="action font-2">20%</div>
              </div>
              {/* Recomended Image */}
            </div>
          </div>
          {/* ! Recomended item */}
          {/* Recomended item */}
          <div className="col-md-6">
            <div className="recom-item">
              <div className="recom-media">
                <a href="hotels-details.html">
                  <div className="pic"><img src="pic/recomended/2.jpg" data-at2x="pic/recomended/2@2x.jpg" alt="" /></div>
                </a>
                <div className="location"><i className="flaticon-suntour-map"></i> Praga, Czech Republic</div>
              </div>
              {/* Recomended Content */}
              <div className="recom-item-body">
                <a href="hotels-details.html">
                  <h6 className="blog-title">Easyhotel</h6>
                </a>
                <div className="stars stars-3"></div>
                <div className="recom-price"><span className="font-4">$35</span> per night</div>
                <p className="mb-30">Mauris eget hendrerit diam. Praesent a lacinia ex.</p><a href="hotels-details.html" className="recom-button">Read more</a><a href="hotels-details.html" className="cws-button small alt">Book now</a>
              </div>
              {/* Recomended Image */}
            </div>
          </div>
          {/* ! Recomended item */}
          {/* Recomended item */}
          <div className="col-md-6">
            <div className="recom-item">
              <div className="recom-media">
                <a href="hotels-details.html">
                  <div className="pic"><img src="pic/recomended/3.jpg" data-at2x="pic/recomended/3@2x.jpg" alt="" /></div>
                </a>
                <div className="location"><i className="flaticon-suntour-map"></i> Isle of Colonsay, United...</div>
              </div>
              {/* Recomended Content */}
              <div className="recom-item-body">
                <a href="hotels-details.html">
                  <h6 className="blog-title">Dolce Villa</h6>
                </a>
                <div className="stars stars-5"></div>
                <div className="recom-price"><span className="font-4">$110</span> per night</div>
                <p className="mb-30">Suspe elit nibh, auctor ac quam id, maximus efficitur justo.</p><a href="hotels-details.html" className="recom-button">Read more</a><a href="hotels-details.html" className="cws-button small alt">Book now</a>
              </div>
              {/* Recomended Image */}
            </div>
          </div>
          {/* ! Recomended item */}
          {/* Recomended item */}
          <div className="col-md-6">
            <div className="recom-item">
              <div className="recom-media">
                <a href="hotels-details.html">
                  <div className="pic"><img src="pic/recomended/4.jpg" data-at2x="pic/recomended/4@2x.jpg" alt="" /></div>
                </a>
                <div className="location"><i className="flaticon-suntour-map"></i> St. Petersburg, Russia</div>
              </div>
              {/* Recomended Content */}
              <div className="recom-item-body">
                <a href="hotels-details.html">
                  <h6 className="blog-title">Hotel Stary Pivovar</h6>
                </a>
                <div className="stars stars-4"></div>
                <div className="recom-price"><span className="font-4">$55</span> per night</div>
                <p className="mb-30">Nullam posuere tincidunt metus, nec pulvinar risus imperdiet.</p><a href="hotels-details.html" className="recom-button">Read more</a><a href="hotels-details.html" className="cws-button small alt">Book now</a>
              </div>
              {/* Recomended Image */}
            </div>
          </div>
          {/* ! Recomended item */}
          {/* Recomended item */}
          <div className="col-md-6">
            <div className="recom-item">
              <div className="recom-media">
                <a href="hotels-details.html">
                  <div className="pic"><img src="pic/recomended/5.jpg" data-at2x="pic/recomended/5@2x.jpg" alt="" /></div>
                </a>
                <div className="location"><i className="flaticon-suntour-map"></i> Vienna, Austria</div>
              </div>
              {/* Recomended Content */}
              <div className="recom-item-body">
                <a href="hotels-details.html">
                  <h6 className="blog-title">Grand Hotel Wien</h6>
                </a>
                <div className="stars stars-5"></div>
                <div className="recom-price"><span className="font-4">$98</span> per night</div>
                <p className="mb-30">Quisque egestas a est in convallis. Maecenas pellentesque.</p><a href="hotels-details.html" className="recom-button">Read more</a><a href="hotels-details.html" className="cws-button small alt">Book now</a>
              </div>
              {/* Recomended Image */}
            </div>
          </div>
          {/* ! Recomended item */}
          {/* Recomended item */}
          <div className="col-md-6">
            <div className="recom-item">
              <div className="recom-media">
                <a href="hotels-details.html">
                  <div className="pic"><img src="pic/recomended/6.jpg" data-at2x="pic/recomended/6@2x.jpg" alt="" /></div>
                </a>
                <div className="location"><i className="flaticon-suntour-map"></i> Kraków, Poland</div>
              </div>
              {/* Recomended Content */}
              <div className="recom-item-body">
                <a href="hotels-details.html">
                  <h6 className="blog-title">Hotel Wit Stwosz</h6>
                </a>
                <div className="stars stars-3"></div>
                <div className="recom-price"><span className="font-4">$75</span> per night</div>
                <p className="mb-30">Quisque egestas a est in convallis. Maecenas pellentesque.</p><a href="hotels-details.html" className="recom-button">Read more</a><a href="hotels-details.html" className="cws-button small alt">Book now</a>
              </div>
              {/* Recomended Image */}
            </div>
          </div>
          {/* ! Recomended item */}
        </div>
      </div>
    </section>
    {/* ! recomended section */}
    {/* testimonials section */}
    <section className="small-section cws_prlx_section bg-blue-40"><img src="pic/parallax-2.jpg" alt="" className="cws_prlx_layer" />
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h6 className="title-section-top font-4">Happy Memories</h6>
            <h2 className="title-section alt-2"><span>Our</span> Community</h2>
            <div className="cws_divider mb-25 mt-5"></div>
          </div>
        </div>
       <Community />
      </div>
    </section>
    {/* ! testimonials section */}
    {/* gallery section */}
    <section className="small-section">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h6 className="title-section-top font-4">Happy Memories</h6>
            <h2 className="title-section"><span>Photo</span> Gallery</h2>
            <div className="cws_divider mb-25 mt-5"></div>
            <p>Vestibulum feugiat vitae tortor ut venenatis. Sed cursus, purus eu euismod bibendum, diam nisl suscipit odio, vitae ultrices mauris dolor quis mauris. Curabitur ac metus id leo maximus porta.</p>
          </div>
          <div className="col-md-4"><i className="flaticon-suntour-photo title-icon"></i></div>
        </div>
        <div className="row portfolio-grid">
          {/* portfolio item */}
          <div className="col-md-6 col-sm-12 col-xs-12">
            <div className="portfolio-item big">
              {/* portfolio image */}
              <a href="pic/portfolio/580x285-1@2x.jpg" className="fancy">
                <div className="portfolio-media"><img src="pic/portfolio/580x285-1.jpg" data-at2x="pic/portfolio/580x285-1@2x.jpg" alt="" /></div>
              </a>
              <div className="links">
                <a href="pic/portfolio/580x285-1@2x.jpg" className="fancy"><i className="fa fa-expand"></i></a>
              </div>
            </div>
          </div>
          {/* portfolio item */}
          <div className="col-md-3 col-sm-6 col-xs-6">
            <div className="portfolio-item">
              {/* portfolio image */}
              <a href="pic/portfolio/285x285-1@2x.jpg" className="fancy">
                <div className="portfolio-media"><img src="pic/portfolio/285x285-1.jpg" data-at2x="pic/portfolio/285x285-1@2x.jpg" alt="" /></div>
              </a>
              <div className="links">
                <a href="pic/portfolio/285x285-1@2x.jpg" className="fancy"><i className="fa fa-expand"></i></a>
              </div>
            </div>
          </div>
          {/* portfolio item */}
          <div className="col-md-3 col-sm-6 col-xs-6">
            <div className="portfolio-item">
              {/* portfolio image */}
              <a href="pic/portfolio/285x285-2@2x.jpg" className="fancy">
                <div className="portfolio-media"><img src="pic/portfolio/285x285-2.jpg" data-at2x="pic/portfolio/285x285-2@2x.jpg" alt="" /></div>
              </a>
              <div className="links">
                <a href="pic/portfolio/285x285-2@2x.jpg" className="fancy"><i className="fa fa-expand"></i></a>
              </div>
            </div>
          </div>
          {/* portfolio item */}
          <div className="col-md-3 col-sm-6 col-xs-6">
            <div className="portfolio-item">
              {/* portfolio image */}
              <a href="pic/portfolio/285x285-3@2x.jpg" className="fancy">
                <div className="portfolio-media"><img src="pic/portfolio/285x285-3.jpg" data-at2x="pic/portfolio/285x285-3@2x.jpg" alt="" /></div>
              </a>
              <div className="links">
                <a href="pic/portfolio/285x285-3@2x.jpg" className="fancy"><i className="fa fa-expand"></i></a>
              </div>
            </div>
          </div>
          {/* portfolio item */}
          <div className="col-md-3 col-sm-6 col-xs-6">
            <div className="portfolio-item">
              {/* portfolio image */}
              <a href="pic/portfolio/285x285-4@2x.jpg" className="fancy">
                <div className="portfolio-media"><img src="pic/portfolio/285x285-4.jpg" data-at2x="pic/portfolio/285x285-4@2x.jpg" alt="" /></div>
              </a>
              <div className="links">
                <a href="pic/portfolio/285x285-4@2x.jpg" className="fancy"><i className="fa fa-expand"></i></a>
              </div>
            </div>
          </div>
          {/* portfolio item */}
          <div className="col-md-3 col-sm-6 col-xs-6">
            <div className="portfolio-item">
              {/* portfolio image */}
              <a href="pic/portfolio/285x285-5@2x.jpg" className="fancy">
                <div className="portfolio-media"><img src="pic/portfolio/285x285-5.jpg" data-at2x="pic/portfolio/285x285-5@2x.jpg" alt="" /></div>
              </a>
              <div className="links">
                <a href="pic/portfolio/285x285-5@2x.jpg" className="fancy"><i className="fa fa-expand"></i></a>
              </div>
            </div>
          </div>
          {/* portfolio item */}
          <div className="col-md-3 col-sm-6 col-xs-6">
            <div className="portfolio-item">
              {/* portfolio image */}
              <a href="pic/portfolio/285x285-6@2x.jpg" className="fancy">
                <div className="portfolio-media"><img src="pic/portfolio/285x285-6.jpg" data-at2x="pic/portfolio/285x285-6@2x.jpg" alt="" /></div>
              </a>
              <div className="links">
                <a href="pic/portfolio/285x285-6@2x.jpg" className="fancy"><i className="fa fa-expand"></i></a>
              </div>
            </div>
          </div>
          {/* portfolio item */}
          <div className="col-md-3 col-sm-6 col-xs-6">
            <div className="portfolio-item">
              {/* portfolio image */}
              <a href="pic/portfolio/285x285-7@2x.jpg" className="fancy">
                <div className="portfolio-media"><img src="pic/portfolio/285x285-7.jpg" data-at2x="pic/portfolio/285x285-7@2x.jpg" alt="" /></div>
              </a>
              <div className="links">
                <a href="pic/portfolio/285x285-7@2x.jpg" className="fancy"><i className="fa fa-expand"></i></a>
              </div>
            </div>
          </div>
          {/* portfolio item */}
          <div className="col-md-3 col-sm-6 col-xs-6">
            <div className="portfolio-item">
              {/* portfolio image */}
              <a href="pic/portfolio/285x285-8@2x.jpg" className="fancy">
                <div className="portfolio-media"><img src="pic/portfolio/285x285-8.jpg" data-at2x="pic/portfolio/285x285-8@2x.jpg" alt="" /></div>
              </a>
              <div className="links">
                <a href="pic/portfolio/285x285-8@2x.jpg" className="fancy"><i className="fa fa-expand"></i></a>
              </div>
            </div>
          </div>
          {/* portfolio item */}
          <div className="col-md-6 col-sm-12 col-xs-12">
            <div className="portfolio-item big">
              {/* portfolio image */}
              <a href="pic/portfolio/580x285-2@2x.jpg" className="fancy">
                <div className="portfolio-media"><img src="pic/portfolio/580x285-2.jpg" data-at2x="pic/portfolio/580x285-2@2x.jpg" alt="" /></div>
              </a>
              <div className="links">
                <a href="pic/portfolio/580x285-2@2x.jpg" className="fancy"><i className="fa fa-expand"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* ! gallery section */}
    {/* latest news */}
    <section className="small-section cws_prlx_section bg-blue-40"><img src="pic/parallax-3.jpg" alt="" className="cws_prlx_layer" />
      <div className="container">
        <div className="row mb-50">
          <div className="col-md-8">
            <h6 className="title-section-top font-4">Latest News</h6>
            <h2 className="title-section alt-2"><span>Our</span> Blog</h2>
            <div className="cws_divider mb-25 mt-5"></div>
            <p className="color-white">Vestibulum feugiat vitae tortor ut venenatis. Sed cursus, purus eu euismod bibendum, diam nisl suscipit odio, vitae ultrices mauris dolor quis mauris. Curabitur ac metus id leo maxim.</p>
          </div>
          <div className="col-md-4"><i className="flaticon-suntour-calendar title-icon alt"></i></div>
        </div>
        <div className="carousel-container">
          <div className="row">
            <div className="owl-two-pag pagiation-carousel mb-20">
              {/* Blog item */}
              <div className="blog-item clearfix">
                {/* Blog Image */}
                <div className="blog-media">
                  <a href="blog-single.html">
                    <div className="pic"><img src="pic/blog/270x270/1.jpg" data-at2x="pic/blog/270x270/1@2x.jpg" alt="" /></div>
                  </a>
                </div>
                {/* blog body */}
                <div className="blog-item-body clearfix">
                  {/* title */}
                  <a href="blog-single.html">
                    <h6 className="blog-title">Sed semper lacus et enim sodales</h6>
                  </a>
                  <div className="blog-item-data">Mon, 03-23-2016</div>
                  {/* Text Intro */}
                  <p>Etiam maximus molestie accumsan. Sed metus sapien, fermentum nec lorem ac, tempor gravida arcu.</p><a href="blog-single.html" className="blog-button">Read more</a>
                </div>
              </div>
              {/* ! Blog item */}
              {/* Blog item */}
              <div className="blog-item clearfix">
                {/* Blog Image */}
                <div className="blog-media">
                  <a href="blog-single.html">
                    <div className="pic"><img src="pic/blog/270x270/2.jpg" data-at2x="pic/blog/270x270/2@2x.jpg" alt="" /></div>
                  </a>
                </div>
                {/* blog body */}
                <div className="blog-item-body clearfix">
                  {/* title */}
                  <a href="blog-single.html">
                    <h6 className="blog-title">Aenean nec urna ullamcorper</h6>
                  </a>
                  <div className="blog-item-data">Mon, 03-23-2016</div>
                  {/* Text Intro */}
                  <p>Nullam efficitur lorem eu felis rutrum elementum. Vestibulum feugiat massa id ante scelerisque blandit.</p><a href="blog-single.html" className="blog-button">Read more</a>
                </div>
              </div>
              {/* ! Blog item */}
              {/* Blog item */}
              <div className="blog-item clearfix">
                {/* Blog Image */}
                <div className="blog-media">
                  <a href="blog-single.html">
                    <div className="pic"><img src="pic/blog/270x270/3.jpg" data-at2x="pic/blog/270x270/3@2x.jpg" alt="" /></div>
                  </a>
                </div>
                {/* blog body */}
                <div className="blog-item-body clearfix">
                  {/* title */}
                  <a href="blog-single.html">
                    <h6 className="blog-title">Etiam sit amet est et massa</h6>
                  </a>
                  <div className="blog-item-data">Mon, 03-23-2016</div>
                  {/* Text Intro */}
                  <p>urabitur rhoncus sem et eros pharetra euismod. Ut commodo sem magna, in congue ex vestibulum ut.</p><a href="blog-single.html" className="blog-button">Read more</a>
                </div>
              </div>
              {/* ! Blog item */}
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* ! latest news */}
    {/* call out section */}
    <section className="page-section pt-90 pb-80 bg-main pattern relative">
      <div className="container">
        <div className="call-out-box clearfix with-icon">
          <div className="row call-out-wrap">
            <div className="col-md-5">
              <h6 className="title-section-top gray font-4">subscribe today</h6>
              <h2 className="title-section alt-2"><span>Get</span> Latest offers</h2><i className="flaticon-suntour-email call-out-icon"></i>
            </div>
            <div className="col-md-7">
              <form action="php/contacts-process.php" method="post" className="form contact-form mt-10">
                <div className="input-container">
                  <input type="text" placeholder="Enter your email" value="" name="email" className="newsletter-field mb-0 form-row" /><i className="flaticon-suntour-email icon-left"></i>
                  <button type="submit" className="subscribe-submit"><i className="flaticon-suntour-arrow icon-right"></i></button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* ! call out section */}
    </div>
    {/* footer */}
   <Footer />
  {/* ! footer */}
  <div id="scroll-top"><i class="fa fa-angle-up"></i></div>
 
  {/* login popup */}
  
  {/* ! login popup */}
  {/* news popup */}
  <div className="news-popup">
    <div className="news-popup-wrap"><i className="close-button flaticon-close"></i>
      <div className="row">
        <div className="col-sm-6"><img src="pic/news-popup.jpg" data-at2x="pic/news-popup@2x.jpg" alt="" /></div>
        <div className="col-sm-6">
          <div className="news-content">
            <div className="news-title">
              <h2>Newsletter</h2>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
            </div>
            <form method="get" action="#" className="newsletter contact-form">
              <label className="mb-0">
                <input type="text" placeholder="Enter Your Email ..." value="" name="email" className="newsletter-field mb-0" />
              </label>
              <button type="submit" className="newsletter-submit cws-button alt">Submit</button>
            </form>
            <div className="checkbox-wrap">
              <div className="checkbox">
                <input id="checkbox40" type="checkbox" value="None" name="check" />
                <label htmlFor="checkbox40">Dont Show This Message Again</label>
              </div>
            </div>
            <div className="social-wrap"><a href="#" className="cws-social flaticon-social-4"></a><a href="#" className="cws-social flaticon-social"></a><a href="#" className="cws-social flaticon-social-3"></a><a href="#" className="cws-social flaticon-social-1"></a><a href="#" className="cws-social flaticon-social-network"></a></div>
          </div>
        </div>
      </div>
    </div>
  </div>
        </div>
);
export default Home;
