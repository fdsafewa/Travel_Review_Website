import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const WriteReview = () => {
  const { id } = useParams(); // Get the place ID from the URL parameters
  const [placeDetails, setPlaceDetails] = useState(null);
  const [reviewText, setReviewText] = useState('');
  const [reviews, setReviews] = useState([]);
  const [user, setUser] = useState({ userId: '', userName: '' });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState('');
  const defaultImage = '/img/unnamed.jpg';

  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    // Fetch user info from localStorage
    const storedUser = JSON.parse(localStorage.getItem('user'));
    const storedToken = localStorage.getItem('token');
    if (storedUser) {
      setUser({ userId: storedUser._id, userName: storedUser.name });
      setIsLoggedIn(true);
    }
    if (storedToken) {
      setToken(storedToken);
    }

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
    setReviewText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isLoggedIn) {
      alert('You must be logged in to submit a review.');
      return;
    }

    const newReview = {
      userId: user.userId,
      userName: user.userName,
      reviewText
    };
    console.log('send',newReview)

    const data = {
      comment: reviewText,
      user_id: user.userId
    };

    try {
      const response = await fetch(`/PlaceDetails/${id}/reviews`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(newReview),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const savedReview = await response.json();
      setReviews([...reviews, savedReview]);
      setReviewText('');
      alert('Review submitted successfully!');
      window.location.reload(); // Reload the page
    } catch (error) {
      console.error('Error submitting review:', error);
    }

    try {
      const response = await fetch('/recommendation/recommend', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      setRecommendations(result);
      setReviewText('');
      alert('Recommendations retrieved successfully!');
    } catch (error) {
      console.error('Error getting recommendations:', error);
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
                  <label>Your Review *</label>
                  <textarea
                    name="reviewText"
                    className="form-control"
                    rows="5"
                    value={reviewText}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="cws-button alt">Submit</button>
                {!isLoggedIn && <p className="text-danger mt-2">You must be logged in to submit a review.</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WriteReview;
