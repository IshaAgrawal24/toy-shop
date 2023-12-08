import React, { useState } from "react";
import "./Testimonial.css";
import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "react-feather";
import { testimonialList } from "../../../Assets/TestimonialData";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousSlide = () => {
    if (currentIndex === 0) {
      setCurrentIndex(3);
      return;
    }
    setCurrentIndex(currentIndex - 1);
  };

  const nextSlide = () => {
    if (currentIndex === 3) {
      setCurrentIndex(0);
      return;
    }
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <div className="testimonial">
      <h2>Our Testimonials</h2>
      <div className="testimonial-container">
        <div
          className="leftArrow carousel-arrow testimonial__caraousel-btn-color"
          onClick={() => previousSlide()}
        >
          <ChevronLeft />
        </div>
        <div
          className="rightArrow carousel-arrow testimonial__caraousel-btn-color"
          onClick={() => nextSlide()}
        >
          <ChevronRight />
        </div>
        <div className="testimonial-content">
          {testimonialList.map((item, index) => {
            return (
              <div key={index}>
                {currentIndex === index ? (
                  <>
                    <div className="testimonial-img">{item.image}</div>
                    <blockquote>
                      <p>{item.description}</p>
                      <cite>- {item.name}</cite>
                    </blockquote>
                  </>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
