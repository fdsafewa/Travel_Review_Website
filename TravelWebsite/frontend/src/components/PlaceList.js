import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PlaceItem from './PlaceItem';
import Card from './Card';
import './PlaceList.css';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';

const PlacesList = (props) => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/post/all");
        setPlaces(response.data);
        console.log(response);
      } catch (error) {
        console.error("Error fetching places:", error);
      }
    };

    fetchPlaces();
  }, []);

  if (props.items.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>There is no post!</h2>
        </Card>
      </div>
    );
  }

  return (
    <div className="places-list-container">
      <ul className="places-list">
        {/* {props.items.map(post => (
        <PlaceItem
          key={post.id}
          id={post.id}
          image={post.image}
          title={post.title}
        />
      ))} */}
        {places.map((place) => (
          <PlaceItem
            key={place._id}
            id={place._id}
            image={place.image}
            title={place.title}
          />
        ))}
      </ul>
      <Link to="/addplace" className="fab-link">
        <Fab color="primary" aria-label="add" className="fab-button">
          <AddIcon />
        </Fab>
      </Link>
    </div>
  );
};

export default PlacesList;
