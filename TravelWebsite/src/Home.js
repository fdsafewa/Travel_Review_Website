import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import EditPlace from "./pages/EditPlace";
import AddPlace from "./pages/AddPlace";

const Home = () => {
    return (

      <div className="App">
         <BrowserRouter>
        <Routes>
          <Route path="/" element={<AddPlace />} />
          <Route path="/editplace" element={<EditPlace />} />
        </Routes>
        </BrowserRouter>
      </div>
    );
  };

export default Home;
