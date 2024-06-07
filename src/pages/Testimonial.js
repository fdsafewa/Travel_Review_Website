import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Testimonial() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
          {/* testimonial carousel */}
            {/* testimonial item */}
            <div className="testimonial-item">
              <div className="testimonial-top">
                <a href="hotels-details.html">
                  <div className="pic"><img src="pic/testimonial/top-bg/1.jpg" data-at2x="pic/testimonial/top-bg/1@2x.jpg" alt="" /></div>
                </a>
                <div className="author"><img src="pic/testimonial/author/1.jpg" data-at2x="pic/testimonial/author/1@2x.jpg" alt="" /></div>
              </div>
              {/* testimonial content */}
              <div className="testimonial-body">
                <h5 className="title"><span>Nicole</span> Beck</h5>
                <div className="stars stars-5"></div>
                <p className="align-center">Suspe blandit orci quis lorem eleifend maximus. Quisque nec.</p><a href="page-about-us.html" className="testimonial-button">Read more</a>
              </div>
            </div>
            {/* testimonial item */}
            <div className="testimonial-item">
              <div className="testimonial-top">
                <a href="hotels-details.html">
                  <div className="pic"><img src="pic/testimonial/top-bg/2.jpg" data-at2x="pic/testimonial/top-bg/2@2x.jpg" alt="" /></div>
                </a>
                <div className="author"><img src="pic/testimonial/author/2.jpg" data-at2x="pic/testimonial/author/2@2x.jpg" alt="" /></div>
              </div>
              {/* testimonial content */}
              <div className="testimonial-body">
                <h5 className="title"><span>Peter</span> Robertson</h5>
                <div className="stars stars-5"></div>
                <p className="align-center">Nulla elit justo, dapibus ut lacus ac, ornare elementum neque.</p><a href="page-about-us.html" className="testimonial-button">Read more</a>
              </div>
            </div>
            {/* testimonial item */}
            <div className="testimonial-item">
              <div className="testimonial-top">
                <a href="hotels-details.html">
                  <div className="pic"><img src="pic/testimonial/top-bg/3.jpg" data-at2x="pic/testimonial/top-bg/3@2x.jpg" alt="" /></div>
                </a>
                <div className="author"><img src="pic/testimonial/author/3.jpg" data-at2x="pic/testimonial/author/3@2x.jpg" alt="" /></div>
              </div>
              {/* testimonial content */}
              <div className="testimonial-body">
                <h5 className="title"><span>Kathy</span> Harrison</h5>
                <div className="stars stars-5"></div>
                <p className="align-center">Maece facilisis sit amet mauris eget aliquam. Integer vitae.</p><a href="page-about-us.html" className="testimonial-button">Read more</a>
              </div>
            </div>
            {/* testimonial item */}
            <div className="testimonial-item">
              <div className="testimonial-top">
                <a href="hotels-details.html">
                  <div className="pic"><img src="pic/testimonial/top-bg/1.jpg" data-at2x="pic/testimonial/top-bg/1@2x.jpg" alt="" /></div>
                </a>
                <div className="author"><img src="pic/testimonial/author/1.jpg" data-at2x="pic/testimonial/author/1@2x.jpg" alt="" /></div>
              </div>
              {/* testimonial content */}
              <div className="testimonial-body">
                <h5 className="title"><span>Nicole</span> Beck</h5>
                <div className="stars stars-5"></div>
                <p className="align-center">Suspe blandit orci quis lorem eleifend maximus. Quisque nec.</p><a href="page-about-us.html" className="testimonial-button">Read more</a>
              </div>
            </div>
         
    
      </Slider>
    </div>
  );
}

export default Testimonial;