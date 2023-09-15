import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../../Context";

const BestSeller = () => {
  const { list } = useContext(CartContext);
  return (
    <div className="BestSellersMain">
      <h2>Best Sellers</h2>
      <div className="bestSeller">
        {list.map((item, index) => {
          return (
            <>
              {index < 4 ? (
                <Link to="/shop">
                  <div className="bestSellerSingle" key={index}>
                    <div className="bestSingleImg">
                      {" "}
                      <img src={item.image} alt="" />
                    </div>
                    <h4>{item.name}</h4>
                    <p>&#8377;{item.price}.00</p>
                  </div>
                </Link>
              ) : null}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default BestSeller;
