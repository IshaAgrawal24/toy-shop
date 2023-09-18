import React from "react";
import "./Testimonial.css";
import { ArrowLeft, ArrowRight } from "react-feather";

const Testimonial = () => {
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
          <blockquote>
            <p>
              "Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries"
            </p>
            <cite>- Steve Jobs</cite>
          </blockquote>

          <div className="carousel-icon">
            <span id="left">
              <ArrowLeft size={16} />
            </span>
            <span id="right">
              <ArrowRight size={16} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
