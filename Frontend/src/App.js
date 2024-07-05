import React from 'react';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from './pages/Home';
import Fortest from './pages/Fortest';
import PlaceDetails from './pages/PlaceDetails';
import PlaceList from './pages/PlaceList';
import ScrollToTop from './components/ScrollToTop';
import Review from './pages/Review';
import Register from "./pages/Register";
import Login from "./pages/Login";
import './App.css';
import ResetAccount from "./pages/resetAccount";



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
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/resetAccount" element={<ResetAccount/>}/>
          <Route path="/Review" element={<Review />} />
        </Routes>
    </Router>
  );
}

export default App;
