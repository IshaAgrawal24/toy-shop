import React, { useContext, useEffect } from "react";
import "./Payment.css";
import { loadStripe } from "@stripe/stripe-js";
import CartContext from "../../../../Context";

const Payment = () => {
  const { addCart } = useContext(CartContext);
  // const paymentFunc = async () => {};
  return (
    <div>
      {/* <p>payment</p> */}
      {/* <button onClick={() => paymentFunc()}>Payment Func</button> */}
    </div>
  );
};

export default Payment;
