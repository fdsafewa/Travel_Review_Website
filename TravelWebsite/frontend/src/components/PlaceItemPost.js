import React from "react";

import Card from "./Card";
import "./PlaceItemPost.css";

import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import NavigationIcon from "@mui/icons-material/Navigation";

const PlaceItemPost = (props) => {
  const { title, description, image, address, comments = [] } = props.place;
  return (
    <div className="place-item-post">
      <Card className="place-item-post__content">
        <div className="place-item-post__image">
          <img src={image} alt={title} />
        </div>
        <div className="place-item-post__info">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="place-item-post__actions">
          <Fab variant="extended">
            <NavigationIcon />
            Map
          </Fab>
          <Fab color="primary" aria-label="edit">
            <EditIcon />
          </Fab>
        </div>
        <div className="place-item-post__comments">
          <h3>Comments</h3>
          <ul>
            {comments.map((comment, index) => (
              <li key={index}>{comment}</li>
            ))}
          </ul>
        </div>
      </Card>
    </div>
  );
};

export default PlaceItemPost;

