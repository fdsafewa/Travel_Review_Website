import React from 'react';

import PlaceList from '../components/PlaceList';
import Header from '../components/Header';

const Posts = () => {
  const Mock_Placelist = [
    {
      id: 'id1',
      title: 'Bridge',
      image:
        'https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg',
    },
    {
      id: 'id2',
      title: 'Lake',
      image:
        'https://images.pexels.com/photos/533769/pexels-photo-533769.jpeg',
    },
    {
      id: 'id3',
      title: 'Sea',
      image:
        'https://images.pexels.com/photos/678725/pexels-photo-678725.jpeg',
    },
    {
      id: 'id4',
      title: 'Volcano',
      image:
        'https://images.pexels.com/photos/163992/pexels-photo-163992.jpeg',
    },
    {
      id: 'id5',
      title: 'Building',
      image:
        'https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg',
    },
    {
      id: 'id6',
      title: 'Clock Tower',
      image:
        'https://images.pexels.com/photos/372490/pexels-photo-372490.jpeg',
    },

  ];

  return (
    <>
    <PlaceList/>
    </>
  
  )
};

export default Posts;
