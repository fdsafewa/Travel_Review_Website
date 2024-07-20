import React from 'react';
import { BrowserRouter as Router, Route,Routes, Navigate} from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from './pages/Home';
import Fortest from './pages/Fortest';
import PlaceDetails from './pages/PlaceDetails';
import PlaceList from './pages/PlaceList';
import Review from './pages/Review';
import Register from "./pages/Register";
import Login from "./pages/Login";
import './App.css';
import ResetAccount from "./pages/resetAccount";
import SearchPage from './pages/SearchPage';
import SearchResult from './pages/SearchResult';
import AddPlace from './pages/AddPlace';
import Community from './pages/Community';
import Posts from './pages/Posts';
import PlacePost from "./pages/PlacePost";
import AddPost from "./pages/AddPost";
import WriteComment from "./pages/WriteComment";
import Header from './components/Header';
import Footer from './components/Footer';
import RecommendationList from './pages/RecommendationList';


const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');
  if (!token || role !== '0') { // Redirect if not logged in or not admin
    return <Navigate to="/" />;
  }
  return children;
};

function App() {
  return (
    <Router>
      <Header/>
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Fortest />} />
          <Route path="/Community" element={<Posts />} />
          <Route path="/Community/:postId" element={<PlacePost />} />
          <Route path="/Community/:postId/writecomment" element={<WriteComment />} />
          
          <Route path="/Community/addpost" element={<AddPost />} />
          <Route path="/PlaceDetails/:id" element={<PlaceDetails />}/>
          <Route path="/PlaceDetails" element={<PlaceDetails />}/>
          <Route path="/placelist" element={<PlaceList />}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/resetAccount" element={<ResetAccount/>}/>
          <Route path="/Review" element={<Review />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/searchResult" element={<SearchResult />} />
          <Route path="/recommendationlist" element={<RecommendationList />} />
          <Route
        path="/addplace"
        element={
          <PrivateRoute>
            <AddPlace />
          </PrivateRoute>
        }
      />
        </Routes>
    </Router>
  );
}

export default App;
