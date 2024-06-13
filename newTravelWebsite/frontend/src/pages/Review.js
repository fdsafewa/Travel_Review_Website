import React, { useState } from 'react';
import './Review.css';

function ReviewForm() {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [images, setImages] = useState([]);

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleImageChange = (e) => {
    setImages([...e.target.files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('rating', rating);
    formData.append('comment', comment);
    images.forEach(image => formData.append('images', image));
    alert('Review submitted successfully!');
  };

  return (
    <div>
      <h1>Attraction Review</h1>
      <form onSubmit={handleSubmit} className="review-form">
        <div>
          <label>Rating (1-5)</label>
          <input type="number" value={rating} onChange={handleRatingChange} min="1" max="5" />
        </div>
        <div>
          <label>Comment</label>
          <textarea value={comment} onChange={handleCommentChange}></textarea>
        </div>
        <div>
          <label>Upload Images</label>
          <input type="file" multiple onChange={handleImageChange} />
        </div>
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
}

export default ReviewForm;
