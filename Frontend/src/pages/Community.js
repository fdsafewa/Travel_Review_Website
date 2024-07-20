import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Community() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const response = await axios.get("http://localhost:3001/post/all");
        setPlaces(response.data);
      } catch (error) {
        console.error("Error fetching places:", error);
      }
    };

    fetchPlaces();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {places.map((place) => (
          <div className="testimonial-item" key={place._id}>
            <div className="testimonial-top">
              <a href={`/hotels-details/${place._id}`}>
                <div>
                  <img src={place.image} alt={place.title} style={{ width: '740px', height: '180px', objectFit: 'cover' }} />
                </div>
              </a>
            </div>
            <div className="testimonial-body">
              <h5 className="title">
                <span>{place.authorFirstName}</span> {place.title}
              </h5>
              <p>{place.description}</p>
              <a href={`/page-about-us/${place._id}`} className="testimonial-button">Read more</a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Community;
