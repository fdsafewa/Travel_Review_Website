import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./components/Header";
import Places from "./pages/Places";
import PlacePost from "./pages/PlacePost";
import AddPlace from "./pages/AddPlace";
import WriteComment from "./pages/WriteComment";
import AuthProvider from "./context/AuthContext";

const App = () => {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/places" element={<Places />} />
            <Route path="/places/:postId" element={<PlacePost />} />
            <Route path="/addplace" element={<AddPlace />} />
            <Route path="/places/:postId/writecomment" element={<WriteComment />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
};

export default App;
