import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Comment.css';

function ReviewForm() {
    const { postId } = useParams();
    const [rating, setRating] = useState(0);
    const [text, setText] = useState('');
    const [user, setUser] = useState(null);
    const [token, setToken] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        const storedToken = localStorage.getItem('token');
        setUser(storedUser);
        setToken(storedToken);
    }, []);

    const handleRatingChange = (e) => {
        setRating(e.target.value);
    };

    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!user) {
            alert('User not logged in');
            return;
        }

        const reviewData = {
            content: text,
            rating,
            userId: user._id,
        };
        try {
            const response = await axios.post(`http://localhost:3001/post/writecomment/${postId}`, reviewData, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });

            if (response.status === 201) {
                alert('Review submitted successfully!');
                setRating(0);
                setText('');
                navigate(`/community/${postId}`);
            } else {
                console.log(response.status);
                alert('Failed to submit review.');
            }
        } catch (error) {
            alert('Error submitting review.');
            console.error(error);
        }
    };

    const handleBack = () => {
        navigate(`/community/${postId}`);
    };

    return (
        <div className="page-container" style={{ minHeight: '100vh' }}>
            <div className="content-wrap">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h4 className="trans-uppercase mb-10">Write a Comment</h4>
                            <div className="cws_divider mb-30"></div>
                        </div>
                    </div>
                    <div className="review-content pattern relative">
                        <div className="row">
                            <div className="col-md-5 mb-md-30 mb-xs-0">
                                <div className="review-total"></div>
                            </div>
                            <div className="col-md-10">
                                <div className="review-body">
                                    <form onSubmit={handleSubmit}>
                                        <div className="form-group">
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
                                        <div className="form-group">
                                            <label>Message of your review</label>
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
                                            <button type="submit" className="btn btn-primary mb-2">Add a comment</button>
                                        </div>
                                        <div className="col-md-12 text-center">
                                            <button type="button" className="btn btn-secondary" onClick={handleBack}>Back</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
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
    
}

export default ReviewForm;
