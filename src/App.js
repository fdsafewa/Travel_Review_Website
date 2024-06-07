import React from 'react';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from './pages/Home';


function App() {
  return (
    <Router>
      <div className="App">
    
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
