import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from './pages/Home';
import Fortest from './pages/Fortest';
import PlaceDetails from './pages/PlaceDetails';
import Pic from './pages/Pic';
import Review from './pages/Review';
import Register from "./pages/Register";
import Login from "./pages/Login";
import ResetAccount from "./pages/resetAccount";
import Recommendation from './pages/Recommendation';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Fortest />} />
          <Route path="/PlaceDetails" element={<PlaceDetails />} />
          <Route path="/Pic" element={<Pic />} />
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/resetAccount" element={<ResetAccount/>}/>
          <Route path="/Review" element={<Review />} />
          <Route path="/recommendation/:user_id" element={<Recommendation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
