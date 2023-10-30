import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Wishlist.css";
import Nav from "../Navbar/Nav";
import CartContext from "../../Context";
import { Modal } from "@mui/material";
import { Star } from "react-feather";
import QuickView from "../Shop/Quickview/QuickView";

const Wishlist = () => {
  const [openQuickViewModal, setOpenQuickViewModal] = useState(false);
  const [idQuickViewModal, setIdQuickViewModal] = useState();
  const { setNumber, setAddCart, addCart, selectList, setSelectList } =
    useContext(CartContext);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  const addToCart = (id) => {
    let count = 0;

    setAddCart(
      addCart.map((item) => {
        if (id == item.id) {
          count = count + 1;
        }
      })
    );

    if (count === 0) {
      setAddCart([...addCart, { ...selectList[id - 1] }]);
      setSelectList(
        selectList.filter((item) => {
          if (id == item.id) {
            item.add = 1;
            return item;
          }
          return item;
        })
      );
    }
  };
  setNumber(addCart.length);

  const quickViewModalFunc = (id) => {
    setOpenQuickViewModal(true);
    setIdQuickViewModal(id);
  };

  const removeFromWishlist = (id) => {
    setSelectList(
      selectList.filter((item) => {
        if (item.id === id) {
          item.wishlist = 0;
          return item;
        }
        return item;
      })
    );
  };

  return (
    <>
      <div id="navFixed">
        <Nav />
      </div>
      <div className="wishlist">
        <div className="wishlist__breadcrumb">
          <h1>Wishlist</h1>
        </div>
        <div className="wishlistMain">
          {selectList.map((item, index) => {
            return item.wishlist == 1 ? (
              <div className="singleWishlist__product" key={index}>
                <div
                  className="wishlist-product__cross"
                  onClick={() => removeFromWishlist(item.id)}
                >
                  X
                </div>
                <div
                  className="wishlistImage"
                  onClick={() => quickViewModalFunc(item.id)}
                >
                  {item.image}
                </div>
                <div className="wishlist-product__content">
                  <div className="wishlist-product__ratings">
                    {Array(item.ratings)
                      .fill("")
                      .map((_, index) => {
                        return (
                          <span key={index}>
                            <Star color="#FFA41C" fill="#FFA41C" size={16} />
                          </span>
                        );
                      })}
                    {item.ratings < 5 &&
                      Array(5 - item.ratings)
                        .fill("")
                        .map((_, index) => {
                          return (
                            <span key={index}>
                              <Star color="#FFA41C" size={16} />
                            </span>
                          );
                        })}
                  </div>
                  <h4 className="wishlist-product__name">{item.name}</h4>
                  <div className="wishlist-product__price">
                    <span id="price">&#8377;{item.price}.00</span>
                    <span id="oldPrice">
                      <del>&#8377;{item.oldPrice}.00</del>
                    </span>
                  </div>
                </div>
                <button className="move-to-bag" onClick={() => addToCart()}>
                  Move to bag
                </button>
              </div>
            ) : null;
          })}
        </div>
        <QuickView
          openQuickViewModal={openQuickViewModal}
          setOpenQuickViewModal={setOpenQuickViewModal}
          idQuickViewModal={idQuickViewModal}
          wishlistMethod={removeFromWishlist}
        />
      </div>
    </>
  );
};

export default Wishlist;
