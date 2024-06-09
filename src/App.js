import React from 'react';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from './pages/Home';
import Fortest from './pages/Fortest';



function App() {
  return (
    <Router>
      <div className="App">
    
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Fortest />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
