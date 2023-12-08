import React from "react";

const Offers = () => {
  return (
    <div className="offers">
      <h2>Grab it Now!</h2>
      <div className="offer-container">
        <div className="container1">
          <img
            src={require("../../../Utils//HomeOffers/offer1.png")}
            alt="white cat toy"
          />
          <p className="mainOffer">Flat 40% OFF</p>
          <p className="offerFor">For Club Members</p>
        </div>
        <div className="container1">
          <img
            src={require("../../../Utils//HomeOffers/offer2.png")}
            alt="lion soft toy"
          />
          <p className="mainOffer">Flat 35% OFF</p>
          <p className="offerFor">For All Members</p>
        </div>
        <div className="container-last">
          <img
            src={require("../../../Utils//HomeOffers/offer3.jpg")}
            alt="girl with toy"
          />
          <div>30% OFF</div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
