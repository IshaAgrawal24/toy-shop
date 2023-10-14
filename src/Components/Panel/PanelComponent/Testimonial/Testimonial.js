import React, { useState } from "react";
import "./Testimonial.css";
import { ArrowLeft, ArrowRight } from "react-feather";
import { testimonialList } from "../../../../Assets/TestimonialData";

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
      <h2>Testimonials</h2>
      <div className="testimonial-container">
        <div className="testimonial-img">
          <img
            src={require("../../../../Utils/HomeTestimonial/babyImage.avif")}
            alt=""
          />
        </div>
        <div className="testimonial-content">
          {testimonialList.map((item, index) => {
            return (
              <div key={index}>
                {currentIndex === index ? (
                  <blockquote>
                    <p>{item.description}</p>
                    <cite>- {item.name}</cite>
                  </blockquote>
                ) : null}
              </div>
            );
          })}
          <div className="carousel-icon">
            <button onClick={() => previousSlide()}>
              <ArrowLeft size={16} />
            </button>
            <button id="right" onClick={() => nextSlide()}>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
