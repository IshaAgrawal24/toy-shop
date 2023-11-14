import React, { useContext } from "react";
import "./Category.css";
import { productCategoryList } from "../../../Assets/ProductCetegory";
import { Checkbox, FormControlLabel } from "@mui/material";
import { Star } from "react-feather";
import CartContext from "../../../Context";

const Category = () => {
  const { list, setSelectList } = useContext(CartContext);

  const selectCategoryByGender = (name) => {
    setSelectList(
      list.filter((item) => {
        return item.category === name;
      })
    );
  };

  const selectCategoryByPrice = (minPrice, maxPrice) => {
    setSelectList(
      list.filter((item) => {
        if (minPrice == 500) {
          if (item.price >= minPrice) {
            return item;
          }
        } else {
          if (item.price >= minPrice && item.price < maxPrice) {
            return item;
          }
        }
      })
    );
  };

  const selectCategoryByReview = (reviewNumber) => {
    setSelectList(
      list.filter((item) => {
        return item.ratings === reviewNumber;
      })
    );
  };

  return (
    <div className="shop__category-main">
      <h4>Categories</h4>
      <div className="category__container">
        <div className="shop__product-category mb-30">
          {productCategoryList.map((item, index) => {
            return (
              <p
                key={index}
                className="shop__product-name"
                onClick={() => selectCategoryByGender(item.name)}
              >
                {item.name}
              </p>
            );
          })}
        </div>
        <div className="shop__product-price mb-30">
          <h4>Price</h4>
          <p onClick={() => selectCategoryByPrice(0, 500)}>Under &#8377;500</p>
          <p onClick={() => selectCategoryByPrice(500, 1000)}>
            &#8377;500 - &#8377;1000
          </p>
          <p onClick={() => selectCategoryByPrice(1000, 2000)}>
            &#8377;1000 - &#8377;2000
          </p>
          <p onClick={() => selectCategoryByPrice(2000, 5000)}>
            &#8377;2000 - &#8377;5000
          </p>
          <p
            onClick={() => selectCategoryByPrice(5000, Number.MAX_SAFE_INTEGER)}
          >
            Over &#8377;5000
          </p>
        </div>
        <div className="shop__product-age mb-30">
          <h4>Age</h4>
          <FormControlLabel
            control={
              <Checkbox size="small" onClick={console.log("click checkbox")} />
            }
            label="1 - 2 years"
            className="checkbox"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="2 - 4 years"
            className="checkbox"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="4 - 6 years"
            className="checkbox"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="6 - 8 years"
            className="checkbox"
          />
        </div>
        <div className="shop__customer-review mb-30">
          <h4>Customer review</h4>
          <div className="review" onClick={() => selectCategoryByReview(4)}>
            <Star color="#FFA41C" fill="#FFA41C" size={16} />
            <Star color="#FFA41C" fill="#FFA41C" size={16} />
            <Star color="#FFA41C" fill="#FFA41C" size={16} />
            <Star color="#FFA41C" fill="#FFA41C" size={16} />
            <Star color="#FFA41C" size={16} /> & Up
          </div>
          <div className="review" onClick={() => selectCategoryByReview(3)}>
            <Star color="#FFA41C" fill="#FFA41C" size={16} />
            <Star color="#FFA41C" fill="#FFA41C" size={16} />
            <Star color="#FFA41C" fill="#FFA41C" size={16} />
            <Star color="#FFA41C" size={16} />
            <Star color="#FFA41C" size={16} /> & Up
          </div>
          <div className="review" onClick={() => selectCategoryByReview(2)}>
            <Star color="#FFA41C" fill="#FFA41C" size={16} />
            <Star color="#FFA41C" fill="#FFA41C" size={16} />
            <Star color="#FFA41C" size={16} />
            <Star color="#FFA41C" size={16} />
            <Star color="#FFA41C" size={16} /> & Up
          </div>
          <div className="review" onClick={() => selectCategoryByReview(1)}>
            <Star color="#FFA41C" fill="#FFA41C" size={16} />
            <Star color="#FFA41C" size={16} />
            <Star color="#FFA41C" size={16} />
            <Star color="#FFA41C" size={16} />
            <Star color="#FFA41C" size={16} /> & Up
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
