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
                <div data-count="345" className="counter">Tours</div>

              </div>
            </div>
          </div>
          <div className="col-md-2 col-xs-6 mb-md-30">
            <div className="counter-block with-divider"><i className="counter-icon flaticon-suntour-fireworks"></i>
              <div className="counter-name-wrap">
                <div data-count="438" className="counter">Cheer</div>
              </div>
            </div>
          </div>
          <div className="col-md-2 col-xs-6 mb-md-30">
            <div className="counter-block with-divider"><i className="counter-icon flaticon-suntour-hotel"></i>
              <div className="counter-name-wrap">
                <div data-count="526" className="counter">Facility</div>
              </div>
            </div>
          </div>
          <div className="col-md-2 col-xs-6 mb-md-30">
            <div className="counter-block with-divider"><i className="counter-icon flaticon-suntour-ship"></i>
              <div className="counter-name-wrap">
                <div data-count="169" className="counter">Sea</div>
              </div>
            </div>
          </div>
          <div className="col-md-2 col-xs-6">
            <div className="counter-block with-divider"><i className="counter-icon flaticon-suntour-airplane"></i>
              <div className="counter-name-wrap">
                <div data-count="293" className="counter">Sky</div>
              </div>
            </div>
          </div>
          <div className="col-md-2 col-xs-6">
            <div className="counter-block with-divider"><i className="counter-icon flaticon-suntour-car"></i>
              <div className="counter-name-wrap">
                <div data-count="675" className="counter">Drive</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* ! counter section */}


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
