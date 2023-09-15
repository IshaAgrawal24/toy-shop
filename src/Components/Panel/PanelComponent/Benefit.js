import React from "react";

const Benefit = () => {
  return (
    <div className="benefit">
      <div className="singleBenefit">
        <div className="benefit-icon">
          <i class="fa-brands fa-cc-amazon-pay"></i>
        </div>
        <div className="benefit-content">
          <h4>Fast Payment</h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </div>
      <div className="singleBenefit">
        <div className="benefit-icon">
          <i class="fa-solid fa-arrow-right-arrow-left"></i>
        </div>
        <div className="benefit-content">
          <h4>Return & Exchange</h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </div>
      <div className="singleBenefit">
        <div className="benefit-icon">
          <i class="fa-solid fa-truck"></i>
        </div>
        <div className="benefit-content">
          <h4>Fast Delivery</h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Benefit;
