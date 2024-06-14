import React from "react";
import SearchArea from "../components/SearchArea";
import Header from "../components/Header"
import PopularArea from "../components/PopularArea"
import RecommendationArea from "../components/RecommendationArea"


const Home = () => {
    return (
        <div className="homePage">
            <SearchArea />
            <PopularArea />
            <RecommendationArea />
        </div>
    )
}

export default Home;