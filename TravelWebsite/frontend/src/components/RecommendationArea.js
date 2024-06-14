import React from "react";
import './RecommendationArea.css';

const RecommendationArea = () => {
    return (
        <div className="recommendationArea">
            <div className="recommendationAreaContainer">
                <span className="recommendationAreaTitle">You might like</span>
                <ul className="recommendationPicList">
                <li className="recommendationPicItem">pic1</li>
                <li className="recommendationPicItem">pic2</li>
                <li className="recommendationPicItem">pic3</li>
                <li className="recommendationPicItem">pic4</li>
            </ul>

            </div>

        </div>
    )
}
export default RecommendationArea;