import React from "react";

const Testimonial = () => {
  return (
    <div className="testimonial">
      <h2>Testimonials</h2>
      <div className="testimonial-section">
        <div className="testimonialChild">
          <div className="testimonialImage">
            <img src="/images/girlImage.png" alt="" />
          </div>
          <p>
            "Lorem Ipsum is simply dummy text of the printing and type setting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book."
          </p>
          <span>~Kusum Sharma</span>
        </div>
        <div className="testimonialChild">
          <div className="testimonialImage">
            <img src="/images/boyImage.webp" alt="" />
          </div>
          <p>
            "Lorem Ipsum is simply dummy text of the printing and type setting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book."
          </p>
          <span>~Shyam Arora</span>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
