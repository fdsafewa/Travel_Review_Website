import React from 'react';
import { Link } from 'react-router-dom';

import Avatar from './Avatar';
import Card from './Card';
import './PlaceItem.css';

const PlaceItem = props => {
  return (
    <li className="place-item">
      <Card className="place-item__content">
        <Link to={`/places/${props.id}`}>
          <div className="place-item__image">
            <Avatar image={props.image} alt={props.name} />
          </div>
          <div className="place-item__info">
            <h2>{props.title}</h2>
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default PlaceItem;

