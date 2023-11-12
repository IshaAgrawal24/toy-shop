import React, { useEffect, useState, useContext } from "react";
import "./Shop.css";
import CartContext from "../../Context";
import Nav from "../Navbar/Nav";
import Breadcrums from "./Breadcrums/Breadcrums";
import { Eye, Filter, Heart, ShoppingBag, Star } from "react-feather";
import QuickView from "./Quickview/QuickView";
import { Drawer, Tooltip } from "@mui/material";
import Footer from "../Footer/Footer";
import Category from "./Category/Category";

const Shop = () => {
  const {
    selectList,
    setSelectList,
    addCart,
    setAddCart,
    setNumber,
    setOpenCartDrawer,
  } = useContext(CartContext);

  const [openQuickViewModal, setOpenQuickViewModal] = useState(false);
  const [idQuickViewModal, setIdQuickViewModal] = useState();
  const [openCategoryList, setOpenCategoryList] = useState(false);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    if (addCart.length) {
      setNumber(addCart.length);
    }
  }, [addCart.length]);

  const wishlistMethod = (id) => {
    setSelectList(
      selectList.map((item) => {
        if (item.id == id) {
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

  const addToCart = (id) => {
    let count = 0;
    if (addCart.length > 0) {
      setAddCart(
        addCart.filter((item) => {
          if (id === item.id) {
            count++;
            item.quantity++;
            return item;
          } else return item;
        })
      );
    }
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
    setOpenCartDrawer(true);
  };

  // SINGLE DETAIL PAGE OPEN
  const quickViewFunc = (id) => {
    setOpenQuickViewModal(true);
    setIdQuickViewModal(id);
  };

  return (
    <>
      <div id="navFixed">
        <Nav />
      </div>
      <Breadcrums />
      <div className="shop-container">
        <div className="shop__category-container">
          <div className="shop__category-lg">
            <Category />
          </div>
          <button id="shop__category-md">
            <Filter
              tooltip="Filter"
              onClick={() => setOpenCategoryList(true)}
            />
          </button>
        </div>
        <div className="shop__product-container">
          {selectList?.length > 0 ? (
            selectList.map((item, index) => {
              const key = index + item.name;
              return (
                <div className="single-product" key={key}>
                  <div className="single-product__img">
                    {item.image}
                    <div className="product__icon">
                      <div className="tooltip-icons">
                        <Tooltip title="Add to cart" placement="top">
                          <ShoppingBag
                            size={18}
                            strokeWidth="1.2px"
                            onClick={() => addToCart(item.id)}
                          />
                        </Tooltip>
                      </div>
                      <div className="tooltip-icons">
                        <Tooltip title="wishlist" placement="top">
                          {item.wishlist == 1 ? (
                            <Heart
                              size={18}
                              fill="#1e2d5f"
                              strokeWidth="1.2px"
                              onClick={() => wishlistMethod(item.id)}
                            />
                          ) : (
                            <Heart
                              size={18}
                              strokeWidth="1.2px"
                              onClick={() => wishlistMethod(item.id)}
                            />
                          )}
                        </Tooltip>
                      </div>
                      <div className="tooltip-icons">
                        <Tooltip title="quick view" placement="top">
                          <Eye
                            size={18}
                            onClick={() => quickViewFunc(item.id)}
                            strokeWidth="1.2px"
                          />
                        </Tooltip>
                      </div>
                    </div>
                  </div>
                  <div className="single-product__content">
                    <div id="price">&#8377;{item.price}.00</div>
                    <a
                      href=""
                      id="title"
                      onClick={() => quickViewFunc(item.id)}
                    >
                      {item.name}
                    </a>
                    <div id="ratings">
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
                  </div>
                </div>
              );
            })
          ) : (
            <p>No Product found!</p>
          )}
        </div>

        <Drawer
          anchor="left"
          open={openCategoryList}
          onClose={() => setOpenCategoryList(!openCategoryList)}
          sx={{
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "200px",
              padding: "30px 20px 0",
            },
          }}
        >
          <Category />
        </Drawer>
        <QuickView
          idQuickViewModal={idQuickViewModal}
          setOpenQuickViewModal={setOpenQuickViewModal}
          openQuickViewModal={openQuickViewModal}
          wishlistMethod={wishlistMethod}
        />
      </div>
      <Footer />
    </>
  );
};

export default Shop;
