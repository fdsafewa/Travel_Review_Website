import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import Card from "./Card";
import "./PlaceItemPost.css";

import Fab from "@mui/material/Fab";
import EditIcon from "@mui/icons-material/Edit";
import NavigationIcon from "@mui/icons-material/Navigation";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

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
        const response = await axios.get(`http://localhost:3001/api/post/${postId}`);
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
    navigate(`/places/${postId}/writecomment`);
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

  const { title, description, image, address, comments = [] } = post;
  const imageurl = `http://localhost:3001/${image}`

  const containerStyle = {
    width: '100%',
    height: '400px'
  };

  return (
    <div className="place-item-post">
      <Card className="place-item-post__content">
        <div className="place-item-post__image">
          <img src={imageurl} alt={title} />
        </div>
        <div className="place-item-post__info">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="place-item-post__actions">
          <Fab variant="extended" onClick={handleClickOpen}>
            <NavigationIcon />
            Map
          </Fab>
          <Fab color="primary" aria-label="edit" onClick={handleClickEdit}>
            <EditIcon />
          </Fab>
        </div>
        <div className="place-item-post__comments">
          <h3>Comments</h3>
          <ul>
            {comments.map((comment, index) => (
              <li key={index}>{comment.rating} - {comment.content} - {comment.user.name}</li>
            ))}
          </ul>
        </div>
      </Card>

      <Dialog open={open} onClose={handleClose} maxWidth="lg" fullWidth>
        <DialogTitle>Map</DialogTitle>
        <DialogContent>
          {isLoaded ? (
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={coordinates}
              zoom={80}
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
  );
};

export default PlaceItemPost;
