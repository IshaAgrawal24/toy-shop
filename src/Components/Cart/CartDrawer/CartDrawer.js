import React, { useContext, useEffect } from "react";
import "./CartDrawer.css";
import CartContext from "../../../Context";
import { Drawer } from "@mui/material";
import { Minus, Plus } from "react-feather";

const CartDrawer = () => {
  const { openCartDrawer, setOpenCartDrawer, addCart, setAddCart, setNumber } =
    useContext(CartContext);

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

  return (
    <Drawer
      anchor="right"
      open={openCartDrawer}
      onClose={() => setOpenCartDrawer(false)}
      sx={{
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: "450px",
          padding: "20px",
        },
      }}
    >
      <div className="cartDrawer__head">
        <h4 className="font-ballu">Cart({addCart.length})</h4>
        <button onClick={() => setOpenCartDrawer(!openCartDrawer)}>X</button>
      </div>
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
                    />
                    <div>1</div>
                    <Plus
                      size={16}
                      strokeWidth="2px"
                      className="quantity-icon"
                    />
                  </div>
                  <div className="cartDrawer__single-price">
                    &#8377;{item.price}.00
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
    </Drawer>
  );
};

export default CartDrawer;
