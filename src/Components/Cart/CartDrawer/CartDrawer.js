import React, { useContext, useEffect, useMemo, useState } from "react";
import "./CartDrawer.css";
import CartContext from "../../../Context";
import { Drawer } from "@mui/material";
import { Minus, Plus, Truck } from "react-feather";
import { Scrollbars } from "react-custom-scrollbars";
import { Link, useNavigate } from "react-router-dom";

const CartDrawer = () => {
  const navigate = useNavigate();
  const {
    openCartDrawer,
    setOpenCartDrawer,
    addCart,
    setAddCart,
    setNumber,
    amount,
    setAmount,
  } = useContext(CartContext);

  useEffect(() => {
    if (addCart.length) {
      setNumber(addCart.length);
    }
  }, [addCart.length]);

  const removeProductfromList = (id) => {
    setAddCart(
      addCart.filter((item) => {
        return item.id !== id;
      })
    );
  };

  const changeQuantityFunc = (id, action) => {
    if (action === "decrease") {
      setAddCart(
        addCart.filter((item) => {
          if (item.id === id && item.quantity > 1) {
            item.quantity--;
            return item;
          } else return item;
        })
      );
    } else {
      setAddCart(
        addCart.filter((item) => {
          if (item.id === id) {
            item.quantity++;
            return item;
          } else return item;
        })
      );
    }
    subTotalFunc();
  };

  const subTotalFunc = () => {
    setAmount(
      addCart.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0)
    );
  };

  useMemo(() => {
    setNumber(addCart.length);
    subTotalFunc();
  }, [addCart.length]);

  const shippingWidthFunc = (subtotal) => {
    let width = "";
    const value = 1000 - subtotal;
    console.log("value:", value);
    switch (value) {
      case value > 0 && value <= 300:
        width = "70%";
        break;
      case value > 300 && value <= 400:
        width = "60%";
        break;
      case value > 400 && value <= 500:
        width = "50%";
        break;
      case value > 500 && value <= 600:
        width = "40%";
        break;
      case value > 600 && value <= 700:
        width = "30%";
        break;
      case value > 700 && value <= 800:
        width = "20%";
        break;
      case value > 900 && value < 1000:
        width = "10%";
        break;
      default:
        width = "100%";
        break;
    }
    console.log("width: ", width);
    return width;
  };

  return (
    <Drawer
      anchor="right"
      open={openCartDrawer}
      onClose={() => setOpenCartDrawer(false)}
      sx={{
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: "340px",
          padding: "20px 10px 10px 20px",
        },
      }}
    >
      <div className="cartDrawer__head">
        <h4 className="font-ballu">Cart({addCart.length})</h4>
        <button onClick={() => setOpenCartDrawer(false)}>X</button>
      </div>
      {addCart.length > 0 ? (
        <Scrollbars
          style={{ width: "100%", height: "100%", marginTop: "10px" }}
        >
          <div className="cartDrawer__container">
            {addCart.map((item, index) => {
              const key = item.name + index;
              return (
                <div className="cartDrawer__single" key={key}>
                  <div className="cartDrawer__single-content">
                    <div className="cartDrawer__single-img">{item.image}</div>
                    <div className="cartDrawer__single__info">
                      <h5 className="font-ballu">{item.name}</h5>
                      <div className="cartDrawer__single-quantity">
                        <Minus
                          size={16}
                          strokeWidth="2px"
                          className="quantity-icon"
                          onClick={() =>
                            changeQuantityFunc(item.id, "decrease")
                          }
                        />
                        <div>{item.quantity}</div>
                        <Plus
                          size={16}
                          strokeWidth="2px"
                          className="quantity-icon"
                          onClick={() =>
                            changeQuantityFunc(item.id, "increase")
                          }
                        />
                      </div>
                      <div className="cartDrawer__single-price">
                        &#8377;{item.price * item.quantity}.00
                      </div>
                    </div>
                  </div>
                  <div className="cartDrawer__single-remove">
                    <button onClick={() => removeProductfromList(item.id)}>
                      X
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </Scrollbars>
      ) : (
        <div className="empty-cart font-ballu">
          <p>No products in the cart!</p>
          <Link to="/shop">Shop all products</Link>
        </div>
      )}

      {addCart.length > 0 ? (
        <div className="cartDrawer__bottom">
          <div className="cartDrawer__bottom-subtotal">
            <h3>Subtotal</h3>
            <h3>&#8377;{amount}.00</h3>
          </div>
          <div className="cartDrawer__bottom-shipping">
            {amount < 1000 ? (
              <p>
                Spend <b>&#8377;{1000 - amount}</b> more and get{" "}
                <b>free shipping!</b>
              </p>
            ) : (
              <p>Congratulations, you have got free shipping!</p>
            )}
            <div className="total-percent">
              <div
                className="persent"
                style={{ width: shippingWidthFunc(amount) }}
              >
                <span>
                  <Truck size={16} />
                </span>
              </div>
            </div>
            <div className="cartDrawer__bottom-button">
              <button id="checkOut">Check Out</button>
              <button
                id="viewCart"
                onClick={() => {
                  navigate("/cart");
                  setOpenCartDrawer(false);
                }}
              >
                View Cart
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </Drawer>
  );
};

export default CartDrawer;
