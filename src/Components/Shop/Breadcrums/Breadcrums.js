import React, { useState } from "react";
import "./Breadcrums.css";
import { productCategoryList } from "../../../Assets/ProductCetegory";
import { ChevronLeft, ChevronRight } from "react-feather";

const Breadcrums = () => {
  const [showIndex, setShowIndex] = useState(4);
  const leftSlide = () => {
    if (showIndex > 4) {
      setShowIndex(showIndex - 1);
    }
  };

  const rightSlide = () => {
    if (showIndex !== 7) {
      setShowIndex(showIndex + 1);
    }
  };

  return (
    <div className="breadcrumps">
      <h1>Shop</h1>
      <div className="breadcrumps-category">
        <div
          className={`breadcrumps-arrow ${
            showIndex === 4 ? "disabled-arrow" : ""
          } `}
          onClick={() => leftSlide()}
        >
          <ChevronLeft />
        </div>
        <div className="shop-category-list">
          {productCategoryList.map((item, index) => {
            return (
              <div className="single-category" key={index}>
                {index >= showIndex - 4 && index <= showIndex ? (
                  <>
                    <div className="category-img">{item.image}</div>
                    <p>{item.name}</p>
                  </>
                ) : (
                  ""
                )}
              </div>
            );
          })}
        </div>
        <div
          className={`breadcrumps-arrow ${
            showIndex === 7 ? "disabled-arrow" : ""
          } `}
          onClick={() => rightSlide()}
        >
          <ChevronRight />
        </div>
      </div>
    </div>
  );
};

export default Breadcrums;
