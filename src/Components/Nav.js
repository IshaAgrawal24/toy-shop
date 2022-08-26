import React, { useState } from "react";
import { Link } from "react-router-dom";
import CartContext from "../Context";
import { useContext } from "react";
import "./Nav.css";
import { Button, Drawer, List, ListItem, ListItemText } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const {
    number,
    loggedUser,
    isLogged,
    setDisplay,
    display,
    inputs,
    setInputs,
    search,
  } = useContext(CartContext);

  // let navigate = useNavigate();

  // const [state, setState] = useState(false);

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
  return (
    <div className="nav">
      {/* LOGO  */}
      <div className="logo">
        <Link to="/">KIDO</Link>
      </div>

      <div className="navContent" style={{ display: display.next }}>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
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

      {/* CART  */}
      <div className="cart">
        <Link to="/login">
          <i className="fa-regular fa-user" title="user"></i>
        </Link>
        <Link to="/wishlist">
          <i className="fa-regular fa-heart" title="wishlist"></i>
        </Link>
        <Link to="#" onClick={searchIcon}>
          <i className="fa-solid fa-magnifying-glass" title="search"></i>
        </Link>
        <Link to="/Cart">
          <i className="fa-solid fa-cart-shopping" id="cart" title="cart">
            <span id="num">{number}</span>
          </i>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
