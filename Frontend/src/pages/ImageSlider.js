import React from 'react';
import { useState } from "react";
const ImageSlider = ({ slides }) => {
   const [currentIndex, setCurrentIndex] = useState(0);
const slideStyles = {
  width: "100%",
  height: "100%",
  borderRadius: "10px",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const sliderStyles = {
   position: "relative",
   width: "100%",
   height: "500px", // Set a fixed height
   backgroundImage: `url(${slides[currentIndex].url})`,
   backgroundSize: "cover",
   backgroundPosition: "center",
   borderRadius: "10px",
 };

 const rightArrowStyles = {
   position: "absolute",
   top: "50%",
   transform: "translate(0, -50%)",
   right: "32px",
   fontSize: "45px",
   color: "#fff",
   zIndex: 1,
   cursor: "pointer",
 };
 
 const leftArrowStyles = {
   position: "absolute",
   top: "50%",
   transform: "translate(0, -50%)",
   left: "32px",
   fontSize: "45px",
   color: "#fff",
   zIndex: 1,
   cursor: "pointer",
 };

 const goToPrevious = () => {
   const isFirstSlide = currentIndex === 0;
   const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
   setCurrentIndex(newIndex);
 };
 const goToNext = () => {
   const isLastSlide = currentIndex === slides.length - 1;
   const newIndex = isLastSlide ? 0 : currentIndex + 1;
   setCurrentIndex(newIndex);
 };
 const dotsContainerStyles = {
   display: "flex",
   justifyContent: "center",
 };
 
 const dotStyle = {
   margin: "0 3px",
   cursor: "pointer",
   fontSize: "20px",
 };
 
 const goToSlide = (slideIndex) => {
   setCurrentIndex(slideIndex);
 };
 const slideStylesWidthBackground = {
   ...slideStyles,
   backgroundImage: `url(${slides[currentIndex].url})`,
 };
 return (
   <div style={sliderStyles}>
     <div>
       <div onClick={goToPrevious} style={leftArrowStyles}>
         {'<'}
       </div>
       <div onClick={goToNext} style={rightArrowStyles}>
       {'>'}
       </div>
     </div>
     <div style={slideStylesWidthBackground}></div>
     <div style={dotsContainerStyles}>
       {slides.map((slide, slideIndex) => (
         <div
           style={dotStyle}
           key={slideIndex}
           onClick={() => goToSlide(slideIndex)}
         >
         {slideIndex === currentIndex ? '●' : '○'}
         </div>
       ))}
     </div>
   </div>
 );
}

export default ImageSlider;