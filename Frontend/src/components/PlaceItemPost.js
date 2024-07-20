import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import Card from "./Card";
import "./PlaceItemPost.css";
import Fab from "@mui/material/Fab";
import EditIcon from "@mui/icons-material/Edit";
import NavigationIcon from '@mui/icons-material/Navigation';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import StarIcon from '@mui/icons-material/Star';

const PlaceItemPost = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [coordinates, setCoordinates] = useState(null);
  const [open, setOpen] = useState(false);

  const geocodeAddress = async (address) => {
    const response = await axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
      params: {
        address: address,
        key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
      }
    });
    if (response.data.status === 'OK') {
      const location = response.data.results[0].geometry.location;
      return location;
    } else {
      throw new Error('Geocode was not successful for the following reason: ' + response.data.status);
    }
  };

  useEffect(() => {
    const fetchPlace = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/post/${postId}`);
        setPost(response.data);
        const location = await geocodeAddress(response.data.address);
        setCoordinates(location);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchPlace();
  }, [postId]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickEdit = () => {
    navigate(`/community/${postId}/writecomment`);
  };

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  if (!post) {
    return <p>Post not found</p>;
  }

  const { title, description, image, address, comments = [], user } = post;
  const imageurl = `http://localhost:3001/${image}`

  const containerStyle = {
    width: '100%',
    height: '400px'
  };

  return (
    <div>
    <div className="place-item-post">
      <Card className="place-item-post__content">
        <div className="place-item-post__left">
          <div className="place-item-post__image">
            <img src={imageurl} alt={title} />
          </div>
          <div className="place-item-post__info">
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
          <div className="place-item-post__actions">
            <div>{address}</div>
            <Fab variant="extended" onClick={handleClickOpen}>
              <NavigationIcon />
              Map
            </Fab>
          </div>
        </div>
        <div className="place-item-post__sidebar">
          <div className="place-item-post__comments">
            <h3>Comments</h3>
            <ul>
              {comments.map((comment, index) => (
                <li key={index} className="comment-item">
                  <div className="comment-header">
                    <span className="comment-user">{comment.user.name}</span>
                    <span className="comment-rating">
                      {Array.from({ length: comment.rating }, (_, i) => (
                        <StarIcon key={i} className="comment-star" />
                      ))}
                    </span>
                  </div>
                  <span className="comment-content">{comment.content}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="profile-info-container">
            <div>
            <p className="placeholder-text">Leave your thoughts...</p>
             <p>{user.name}</p>
              <p>{user.email}</p>
            </div>
         
            <Fab color="primary" aria-label="edit" onClick={handleClickEdit}>
              <EditIcon />
            </Fab>
          </div>
        </div>
        </Card>

      <Dialog open={open} onClose={handleClose} maxWidth="lg" fullWidth>
        <DialogTitle>Map</DialogTitle>
        <DialogContent>
          {isLoaded ? (
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={coordinates}
              zoom={15}
            >
              <Marker position={coordinates} />
            </GoogleMap>
          ) : (
            <p>Loading map...</p>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
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

export default PlaceItemPost;


