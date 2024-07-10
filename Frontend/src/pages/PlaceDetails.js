import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ImageSlide from './ImageSlider'; // Assuming you have an ImageSlider component
import WriteReview from './WriteReview';
import '../styles/placeDetails.css';

const PlaceDetails = () => {
  const { id } = useParams(); // Get the place ID from the URL parameters
  const [placeDetails, setPlaceDetails] = useState(null);
  const defaultImage = '/img/unnamed.jpg';


  useEffect(() => {
    const fetchPlaceDetails = async () => {
      try {
        const response = await fetch(`/PlaceDetails/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPlaceDetails(data);
      } catch (error) {
        console.error('Error fetching place details:', error);
      }
    };
    fetchPlaceDetails();
  }, [id]);

  const slides = placeDetails ? placeDetails.photos.map((photo) => ({ url: photo })) : [];

  return (
    <div>
      <Header />
      {placeDetails ? (
        <>
          <section style={{ backgroundImage: "url('pic/breadcrumbs/bg-2.jpg')" }} className="breadcrumbs style-2 gray-90">
            <div className="container">
              <div className="text-left breadcrumbs-item">
                <Link to="/">home</Link><i>/</i><Link to="/hotels">places</Link><i>/</i><span className="last">{placeDetails.placeName}</span>
                <h2><span>Place</span> {placeDetails.placeName}<span className="stars stars-4"><span>{placeDetails.rating} stars</span></span></h2>
                <div className="location"><i className="flaticon-suntour-map"></i>
                  <p className="font-4">{placeDetails.address}</p><a href="#location" className="scrollto">Show map</a>
                </div>
              </div>
            </div>
          </section>

          <div className="content-body">
            <section className="page-section pt-0 pb-50">
              <div className="container">
                <div className="menu-widget with-switch mt-30 mb-30">
                  <ul className="magic-line">
                    <li className="current_item"><a href="#overview" className="scrollto">Overview</a></li>
                    <li><a href="#prices" className="scrollto">Prices</a></li>
                    <li><a href="#location" className="scrollto">Location</a></li>
                    <li><a href="#amenities" className="scrollto">Amenities</a></li>
                    <li><a href="#reviews" className="scrollto">Reviews ({placeDetails.reviewsCount}) <span className="stars stars-5"></span></a></li>
                  </ul>
                </div>
              </div>
              <div className='container'>
                <ImageSlide slides={slides} />
              </div>
              <div className="container mt-30">
                <h4 className="mb-20">Description</h4>
                <div className="row">
                  <div className="col-md-8">
                    <p className="mb-15">{placeDetails.description}</p>
                  </div>
                </div>
              </div>
              <div id="location" className="container mb-50">
                <div className="row">
                  <div className="col-md-12">
                    <h4 className="trans-uppercase mb-10">Location</h4>
                    <div className="cws_divider mb-30"></div>
                    <div className="map-wrapper">
                      <iframe src={placeDetails.location.mapUrl} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <ul className="icon inline mt-20">
                      <li><a href="#">{placeDetails.location.address}<i className="flaticon-suntour-map"></i></a></li>
                      <li><a href="#">{placeDetails.location.phone}<i className="flaticon-suntour-phone"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div id="amenities" className="container mb-50">
                <div className="row">
                  <div className="col-md-12">
                    <h4 className="trans-uppercase mb-10">Opening Hours</h4>
                    <div className="cws_divider mb-10"></div>
                  </div>
                </div>
                <div className="row mt-0 masonry">
                  <div className="col-md-3 col-sm-6">
                    {placeDetails.openingHours.weekday_text.length > 0 ? (
                      <ul className="style-1">
                        {placeDetails.openingHours.weekday_text.map((day, index) => (
                          <li key={index}>{day}</li>
                        ))}
                      </ul>
                    ) : (
                      <p>No opening hours available</p>
                    )}
                  </div>
                </div>
              </div>
              <div id="amenities" className="container mb-50">
                <div className="row">
                  <div className="col-md-12">
                    <h4 className="trans-uppercase mb-10">Types</h4>
                    <div className="cws_divider mb-10"></div>
                  </div>
                </div>
                <div className="row mt-0 masonry">
                  <div className="tags-container">
                    {placeDetails.finalTags.map((tag, index) => (
                      <span className="tag" key={index}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div id="amenities" className="container mb-50">
                <div className="row">
                  <div className="col-md-12">
                    <h4 className="trans-uppercase mb-10">Convenience</h4>
                    <div className="cws_divider mb-10"></div>
                  </div>
                </div>
                <div className="row mt-0 masonry">
                  <div className="col-md-3 col-sm-6">
                    <h6 className="trans-uppercase">Accessibility</h6>
                    <ul className="style-1">
                      {placeDetails.convenience.accessibility.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <h6 className="trans-uppercase">Amenities</h6>
                    <ul className="style-1">
                      {placeDetails.convenience.amenities.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <h6 className="trans-uppercase">Children</h6>
                    <ul className="style-1">
                      {placeDetails.convenience.children.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <h6 className="trans-uppercase">Pets</h6>
                    <ul className="style-1">
                      {placeDetails.convenience.pets.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
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
                      <div className="reviews-sub-mark">{placeDetails.rating}</div>
                      <div className="stars-perc"><span style={{ width: '85%' }}></span><span>Based on {placeDetails.reviewsCount} reviews</span></div>
                    </div>
                  </div>
                  <div className="comments">
                    {placeDetails.reviews.map((review, index) => (
                      <div key={index} className="comment-body">
                        <div className="avatar"><img src={review.profileImage || defaultImage} alt="review" /></div>
                        <div className="comment-info">
                          <div className="comment-meta">
                            <div className="title">
                              <h5> <span>{review.userName}</span></h5>
                            </div>
                            <div className="comment-date">
                              <div className="stars stars-5">{review.rating}</div><span>{review.reviewDate}</span>
                            </div>
                          </div>
                          <div className="comment-content">
                            <p>{review.reviewText}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="reviews-bottom">
                    <h4>You've been in this place?</h4>
                  </div>
                </div>
              </div>
              <WriteReview />
            </section>
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
          </div>
        </>
      ) : (
        <div className="container">
          <p>Loading place details...</p>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default PlaceDetails;
