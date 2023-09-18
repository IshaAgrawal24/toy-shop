import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
const Header = () => {
  let navigate = useNavigate();

  const shopNow = () => {
    navigate("/shop");
  };
  return (
    <div className="header">
      <div className="none">
        <img src="header.png" alt="header image" />
      </div>
      <div className="headerContent">
        <h2>
          Explore New <span>Magical</span>
        </h2>
        <h2>Adventures</h2>
        <p>
          <span>10% Off</span> on transaction of up to Rs. 500
        </p>
        <button onClick={shopNow}>Shop Now</button>
      </div>
    </div>
  );
};

export default Header;
