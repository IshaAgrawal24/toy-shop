import React, { useContext, useState } from "react";
import "./Breadcrums.css";
import { productCategoryList } from "../../../Assets/ProductCetegory";
import { ChevronLeft, ChevronRight } from "react-feather";
import CartContext from "../../../Context";

const Breadcrums = () => {
  const { list, setSelectList, selectList } = useContext(CartContext);
  const [showIndex, setShowIndex] = useState(4);
  const leftSlide = () => {
    if (showIndex > 4) {
      setShowIndex(showIndex - 1);
    }
  };

  const rightSlide = () => {
    if (showIndex !== 6) {
      setShowIndex(showIndex + 1);
    }
  };

  const selectCategoryByImage = (name) => {
    setSelectList(
      list.filter((item) => {
        return item.category === name;
      })
    );
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
            if (index >= showIndex - 4 && index <= showIndex)
              return (
                <div className="single-category" key={index}>
                  <>
                    <div
                      className="category-img"
                      onClick={() => selectCategoryByImage(item.name)}
                    >
                      {item.image}
                    </div>
                    <p>{item.name}</p>
                  </>
                </div>
              );
          })}
        </div>
        <div
          className={`breadcrumps-arrow ${
            showIndex === 6 ? "disabled-arrow" : ""
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
