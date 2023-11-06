import React from "react";
import "./LookBook.css";
import { useNavigate } from "react-router-dom";

const LookBook = () => {
  const navigate = useNavigate();
  return (
    <div className="lookBook-main">
      <div className="lookbook-container">
        <div className="container1 container-bg">
          <div id="flag-img">
            <img
              src={require("../../../../Utils/HomeLookbook/flag.png")}
              alt="flag-image"
            />
          </div>
          <div id="lookbook-banner">
            <img
              src={require("../../../../Utils/HomeLookbook/lookbook-1.jpg")}
              alt=""
            />
          </div>
          <div id="flower-img">
            <img
              src={require("../../../../Utils/HomeLookbook/flower.png")}
              alt="flower-image"
            />
          </div>
        </div>
        <div className="container2 container-bg">
          <div className="container2-content">
            <img
              id="arrow-img"
              src={require("../../../../Utils/HomeLookbook/arrow.png")}
              alt="arrow-image"
            />
            <img
              id="heart-img"
              src={require("../../../../Utils/HomeLookbook/heart.png")}
              alt="heart-image"
            />
            <p>Beautiful model, cute, soft feet </p>
            <h2>Baby shoes</h2>
            <button onClick={() => navigate("/shop")}>Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LookBook;
