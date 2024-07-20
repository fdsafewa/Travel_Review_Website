import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./AddPost.css";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    const storedToken = localStorage.getItem('token');
    console.log('token', storedToken)
    setUser(storedUser);
    setToken(storedToken);
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!user || !user._id) {
      alert('User not authenticated.');
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('address', address);
    formData.append('image', image);
    formData.append('userId', user._id);

    try {
      const response = await axios.post('http://localhost:3001/post', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.status === 201) {
        console.log('Post created successfully:', response.data);

        setTitle('');
        setDescription('');
        setAddress('');
        setImage(null);
        setImagePreview(null);

        alert('Post created successfully!');
        
        setTimeout(() => {
          navigate('/community');
        }, 200);
      } else {
        console.error('Error creating post:', response.data);

        alert('Error creating post.');
      }
    } catch (error) {
      console.error('Error creating post:', error);

      alert('Error creating post.');
    }
  };

  return (
    <div className="page-container" style={{ minHeight: '120vh' }}>
      <div className="content-wrap">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h4 className="trans-uppercase mb-3">Add a New Post</h4>
              <div className="cws_divider mb-4"></div>
            </div>
          </div>
          <div className="review-content pattern relative">
            <div className="row">
              <div className="col-md-6 mb-md-30 mb-xs-0">
                <div className="form-group image-preview">
                  {imagePreview ? (
                    <img src={imagePreview} alt="Image Preview" />
                  ) : (
                    <div className="image-placeholder">Image Preview</div>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="review-body">
                  <form onSubmit={handleSubmit} className="form clearfix">
                    <div className="form-group">
                      <label htmlFor="image">Upload Photo</label>
                      <input
                        type="file"
                        id="image"
                        accept="image/*"
                        onChange={handleImageChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Title</label>
                      <input
                        type="text"
                        id="title"
                        value={title}
                        className="form-control"
                        onChange={(e) => setTitle(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="description">Description</label>
                      <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="form-control"
                        rows="4"
                        required
                      ></textarea>
                    </div>
                    <div className="form-group">
                      <label>Address</label>
                      <input
                        type="text"
                        id="address"
                        value={address}
                        className="form-control"
                        onChange={(e) => setAddress(e.target.value)}
                        required
                      />
                    </div>
                    <button type="submit" className="btn btn-primary mb-2">Submit</button>
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
};

export default AddPost;


