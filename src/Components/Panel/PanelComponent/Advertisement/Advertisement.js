import React from "react";
import "./Advertisement.css";

const Advertisement = () => {
  return (
    <div className="advertisement-main">
      <div className="advertisment-container">
        <div className="advertisement-category">
          <div className="cotton-set">
            <div className="cotton-set-img">
              <img
                src={require("../../../../Utils/HomeAdvertisement/banner-1.jpg")}
                alt="cotton-set-banner"
              />
            </div>
            <div className="advertisement-content">
              <h3>Cute set for boys and girls</h3>
              <h2>Cotton Set</h2>
              <button>Shop Now</button>
            </div>
          </div>

          <div className="cotton-fabric">
            <div className="advertisement-content">
              <h3>Top fabrics for kids</h3>
              <h2>Clothes made of cotton fabric</h2>
              <button className="mb-30">Shop Now</button>
            </div>
            <div className="cotton-fabric-img">
              <img
                src={require("../../../../Utils/HomeAdvertisement/banner-2.jpg")}
                alt="cotton-fabric-banner"
              />
              <div className="off-container">
                <img
                  src={require("../../../../Utils/HomeAdvertisement/cloud.png")}
                  alt=""
                />
                <h3 id="off">-15%</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
