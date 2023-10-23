import React, { useEffect, useState, useContext } from "react";
import "./Shop.css";
import CartContext from "../../Context";
import Nav from "../Navbar/Nav";
import Breadcrums from "./Breadcrums/Breadcrums";
import { Star } from "react-feather";
import QuickView from "./Quickview/QuickView";

const Shop = () => {
  const [openQuickViewModal, setOpenQuickViewModal] = useState(false);
  const [idQuickViewModal, setIdQuickViewModal] = useState();
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

  // SINGLE DETAIL PAGE OPEN
  const quickViewFunc = (id) => {
    setOpenQuickViewModal(true);
    setIdQuickViewModal(id);
    console.log(id);
  };

  return (
    <>
      <div id="navFixed">
        <Nav />
      </div>
      <Breadcrums />
      <div className="shop-container">
        <div className="shop__category-container"></div>
        <div className="shop__product-container">
          {selectList.map((item, index) => {
            const key = index + item.name;
            return (
              <div className="single-product" key={key}>
                <div
                  className="single-product__img"
                  onClick={() => quickViewFunc(item.id)}
                >
                  {item.image}
                </div>
                <div className="single-product__content">
                  <div id="price">&#8377;{item.price}.00</div>
                  <a href="" id="title" onClick={() => quickViewFunc(item.id)}>
                    {item.name}
                  </a>
                  <div id="ratings">
                    {Array(item.ratings)
                      .fill("")
                      .map((star) => {
                        return (
                          <span>
                            <Star color="#FFA41C" fill="#FFA41C" size={16} />
                          </span>
                        );
                      })}
                    {item.ratings < 5 &&
                      Array(5 - item.ratings)
                        .fill("")
                        .map((star) => {
                          return (
                            <span>
                              <Star color="#FFA41C" size={16} />
                            </span>
                          );
                        })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* <div className="ProductMain">
          {selectList.map((item, index) => {
            return (
              <div className="singleProduct" key={index}>
                <div
                  className="singleProductImg"
                  id={index}
                  onClick={singlPageOpen}
                >
                  {item.image}
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
        </div> */}
        <QuickView
          idQuickViewModal={idQuickViewModal}
          setOpenQuickViewModal={setOpenQuickViewModal}
          openQuickViewModal={openQuickViewModal}
        />
      </div>
    </>
  );
};

export default Shop;
