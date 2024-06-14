import React from "react";
import "./SearchArea.css";

const SearchArea = () => {
    return (
        <div className="searchArea">
            <div className="opacity-layer"></div>
            <div className="searchContainer">
                <div className="seachAreaContent">
                    <span className="title">Welcome Back</span>
                    <span className="subTitle">
                        Where to go?
                        Explore now.
                    </span>
                    <div className="searchInput">
                        <input type="text" placeholder="Search for a place to go..."/>
                        <button>Search</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchArea;