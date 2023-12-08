import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../Context";
import "./Nav.css";
import {
  Grid,
  Heart,
  Menu,
  Search,
  ShoppingCart,
  User,
  X,
} from "react-feather";
import CartDrawer from "../Cart/CartDrawer/CartDrawer";
import { Drawer } from "@mui/material";

const Nav = () => {
  const {
    number,
    setDisplay,
    display,
    inputs,
    setInputs,
    search,
    openCartDrawer,
    setOpenCartDrawer,
  } = useContext(CartContext);

  const searchIcon = () => {
    if (display.prev === "none") {
      setDisplay({
        next: "none",
        prev: "block",
      });
    } else {
      setDisplay({
        next: "block",
        prev: "none",
      });
    }
  };

  const [openNavDrawer, setNavDrawer] = useState(false);
  return (
    <div className="nav">
      {/* LOGO  */}
      <div className="nav__main-lg">
        <div className="logo">
          <Link to="/">KIDO</Link>
        </div>

        <div className="navContent" style={{ display: display.next }}>
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/about">About us</Link>
        </div>

        {/* SearchBar  */}
        <div className="searchBar" style={{ display: display.prev }}>
          <form onSubmit={search}>
            <input
              type="search"
              id="search"
              name="search"
              placeholder="Search Here.."
              value={inputs}
              onChange={(event) => setInputs(event.target.value)}
            />
            <span>
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
          </form>
        </div>

        {/* ICONS  */}
        <div className="icons">
          <div>
            <Link to="/login">
              <User size={20} color="black" />
            </Link>
          </div>
          <div>
            <Link to="#" onClick={searchIcon}>
              <Search size={20} color="black" />
            </Link>
          </div>
          <div>
            <Link to="/wishlist">
              <Heart size={20} color="black" id="wishlist" />
            </Link>
          </div>
          <div className="shoppingCart">
            <Link>
              <ShoppingCart
                size={20}
                color="black"
                id="cart"
                onClick={() => {
                  setOpenCartDrawer(!openCartDrawer);
                }}
              />
            </Link>
            <span id="num">{number}</span>
          </div>
        </div>
        <CartDrawer />
      </div>

      <div className="nav__main-md">
        <div className="nav-md__top">
          <Menu
            size={20}
            color="black"
            onClick={() => {
              setNavDrawer(!openNavDrawer);
            }}
          />
          <div className="logo">
            <Link to="/">KIDO</Link>
          </div>
          <div className="icons">
            <div className="shoppingCart">
              <Link>
                <ShoppingCart
                  size={20}
                  color="black"
                  id="cart"
                  onClick={() => {
                    setOpenCartDrawer(!openCartDrawer);
                  }}
                />
              </Link>
              <span id="num">{number}</span>
            </div>
          </div>
        </div>
        <div className="nav-md__bottom">
          <div className="nav-md__bottom__icons">
            <div>
              <Link to="/shop">
                <Grid size={20} id="shop" />
                <p>Shop</p>
              </Link>
            </div>
            <div>
              <Link to="/login">
                <User size={20} />
                <p>Account</p>
              </Link>
            </div>
            <div>
              <Link to="#" onClick={searchIcon}>
                <Search size={20} />
                <p>Search</p>
              </Link>
            </div>
            <div>
              <Link to="/wishlist">
                <Heart size={20} id="wishlist" />
                <p>Wishlist</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Drawer
        anchor="left"
        open={openNavDrawer}
        onClose={() => setNavDrawer(!openNavDrawer)}
        sx={{
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: "200px",
            padding: "30px 20px 0",
          },
        }}
      >
        <div className="nav__drawer-data">
          <span id="cross">
            <X onClick={() => setNavDrawer(false)} />
          </span>
          <div id="content">
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/about">About us</Link>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default Nav;
