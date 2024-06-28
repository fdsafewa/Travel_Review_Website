import React, { useState } from 'react';
import './Recommendation.css';

const Recommendation = () => {
  const attractions = [
    { id: 1, name: "Vancouver Aquarium", img: "https://lh5.googleusercontent.com/p/AF1QipMLKmr-ooXRnYA-8vgxeH-jbMsE4GDMmVX6WTVl=w408-h306-k-no", gmap_id: 1 },
    { id: 2, name: "Vancouver Lookout", img: "https://lh5.googleusercontent.com/p/AF1QipPY8ehjvHeBdZl5zxsekCWEljAGxEupBaGRDNqm=w408-h306-k-no", gmap_id: 2 },
    { id: 3, name: "Science World", img: "https://lh3.googleusercontent.com/gps-proxy/ALd4DhGA94ageYBmZYSeSaME1AMxC3ZL4OE3cgR6xiFNreqjJr8KDWElMfQCLQHgRNGZUyivEVIXvHcPSF_rZuMVpYyremdP4tfFc3dml7fDcIQLZt1t_3RioyQTza6n6eyrxGJEN654Imhr-bBxl4ylyOkC3Kn5Yli_4uxQhHLsDkyb61Dzevu7aRsC=w408-h272-k-no", gmap_id: 3 },
    { id: 4, name: "Vancouver Seawall", img: "https://lh5.googleusercontent.com/p/AF1QipMpjGcrU70DHx1Xq7y3XnLJRloZnd1AWZikYG_4=w408-h306-k-no", gmap_id: 4 },
    { id: 5, name: "Gastown Steam Clock", img: "https://lh5.googleusercontent.com/p/AF1QipMsUVCxZQHI6snN2ogAIva5dgHCYHNES_uKftYT=w408-h541-k-no", gmap_id: 5 },
    { id: 6, name: "Stanley Park", img: "https://lh5.googleusercontent.com/p/AF1QipOzLdZQ_XM8wIH3c9uH6OaKNQpDiNjGxqrrhHl5=w408-h307-k-no", gmap_id: 6 }
  ];

  return (
    <div className="content-body">
      <div className="container page">
        <div className="work-filter menu-widget with-switch">
        </div>
        <div id="filter-grid" className="row cws-multi-col masonry">
          {attractions.map(attraction => (
            <div className="col-md-4 col-sm-6" key={attraction.id}>
              <div className="portfolio-item alt text-center">
                <div className="pic">
                  <a href={`/PlaceDetails`}>
                    <img src={attraction.img} alt={attraction.name} className="fixed-size" />
                  </a>
                  <div className="hover-effect"></div>
                  <a href={`/PlaceDetails`}>
                    <h3 className="portfolio-title">{attraction.name}</h3>
                    <div className="item-content"></div>
                  </a>
                  <div className="links">
                    <a href={attraction.img} className="fancy"><i className="fa fa-expand"></i></a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recommendation;

