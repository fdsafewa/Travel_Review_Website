import React from "react";
import './PopularArea.css';

const PopularArea = () => {
    return (
        <div className="popularArea">
            <div className="popularAreaContainer">
                <span className="popularAreaTitle">Popular place</span>
                <ul className="popularPicList">
                <li className="popularPicItem">pic1</li>
                <li className="popularPicItem">pic2</li>
                <li className="popularPicItem">pic3</li>
                <li className="popularPicItem">pic4</li>
            </ul>

            </div>

        </div>
    )
}
export default PopularArea;