import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const RecommendList = () => {
  const [recommendations, setRecommendations] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [placesPerPage] = useState(10);
  
  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user || !user._id) {
          throw new Error('User not authenticated');
        }
        
        const response = await fetch(`http://localhost:3001/recommendation/${user._id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok due to ');
        }
        const data = await response.json();
        console.log('Fetched recommendations:', data); // Debug log
        setRecommendations(data);
      } catch (error) {
        console.error('Error fetching recommendations:', error);
      }
    };

    fetchRecommendations();
  }, []);

  // Get current recommendations
  const indexOfLastRecommendation = currentPage * placesPerPage;
  const indexOfFirstRecommendation = indexOfLastRecommendation - placesPerPage;
  const currentRecommendations = recommendations.slice(indexOfFirstRecommendation, indexOfLastRecommendation);
  console.log(currentRecommendations)

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
            <span className="last">Recommendations List</span>
            <h2>
              <span>Recommendations</span> List
            </h2>
          </div>
        </div>
      </section>
      <div className="content-body">
        <div className="container page">
          <div className="row">
            <div className="col-md-12">
              <h1>Recommendations</h1>
              <div className="row">
                {currentRecommendations.map((recommendation) => (
                  <div key={recommendation._id} className="col-md-6">
                    <div className="recom-item border">
                      <div className="recom-media">
                        <a href={`/PlaceDetails/${recommendation._id}`}>
                          <div className="pic">
                            <img 
                              src={recommendation.photos && recommendation.photos.length > 0 ? recommendation.photos[0] : 'pic/recomended/1.jpg'} 
                              alt={recommendation.placeName} 
                              style={{ width: '770px', height: '240px', objectFit: 'cover' }}
                            />
                          </div>
                        </a>
                        <div className="location">
                          <i className="flaticon-suntour-map"></i> {recommendation.address}
                        </div>
                      </div>
                      <div className="recom-item-body">
                        <a href={`/PlaceDetails/${recommendation._id}`}>
                          <h6 className="blog-title">{recommendation.placeName}</h6>
                        </a>
                        <div className="stars stars-4">{recommendation.rating}</div>
                        <p className="mb-30">{recommendation.description}</p>
                        <a href={`/PlaceDetails/${recommendation._id}`} className="cws-button small alt">Read More</a>
                       
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Pagination
                placesPerPage={placesPerPage}
                totalPlaces={recommendations.length}
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

export default RecommendList;
