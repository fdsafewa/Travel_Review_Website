import React from 'react';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from './pages/Home';
import Fortest from './pages/Fortest';
import PlaceDetails from './pages/PlaceDetails';
import PlaceList from './pages/PlaceList';
import ScrollToTop from './components/ScrollToTop';



function App() {
  return (
    <Router>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Fortest />} />
          <Route path="/PlaceDetails/:id" element={<PlaceDetails />}/>
          <Route path="/PlaceDetails" element={<PlaceDetails />}/>
          <Route path="/placelist" element={<PlaceList />}/>
        </Routes>
    </Router>
  );
}

export default App;
