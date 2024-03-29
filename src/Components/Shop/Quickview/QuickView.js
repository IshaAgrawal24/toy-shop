import React, { useContext } from "react";
import "./QuickView.css";
import CartContext from "../../../Context";
import { Modal } from "@mui/material";
import { Globe, Heart, Minus, Plus, Star, Truck } from "react-feather";

const QuickView = (_props) => {
  const {
    idQuickViewModal,
    setOpenQuickViewModal,
    openQuickViewModal,
    wishlistMethod,
  } = _props;
  const { selectList } = useContext(CartContext);

  return (
    <Modal
      open={openQuickViewModal}
      onClose={() => setOpenQuickViewModal(!openQuickViewModal)}
    >
      <div id="quick-view">
        {selectList.map((item, index) => {
          const key = item.name + index;
          return item.id === idQuickViewModal ? (
            <div className="modal-container" key={key}>
              <div
                className="modal-container__cross"
                onClick={() => setOpenQuickViewModal(!openQuickViewModal)}
              >
                x
              </div>
              <div className="modal-child">
                <div className="modal-container__image">{item.image}</div>
                <div className="modal-container__content">
                  <div id="ratings">
                    <div>
                      {Array(item.ratings)
                        .fill("")
                        .map((star) => {
                          return (
                            <span>
                              <Star color="#FFA41C" fill="#FFA41C" size={15} />
                            </span>
                          );
                        })}
                      {item.ratings < 5 &&
                        Array(5 - item.ratings)
                          .fill("")
                          .map((star) => {
                            return (
                              <span>
                                <Star color="#FFA41C" size={15} />
                              </span>
                            );
                          })}
                    </div>
                    &nbsp;<span>(10 customer review)</span>
                  </div>
                  <h2 id="name">{item.name}</h2>
                  <div className="price-plan">
                    <span id="oldPrice">
                      <del>&#8377;{item.oldPrice}.00</del>
                    </span>
                    <span id="price">&#8377;{item.price}.00</span>
                  </div>

                  <hr />

                  <p className="description">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry...
                  </p>
                  <div className="modal-container__options">
                    <div className="quantity">
                      <Minus size={16} className="quantity-icon" />
                      <div>1</div>
                      <Plus size={16} className="quantity-icon" />
                    </div>

                    <button className="cart">Add to Cart</button>

                    <button
                      className="wishlist"
                      onClick={() => wishlistMethod(item.id)}
                    >
                      {item.wishlist == 1 ? (
                        <Heart size={16} fill="#1e2d5f" />
                      ) : (
                        <Heart size={16} />
                      )}
                    </button>
                  </div>
                  <button className="buy-now">Buy Now</button>
                  <div className="content__features">
                    <div className="worldwide">
                      <Globe color="#b7b7b7" strokeWidth="1.2px" size="18px" />
                      <p>
                        Free worldwide shipping on all orders over
                        &#8377;1000.00
                      </p>
                    </div>
                    <div className="delievery">
                      <Truck color="#b7b7b7" strokeWidth="1.2px" size="18px" />{" "}
                      <p>Delievers in: 3-7 working days</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null;
        })}
      </div>
    </Modal>
  );
};

export default QuickView;
