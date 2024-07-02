import React, { useState } from 'react';
import '../styles/Review.css';

function ReviewForm() {
  const [rating, setRating] = useState(0);
  const [text, setText] = useState('');
  const [user_id, setUserId] = useState('');
  const [gmap_id, setGmapId] = useState('');

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleUserIdChange = (e) => {
    setUserId(e.target.value);
  };

  const handleGmapIdChange = (e) => {
    setGmapId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const reviewData = {
      user_id,
      gmap_id,
      rating,
      text,
    };
    alert('Review submitted successfully!');
  };

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
              <div className="review-total-content">
                <h6>Attraction Name</h6>
                <div className={`stars stars-${Math.round(rating)}`}></div>
                <ul className="icon">
                  <li>Location</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="form clearfix">
          <div className="row">
            <div className="col-md-4">
              <input type="text" name="userId" placeholder="User ID" value={user_id} onChange={handleUserIdChange} className="form-row form-row-first" required />
            </div>
            <div className="col-md-4">
              <input type="text" name="gmapId" placeholder="Gmap ID" value={gmap_id} onChange={handleGmapIdChange} className="form-row form-row-first" required />
            </div>
            <div className="col-md-4">
              <label>Rating</label>
              <input type="range" value={rating} onChange={handleRatingChange} min="1" max="5" step="1" required />
              <span>{rating}</span>
            </div>
            <div className="col-md-12">
              <textarea name="text" placeholder="Message of your review" value={text} onChange={handleTextChange} className="mb-20" rows="4" required></textarea>
              <input type="submit" value="Add a review" className="cws-button alt float-right" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ReviewForm;
