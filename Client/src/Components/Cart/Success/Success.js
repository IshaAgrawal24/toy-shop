import React from "react";
import Nav from "../../Navbar/Nav";
import "./Success.css";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();
  const id = Math.floor(Math.random() * 1000000);
  return (
    <div className="success-main">
      <div id="navFixed">
        <Nav />
      </div>
      <div className="success-container">
        <h3>Thank You!</h3>
        <h5>Your order has been placed!</h5>
        <p>
          We are getting started on your order right away, your order id
          is&nbsp;
          <b>{id}</b>. In the meantime, explore the latest fashion and get
          inspired by new trends.
        </p>
        <button onClick={() => navigate("/shop")}>Continue Shopping</button>
      </div>
    </div>
  );
};

export default Success;
