import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SearchResult = () => {
  const location = useLocation();
  const { results } = location.state || { results: [] };
  const [places, setPlaces] = useState(results);
  const [currentPage, setCurrentPage] = useState(1);
  const [placesPerPage] = useState(10);

  useEffect(() => {
    setPlaces(results);
  }, [results])

  // Get current places
  const indexOfLastPlace = currentPage * placesPerPage;
  const indexOfFirstPlace = indexOfLastPlace - placesPerPage;
  const currentPlaces = places.slice(indexOfFirstPlace, indexOfLastPlace);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div>
      <section
        style={{ backgroundImage: "url('pic/breadcrumbs/bg-1.jpg')" }}
        className="breadcrumbs"
      >
        <div className="container">
          <div className="text-left breadcrumbs-item">
            <Link to="/">home</Link>
            <i>/</i>
            <Link to="/places">places</Link>
            <i>/</i>
            <span className="last">Places List</span>
            <h2>
              <span>Places</span> List
            </h2>
          </div>
        </div>
      </section>
      <div className="content-body">
        <div className="container page">
          <div className="row">
            <div className="col-md-12">
              <h1>Places</h1>
              <div className="row">
                {currentPlaces.map((place) => (
                  <div key={place._id} className="col-md-6">
                    <div className="recom-item border">
                      <div className="recom-media">
                        <Link to={`/PlaceDetails/${place._id}`}>
                          <div className="pic">
                            <img 
                              src={place.photos && place.photos.length > 0 ? place.photos[0] : 'pic/recomended/1.jpg'} 
                              alt={place.placeName} 
                              style={{ width: '770px', height: '240px', objectFit: 'cover' }}
                            />
                          </div>
                        </Link>
                        <div className="location">
                          <i className="flaticon-suntour-map"></i> {place.address}
                        </div>
                      </div>
                      <div className="recom-item-body">
                        <Link to={`/PlaceDetails/${place._id}`}>
                          <h6 className="blog-title">{place.placeName}</h6>
                        </Link>
                        <div className="stars stars-4">{place.rating}</div>
                        <p className="mb-30">{place.description}</p>
                        <Link to={`/PlaceDetails/${place._id}`} className="cws-button small alt">Read More</Link>
                        <div className="action font-2">New</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Pagination
                placesPerPage={placesPerPage}
                totalPlaces={places.length}
                paginate={paginate}
              />
            </div>
          </div>
        </div>
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
      </div>
    </div>
  );
};

const Pagination = ({ placesPerPage, totalPlaces, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPlaces / placesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
            <a 
              onClick={(e) => {
                e.preventDefault();
                paginate(number);
              }} 
              href="!#" 
              className="page-link"
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SearchResult;
