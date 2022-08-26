import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartContext from "../Context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import "./Cart.css";
import Nav from "./Nav";
import { Modal } from "@mui/material";

const Cart = () => {
  let navigate = useNavigate();
  const {
    number,
    setNumber,
    addCart,
    setAddCart,
    amount,
    setAmount,
    selectList,
    setSelectList,
    isLogged,
  } = useContext(CartContext);

  const [open, setOpen] = useState(false);
  const [removeImage, setRemoveImage] = useState();
  const [removeIndex, setRemoveIndex] = useState();
  const [removeId, setRemoveId] = useState();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  // CHECKOUT PAGE
  const checkout = () => {
    if (isLogged) {
      navigate("/checkout");
    } else {
      navigate("/login");
    }
  };

  // TOTAL AMOUNT FUNCTION
  setAmount(
    addCart.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0)
  );

  // INCREASE QUANTITY FUNCTION
  const increase = (event) => {
    setAddCart(
      addCart.map((item, index) => {
        if (index == event.currentTarget.id) {
          item.quantity = item.quantity + 1;
          return item;
        }
        return item;
      })
    );
  };

  // DECREASE QUANTITY FUNCTION
  const decrease = (event) => {
    debugger;
    if (addCart[event.currentTarget.id]["quantity"] == 1) {
      setOpen(true);
      setRemoveId(event.currentTarget.value);
      addCart.filter((item, index) => {
        if (index == event.currentTarget.id) {
          setRemoveImage(item.image);
          setRemoveIndex(index);
        }
      });
    } else {
      setAddCart(
        addCart.map((item, index) => {
          if (index == event.currentTarget.id) {
            item.quantity = item.quantity - 1;
            return item;
          }
          return item;
        })
      );
    }
  };
  const remove = () => {
    console.log("Remove ID");
    console.log(typeof removeId);
    setAddCart(
      addCart.filter((item, index) => {
        return index != removeIndex;
      })
    );
    setSelectList(
      selectList.filter((item) => {
        if (item.id == removeId) {
          item.add = 0;
        }
        return item;
      })
    );

    setNumber(number - 1);
    setOpen(false);
  };

  const continueMethod = () => {
    navigate("/shop");
  };
  return (
    <>
      <div className="mainCart">
        <div id="navFixed">
          <Nav />
        </div>
        {addCart.length == 0 ? (
          <div id="emptyCart">
            <div className="emptyImage">
              <img src="/images/emptyCart.webp" alt="" />
            </div>
            <h3>Your Cart is Empty!</h3>
            <p>Looks Like You haven't made Your Choice Yet</p>
            <Link to="/shop">Start Shopping</Link>
          </div>
        ) : (
          <>
            <div className="cartPage">
              {addCart.map((item, index) => {
                return (
                  <>
                    <div className="singleCart">
                      <div id="cartImage">
                        <img src={item.image} alt="" />
                      </div>
                      <div className="data">
                        <h5>{item.name}</h5>
                        <p>&#x20B9;{item.price * item.quantity}.00</p>

                        <div className="increase">
                          <button
                            value={item.id}
                            className="quantity"
                            id={index}
                            onClick={decrease}
                          >
                            <i className="fa-solid fa-minus"></i>
                          </button>
                          {item.quantity}
                          <button
                            className="quantity"
                            id={index}
                            onClick={increase}
                          >
                            <i className="fa-solid fa-plus"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* <hr id="line"/> */}
                  </>
                );
              })}

              <hr id="line" />
              <div className="amount">
                <div id="totalAmount">Total Amount:</div>
                <div>&#8377;{amount}.00</div>
              </div>
            </div>
            <div className="cartButton">
              <button className="emptyButton" onClick={checkout}>
                CHECKOUT
              </button>
              <button className="emptyButton" onClick={continueMethod}>
                CONTINUE SHOPPING
              </button>
            </div>
          </>
        )}
        <Modal open={open} onClose={() => setOpen(false)}>
          <div id="modal">
            <div className="modalChild">
              <div className="modalImage">
                <img src={removeImage} alt="" />
              </div>
              <div className="modalContent">
                <h4>Move From Bag?</h4>
                <p>Are you sure you want to move this item from bag?</p>
                <div className="modalButton">
                  <button onClick={remove}>REMOVE</button>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default Cart;
