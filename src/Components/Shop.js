import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Shop.css";
import Nav from "./Nav";
import CartContext from "../Context";
import { useContext } from "react";
import Filter from "./Filter";
import {  Modal } from "@mui/material";

const Shop = () => {
  const [open, setOpen] = useState(false);
  const [singleIndex, setSingleIndex] = useState();
  const { selectList, setSelectList, addCart, setAddCart, setNumber, list } =
    useContext(CartContext);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  const wishlistMethod = (event) => {
    setSelectList(
      selectList.map((item, index) => {
        if (index == event.currentTarget.id) {
          if (item.wishlist == 0) {
            item.wishlist = 1;
          } else {
            item.wishlist = 0;
          }
        }
        return item;
      })
    );
  };
  // console.log(wishlist);

  const addToCart = (event) => {
    let count = 0;
    setAddCart(
      addCart.map((item) => {
        if (event.currentTarget.className == item.id) {
          count = count + 1;
        }
      })
    );
    if (count === 0) {
      setAddCart([...addCart, { ...selectList[event.currentTarget.id] }]);
      setSelectList(
        selectList.filter((item) => {
          if (event.currentTarget.className == item.id) {
            item.add = 1;
            return item;
          }
          return item;
        })
      );
    }
  };
  // console.log(addCart);
  setNumber(addCart.length);

  // SINGLE DETAIL PAGE OPEN
  const singlPageOpen = (event) => {
    setOpen(true);
    setSingleIndex(event.currentTarget.id);
  };

  return (
    <>
      <div id="navFixed">
        <Nav />
      </div>
      <div className="shopMain">
        <Filter />
        <div className="ProductMain">
          {selectList.map((item, index) => {
            return (
              <div className="singleProduct" key={index}>
                <div
                  className="singleProductImg"
                  id={index}
                  onClick={singlPageOpen}
                >
                  <img src={item.image} alt="" />
                </div>
                <h4>{item.name}</h4>
                <div id="reviews">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>

                  <i className="fa-solid fa-star-half"></i>
                </div>
                <div className="singlProductFlex">
                  {item.wishlist == 1 ? (
                    <div>
                      <i
                        className="fa-solid fa-heart"
                        title="wishlist"
                        id={index}
                        onClick={wishlistMethod}
                        style={{ color: "red" }}
                      ></i>
                    </div>
                  ) : (
                    <div>
                      <i
                        className="fa-regular fa-heart"
                        title="wishlist"
                        id={index}
                        onClick={wishlistMethod}
                        style={{ color: "red" }}
                      ></i>
                    </div>
                  )}
                  <div>
                    <p>&#8377;{item.price}.00</p>
                  </div>
                  {item.add == 0 ? (
                    <div className={item.id} id={index} onClick={addToCart}>
                      <i
                        className="fa-solid fa-basket-shopping"
                        title="cart"
                        style={{ color: "#878aff" }}
                      ></i>
                    </div>
                  ) : (
                    <Link to="/cart">Go</Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <Modal open={open} onClose={() => setOpen(false)}>
          <div id="modal">
            {list.map((item, index) => {
              return index == singleIndex ? (
                <div className="mainModal">
                  <div className="modalChild">
                    <div className="modalImage">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="modalContent">
                      <h4>{item.name}</h4>
                      <div id="reviews">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star-half"></i>
                      </div>
                      <p>
                        <span>
                          &#8377;<del>5399.00</del>
                        </span>
                        &#8377;{item.price}.00
                      </p>
                    </div>
                  </div>
                  <p>
                    <span>Details: &nbsp;</span>Lorem Ipsum is simply dummy text
                    of the printing and typesetting industry. Lorem Ipsum has
                    been the industry's standard dummy text ever since the
                    1500s.
                  </p>
                </div>
              ) : null;
            })}
          </div>
        </Modal>
      </div>
    </>
  );
};

export default Shop;
