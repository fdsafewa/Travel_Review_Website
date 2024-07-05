import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Footer from '../components/Footer';
import ImageSlide from "./ImageSlider";
import WriteReview from './WriteReview';
import '../styles/placeDetails.css';


const PlaceDetails = () => {
  const { id } = useParams(); // Get the place ID from the URL parameters
  const [placeDetails, setPlaceDetails] = useState(null);
  const defaultImage = '/img/unnamed.jpg';
  const mapToTags = (tags, description) => {
    const tagMapping = {
      nature: ['park', 'natural_feature', 'lagoon', 'wildlife', 'beach'],
      cultural: ['museum', 'art_gallery', 'cultural_center', 'historic', 'monument', 'landmark', 'totem'],
      recreational: ['recreation', 'path', 'hiking', 'scenic', 'trails'],
      family: ['family_friendly', 'kids', 'aquarium', 'interactive', 'science', 'aviary'],
      landmark: ['tower', 'clock', 'iconic', 'rock', 'landmark'],
      commercial: ['shopping_mall', 'store', 'market', 'restaurant', 'cafe', 'bar', 'night_club', 'complex'],
      popular: ['popular', 'tourist_attraction', 'point_of_interest', 'establishment'],
    };
  
    const descriptionMapping = {
      nature: ['lagoon', 'fountain', 'wildlife', 'park', 'flowers', 'garden', 'greenery', 'birds', 'plants'],
      cultural: ['historic', 'clock', 'antique', 'monument', 'conservation', 'museum', 'art', 'exhibits', 'galleries'],
      recreational: ['scenic', 'walking', 'jogging', 'cycling', 'skating', 'recreation'],
      family: ['kid-friendly', 'family', 'interactive', 'educational', 'science', 'aviary'],
      landmark: ['landmark', 'iconic', 'tower', 'rock', 'views', 'sightseeing'],
      commercial: ['complex', 'convention', 'shopping', 'dining', 'hotel', 'ferry', 'restaurant', 'market'],
      popular: ['popular', 'tourist', 'attraction', 'sightseeing'],
    };
  
    const finalTags = new Set();
  
    tags.forEach(tag => {
      if (tag.includes('_')) {
        for (const [key, values] of Object.entries(tagMapping)) {
          if (values.includes(tag)) {
            finalTags.add(key);
            break;
          }
        }
      } else {
        finalTags.add(tag);
      }
    });
  
    // Map description
    for (const [key, values] of Object.entries(descriptionMapping)) {
      if (values.some(word => description.toLowerCase().includes(word))) {
        finalTags.add(key);
      }
    }
    
    return Array.from(finalTags);
  };
  
  
  
  useEffect(() => {
    const fetchPlaceDetails = async () => {
      try {
        //console.log(`Fetching details for place ID: ${id}`);
        const response = await fetch(`/PlaceDetails/${id}`);
        //console.log(`Response status: ${response.status}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        //console.log('Fetched place details:', data);
        setPlaceDetails(data);
      } catch (error) {
        console.error('Error fetching place details:', error);
      }
    };
    fetchPlaceDetails();
  }, [id]);

  useEffect(() => {
    const storeFinalTags = async () => {
      if (placeDetails) {
        const finalTags = mapToTags(placeDetails.tags, placeDetails.description);

        try {
          await axios.put(`/PlaceDetails/${id}`, { finalTags });
          console.log('Final tags stored to database:', finalTags);
        } catch (error) {
          console.error('Error storing final tags:', error);
        }
      }
    };
    storeFinalTags();
  }, [placeDetails, id]);

  if (!placeDetails) {
    return <div>Loading...</div>;
  }
  const finalTags = mapToTags(placeDetails.tags, placeDetails.description);
  const slides = placeDetails.photos.map((photo) => ({url:photo}));

  return (
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
                    <li><Link to="/">Standard Slider</Link></li>
                    <li><Link to="/index-search">Main Search</Link></li>
                    <li><Link to="/index-slider">Full Slider</Link></li>
                    <li><Link to="/index-video">Video Slider</Link></li>
                  </ul>
                </li>
                {/* End Item With Sub */}
                <li className="slash">/</li>
                {/* Item With Sub */}
                <li>
                  <Link to="/hotels-search" className="mn-has-sub active">Places <i className="fa fa-angle-down button_open"></i></Link>
                  {/* Sub */}
                  <ul className="mn-sub">
                    <li><Link to="/hotels-list">Places list</Link></li>
                    <li><Link to="/hotels-search">Places search</Link></li>
                    <li className="active"><Link to="/hotels-details">Places details</Link></li>
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
                        <li><Link to="/page-process">Our Process</Link></li>
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
        {/* Breadcrumbs start */}
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
        {/* Breadcrumbs end */}
      </header>
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
         
          {/* Section location */}
          <div id="location" className="container mb-50">
            <div className="row">
              <div className="col-md-12">
                <h4 className="trans-uppercase mb-10">Location</h4>
                <div className="cws_divider mb-30"></div>
                {/* Google map */}
                <div className="map-wrapper">
                <iframe src={placeDetails.location.mapUrl} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
            {finalTags.map((tag, index) => (
              <span className="tag" key={index}>{tag}</span>
            ))}
          </div>
            </div>
          </div>
          {/* Section amenities */}
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
          {/* Section reviews */}
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
                    <div className="avatar"><img src={review.profileImage||defaultImage} alt="review" /></div>
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
          {/* Review */}
         <WriteReview />
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default PlaceDetails;

