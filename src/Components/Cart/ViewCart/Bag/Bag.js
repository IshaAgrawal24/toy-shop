import React, { useContext, useEffect, useState } from "react";
import "./Bag.css";
import CartContext from "../../../../Context";
import { Check, CornerDownLeft } from "react-feather";
import { CrossAction, MovetoWishlist, RemoveFromBag } from "./Modalsection";

const Bag = (_props) => {
  const { setActiveStep, activeStep } = _props;
  const { addCart } = useContext(CartContext);
  const [currentDate, setCurrentDate] = useState("");
  const [totalMRP, setTotalMRP] = useState(0);
  const [discountMRP, setDiscountMRP] = useState(0);
  const [openRemoveModal, setRemoveModal] = useState(false);
  const [openWishlistModal, setWishlistModal] = useState(false);
  const [openCrossModal, setCrossModal] = useState(false);
  const [selectedId, setSelectedId] = useState(0);

  useEffect(() => {
    const d = new Date();
    d.setDate(d.getDate() + 6);
    const month = d.getMonth() + 1;
    const year = d.getFullYear();
    const day = d.getDate();
    let currentDate = `${day}-${month}-${year}`;
    setCurrentDate(currentDate);

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

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  const removeItemFunc = () => {
    setRemoveModal(true);
  };

  return (
    <div className="bag__main">
      {addCart.length === 0 ? null : (
        <div className="bag__container">
          <div className="bag__cart-items">
            {/* SELECTED PRODUCTS  */}
            <div className="bag__cart-selected">
              {/* SELECTED ITEMS HEADING  */}
              <div className="bag__cart-head">
                <h3 className="txt-uppercase">Items Selected</h3>
                <div className="bag__cart-remove">
                  <button
                    className="txt-uppercase"
                    onClick={() => removeItemFunc()}
                  >
                    remove
                  </button>
                  <button
                    className="txt-uppercase"
                    onClick={() => {
                      setWishlistModal(true);
                    }}
                  >
                    Move to wishlist
                  </button>
                </div>
              </div>
              {/* SELECTED ITEMS CONTENT */}
              <div className="bag__cart-products">
                {addCart.map((item, index) => {
                  const key = item + index;
                  return (
                    <div className="bag__cart-singleProduct" key={key}>
                      <div className="singleProduct-img">{item.image}</div>
                      <div className="singleProduct-content">
                        <span
                          id="cross"
                          onClick={() => {
                            setCrossModal(true);
                            setSelectedId(item.id);
                          }}
                        >
                          X
                        </span>
                        <p id="name">{item.name}</p>
                        <p id="company">
                          Sold by: LANDMARK ONLINE INDIA PVT LTD
                        </p>
                        <p id="quantity">
                          <span>Qty: </span>
                          {item.quantity}
                          <span id="inventory">8 left</span>
                        </p>
                        <p id="price">
                          &#8377;{item.price}.00
                          <span>
                            <del>&#8377;{item.oldPrice}.00</del>
                          </span>
                          <span id="off">
                            {(
                              ((item.oldPrice - item.price) / item.oldPrice) *
                              100
                            ).toFixed()}
                            %&nbsp;OFF
                          </span>
                        </p>
                        <p id="return">
                          <span>
                            <CornerDownLeft size={10} strokeWidth="3px" />
                          </span>
                          14 days return available
                        </p>
                        <p id="delivery">
                          <span>
                            <Check size={12} strokeWidth="3px" color="green" />
                          </span>
                          Delivery by{" "}
                          <span>
                            <b>{currentDate}</b>
                          </span>
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="bag__total">
            {/* COUPONS  */}
            <div className="bag__total-coupons">
              <h3 className="txt-uppercase">Coupons</h3>
              <div className="bag__total-couponsInput">
                <input
                  type="text"
                  name="coupons"
                  id="coupons"
                  placeholder="Coupon code"
                />
                <button className="txt-uppercase">Apply</button>
              </div>
            </div>
            {/* TOTAL PRICE  */}
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
              <div className="bag__total-place-order">
                <button
                  className="txt-uppercase"
                  onClick={() => setActiveStep(activeStep + 1)}
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <RemoveFromBag
        openRemoveModal={openRemoveModal}
        setRemoveModal={setRemoveModal}
      />
      <MovetoWishlist
        openWishlistModal={openWishlistModal}
        setWishlistModal={setWishlistModal}
      />
      <CrossAction
        id={selectedId}
        openCrossModal={openCrossModal}
        setCrossModal={setCrossModal}
      />
    </div>
  );
};

export default Bag;
