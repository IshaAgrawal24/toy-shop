import React from "react";
import "./Category.css";
import { categoryList } from "../../../../Assets/CategoryData";
import { Link } from "react-router-dom";

const Category = () => {
  console.log(categoryList);
  return (
    <div className="category-main">
      <h2>Categories</h2>
      <div className="category-container">
        {categoryList.map((item, index) => {
          const key = index + item.name;
          return (
            <>
              <Link to="/shop">
                <div className="category-list" key={key}>
                  <div>{item.img}</div>
                  <p>{item.name}</p>
                </div>
              </Link>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
