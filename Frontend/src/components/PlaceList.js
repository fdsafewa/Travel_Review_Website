import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './PlaceList.css'; // Ensure you have the necessary CSS
import { Link } from 'react-router-dom';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

const PlacesList = () => {
  const [places, setPlaces] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const itemsPerPage = 10;

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    setIsLoggedIn(!!user);

    const fetchPlaces = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get('http://localhost:3001/post/all');
        if (response.data) {
          setPlaces(response.data);
          setTotalPages(Math.ceil(response.data.length / itemsPerPage));
        } else {
          setPlaces([]);
        }
      } catch (error) {
        setError("Error fetching places");
      } finally {
        setLoading(false);
      }
    };

    fetchPlaces();
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const formatDate = (dateString) => {
    const options = { weekday: 'short', month: '2-digit', day: '2-digit', year: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
  };

  const paginatedPlaces = places.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const popularPlaces = [...places]
    .sort((a, b) => b.comments.length - a.comments.length)
    .slice(0, 4);

  if (loading) {
    return (
      <div className="center">
        <div className="card">
          <h2>Loading...</h2>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="center">
        <div className="card">
          <h2>{error}</h2>
        </div>
      </div>
    );
  }

  if (places.length === 0) {
    return (
      <div className="center">
        <div className="card">
          <h2>There is no post!</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="content-body">
      <div className="container page">
        <div className="row">
          <div className="col-md-8">
            <div className="row blog-col">
              {paginatedPlaces.map((place) => (
                <div className="col-sm-6 col-xs-6 mb-30" key={place._id}>
                  <div className="blog-item clearfix border boxed">
                    <div className="blog-media">
                      <Link to={`/community/${place._id}`}>
                        <div className="pic">
                          <img src={place.image} alt={place.title} style={{ width: '100%', height: '270px', objectFit: 'cover' }} />
                        </div>
                      </Link>
                    </div>
                    <div className="blog-item-body clearfix">
                      <Link to={`/community/${place._id}`}>
                        <h6 className="blog-title">{place.title}</h6>
                      </Link>
                      <div className="blog-item-data">{formatDate(place.createdAt)}</div>
                      <p>{place.description}</p>
                      <Link to={`/community/${place._id}`} className="blog-button">Read more</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="row mt-0">
              <nav className="text-center">
                <ul className="pagination">
                  <li className={currentPage === 1 ? 'disabled' : ''}>
                    <a href="#" aria-label="Previous" onClick={(e) => { e.preventDefault(); if (currentPage > 1) handlePageChange(currentPage - 1); }}>
                      <span className="fa fa-angle-left"></span>
                    </a>
                  </li>
                  {[...Array(totalPages)].map((_, index) => (
                    <li key={index} className={currentPage === index + 1 ? 'active' : ''}>
                      <a href="#" onClick={(e) => { e.preventDefault(); handlePageChange(index + 1); }}>{index + 1}</a>
                    </li>
                  ))}
                  <li className={currentPage === totalPages ? 'disabled' : ''}>
                    <a href="#" aria-label="Next" onClick={(e) => { e.preventDefault(); if (currentPage < totalPages) handlePageChange(currentPage + 1); }}>
                      <span className="fa fa-angle-right"></span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="col-md-4 sidebar">
            <aside className="sb-right pb-50-imp">
              <div className="cws-widget">
                <div className="widget-post">
                  <h2 className="widget-title alt">Popular Posts</h2>
                  {popularPlaces.map((place) => (
                    <div className="item-recent clearfix" key={place._id}>
                      <div className="widget-post-media">
                        <img src={place.image} alt={place.title} style={{ width: '80px', height: '80px', objectFit: 'cover' }} />
                      </div>
                      <h3 className="title">
                        <Link to={`/community/${place._id}`}>{place.title}</Link>
                      </h3>
                      <div className="date-recent">{formatDate(place.createdAt)}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="cws-widget">
                <div className="widget-calendar">
                  <div id="calendar"></div>
                </div>
              </div>
              {isLoggedIn && (
                <Link to="/community/addpost" className="fab-link">
                  <Fab style={{ backgroundColor: '#ffc008', color: '#fff' }} aria-label="add" className="fab-button">
                    <AddIcon />
                  </Fab>
                </Link>
              )}
            </aside>
          </div>
        </div>
      </div>
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
  );
};

export default PlacesList;







