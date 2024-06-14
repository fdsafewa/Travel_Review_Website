import React from 'react';

import PlaceItem from './PlaceItem';
import Card from './Card';
import './PlaceList.css';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';

const PlacesList = props => {
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
      {props.items.map(user => (
        <PlaceItem
          key={user.id}
          id={user.id}
          image={user.image}
          title={user.title}
        />
      ))}
    </ul>
    <Link to="/addplace" className="fab-link">
      <Fab
      color="primary"
      aria-label="add"
      className="fab-button"
    >
      <AddIcon />
    </Fab>
    </Link>
  </div>
  );
};

export default PlacesList;
