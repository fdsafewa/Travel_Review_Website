import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./components/Header";
import Places from "./pages/Places"
import PlacePost from "./pages/PlacePost"

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/places" element={<Places />} />
          <Route path="/places/:placeId" element={<PlacePost />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
