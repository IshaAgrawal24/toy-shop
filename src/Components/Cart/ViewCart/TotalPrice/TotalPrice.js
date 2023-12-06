import React, { useContext, useEffect, useState } from "react";
import "./TotalPrice.css";
import CartContext from "../../../../Context";

const TotalPrice = () => {
  const { addCart } = useContext(CartContext);
  const [totalMRP, setTotalMRP] = useState(0);
  const [discountMRP, setDiscountMRP] = useState(0);

  useEffect(() => {
    setTotalMRP(
      addCart.reduce((total, item) => {
        return total + item.oldPrice * item.quantity;
      }, 0)
    );

    setDiscountMRP(
      addCart.reduce((total, item) => {
        return total + (item.oldPrice - item.price) * item.quantity;
      }, 0)
    );
  }, []);
  return (
    <div className="bag__total-price">
      <h3>PRICE DETAILS&nbsp;({addCart.length} items)</h3>
      <div className="bag__total-price-grid">
        <div>
          <p>Total MRP</p>
          <p>&#8377;{totalMRP}.00</p>
        </div>
        <div>
          <p>Discount on MRP</p>
          <p style={{ color: "#03a685" }}>-&#8377;{discountMRP}.00</p>
        </div>
        <div>
          <p>Convenience Fee</p>
          <p>&#8377;99.00</p>
        </div>
      </div>
      <div className="bag__total-amount">
        <div>
          <p>Total Amount</p>
          <p>&#8377;{totalMRP - discountMRP}.00</p>
        </div>
      </div>
    </div>
  );
};

export default TotalPrice;
