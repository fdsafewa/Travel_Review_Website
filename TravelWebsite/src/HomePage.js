import React from "react";
import SearchArea from "./SearchArea";
import Header from "./Header"
import PopularArea from "./PopularArea"
import RecomendationArea from "./RecomendationArea"
import "./HomePage.css";


const HomePage = () => {
    return (
        <div className="homePage">
            <Header/>
            <SearchArea />
            <PopularArea />
            <RecomendationArea />
        </div>
    )
}

export default HomePage;