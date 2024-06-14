import React from 'react';

import PlaceItemPost from '../components/PlaceItemPost';

const Mock_PlacePost = {
    id: 'id1',
    title: 'Bridge',
    description: 'Absolutely beautiful, I highly recommend you visit.',
    image: 'https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg',
    address: '3211 Grant McConachie Wy, Richmond, BC V7B 0A4',
    location: {
      lat: 49.19631300056094, 
      lng: -123.17505452981071,
    },
    creator: 'user1',
    comments: [
        'Amazing!',
        'A great place.',
        'Would love to come back here again!'
      ]}

const PlacePost = () => {

  return <PlaceItemPost place={Mock_PlacePost} />;
};

export default PlacePost;