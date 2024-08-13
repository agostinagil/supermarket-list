/* eslint-disable react/prop-types */
import { Box } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import TestimonialCard from "../TestimCards/TestimonialCard";
import { useState } from "react";

import "./slider.css";

const TestimonialSlider = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(currentIndex);

  const handleNext = () =>
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );

  const handlePrev = () =>
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );

  return (
    <>
      <Box className="sliderWrapper">
        <div className="navButton" onClick={handlePrev}>
          <KeyboardArrowLeftIcon className="arrowIcon" />
        </div>
        <Box
          className="slider"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((test, index) => (
            <TestimonialCard key={index} testimonials={test} />
          ))}
        </Box>
        <div className="navButton" onClick={handleNext}>
          <KeyboardArrowRightIcon className="arrowIcon" />
        </div>
      </Box>
      <Box className="dotsContainer">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </Box>
    </>
  );
};

export default TestimonialSlider;
