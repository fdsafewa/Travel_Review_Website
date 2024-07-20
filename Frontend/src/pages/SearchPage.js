import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SearchPage.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SearchPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    // Fetch search results from the backend
    try {
      const response = await fetch(`http://localhost:3001/search?query=${searchQuery}`);
      const results = await response.json();
      navigate('/searchresult', { state: { results } });
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  return (
    <div className="page-container">
      <div className="content-wrap">
        <div className="search-page">
          <div className="search-container">
            <form className="search-form" onSubmit={handleSearchSubmit}>
              <input
                type="text"
                className="search-input"
                placeholder="Where will you go next?"
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <button type="submit" className="search-button">
                <i className="flaticon-suntour-search"></i>
              </button>
            </form>
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

export default SearchPage;



