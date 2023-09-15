import React from "react";

const Offers = () => {
  return (
    <div className="offers">
      <h2>Grab it Now!</h2>
      <div className="offer-container">
        <div className="container1">
          <img src="/images/offer1.png" alt="" />
          <p className="mainOffer">Flat 40% OFF</p>
          <p className="offerFor">For Club Members</p>
        </div>
        <div className="container1">
          <img src="/images/offer2.png" alt="" />
          <p className="mainOffer">Flat 35% OFF</p>
          <p className="offerFor">For All Members</p>
        </div>
        <div className="container-last">
          <img src="/images/offer3.jpg" alt="" />
          <div>30% OFF</div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
