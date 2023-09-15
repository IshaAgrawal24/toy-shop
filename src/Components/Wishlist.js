import React, { useState ,useContext} from "react";
import { Link } from "react-router-dom";
import "./Wishlist.css";
import Nav from "./Navbar/Nav";
import CartContext from "../Context";
import { Modal } from "@mui/material";

const Wishlist = () => {
  const [open, setOpen] = useState(false);
  const [singleIndex, setSingleIndex] = useState();
  const { setNumber, setAddCart, addCart, selectList, setSelectList } =
    useContext(CartContext);

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
  setNumber(addCart.length);

  const singlPageOpen = (event) => {
    setOpen(true);
    setSingleIndex(event.currentTarget.id);
  };

  return (
    <>
      <div id="navFixed">
        <Nav />
      </div>
      <div className="wishlist">
        <h1>Wishlist</h1>
        <div className="wishlistMain">
          {selectList.map((item, index) => {
            return item.wishlist == 1 ? (
              <div className="singleWishlist" key={index}>
                <div
                  className="wishlistImage"
                  id={index}
                  onClick={singlPageOpen}
                >
                  <img src={item.image} alt="" />
                </div>
                <h4>{item.name}</h4>
                <div className="wishlistFlex">
                  <p>&#8377;{item.price}.00</p>
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
            ) : null;
          })}
        </div>
      </div>
      <Modal open={open} onClose={() => setOpen(false)}>
          <div id="modal">
            {selectList.map((item, index) => {
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
    </>
  );
};

export default Wishlist;
