import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from "../context/AuthContext";
import './Comment.css';

function ReviewForm() {
    const { postId } = useParams();
    const { auth } = useContext(AuthContext);
    const [rating, setRating] = useState(0);
    const [text, setText] = useState('');

    const handleRatingChange = (e) => {
        setRating(e.target.value);
    };

    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!auth.isAuthenticated) {
            alert('User not logged in');
            return;
        }

        const reviewData = {
            content: text,
            rating,
            userId: auth.user._id,  
        };
        try {
            const response = await axios.post(`http://localhost:3001/api/post/writecomment/${postId}`, reviewData, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (response.status === 201) {
                alert('Review submitted successfully!');
                setRating(0);
                setText('');
            } else {
                console.log(response.status)
                alert('Failed to submit review.');
            }
        } catch (error) {
            alert('Error submitting review.');
            console.error(error);
        }
    };

    return (
        <div className="container review-form-container">
            <div className="row">
                <div className="col-12 text-center">
                    <h4 className="trans-uppercase mb-3">Write a Comment</h4>
                    <div className="cws_divider mb-4"></div>
                </div>
            </div>
            <div className="review-content pattern relative">
                <form onSubmit={handleSubmit} className="form clearfix">
                    <div className="row">
                        <div className="col-md-12 mb-3">
                            <label>Rating</label>
                            <input
                                type="range"
                                value={rating}
                                onChange={handleRatingChange}
                                min="1"
                                max="5"
                                step="1"
                                className="form-range"
                                required
                            />
                            <span className="rating-value">{rating}</span>
                        </div>
                        <div className="col-md-12 mb-3">
                            <textarea
                                name="text"
                                placeholder="Message of your review"
                                value={text}
                                onChange={handleTextChange}
                                className="form-control"
                                rows="4"
                                required
                            ></textarea>
                        </div>
                        <div className="col-md-12 text-center">
                            <button type="submit" className="btn btn-primary">Add a comment</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ReviewForm;
