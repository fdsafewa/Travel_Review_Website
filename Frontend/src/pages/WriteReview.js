import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const WriteReview = () => {
  const { id } = useParams(); // Get the place ID from the URL parameters
  const [placeDetails, setPlaceDetails] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    reviewText: '',
  });
  const [reviews, setReviews] = useState([]);
  const defaultImage = '/img/unnamed.jpg';

  useEffect(() => {
    const fetchPlaceDetails = async () => {
      try {
        console.log(`Fetching details for place ID: ${id}`);
        const response = await fetch(`/PlaceDetails/${id}`);
        console.log(`Response status: ${response.status}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Fetched place details:', data);
        setPlaceDetails(data);
        setReviews(data.reviews); // Set existing reviews
      } catch (error) {
        console.error('Error fetching place details:', error);
      }
    };
    fetchPlaceDetails();
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newReview = {
      userName: formData.name,
      email: formData.email,
      reviewText: formData.reviewText,
    };

    try {
      const response = await fetch(`/PlaceDetails/${id}/reviews`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newReview),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const savedReview = await response.json();
      setReviews([...reviews, savedReview]);
      setFormData({
        name: '',
        email: '',
        reviewText: '',
      });
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  if (!placeDetails) {
    return <div>Loading...</div>;
  }

  return (
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
            <div className="review-total">
              <img src={defaultImage} alt="review" />
              <div className="review-total-content">
                <h6>{placeDetails.placeName}</h6>
                <div className="stars stars-4"></div>
                <ul className="icon">
                  <li>{placeDetails.address}<i className="flaticon-suntour-map"></i></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <div className="review-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Your Email *</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Your Review *</label>
                  <textarea
                    name="reviewText"
                    className="form-control"
                    rows="5"
                    value={formData.reviewText}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="cws-button alt">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WriteReview;
