import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../Context";
import "./Nav.css";
import { Heart, Search, ShoppingCart, User } from "react-feather";

const Nav = () => {
  const { number, setDisplay, display, inputs, setInputs, search } =
    useContext(CartContext);

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
          <Link to="/cart">
            <ShoppingCart size={20} color="black" id="cart" />
          </Link>
        </div>
        <span id="num">{number}</span>
      </div>
    </div>
  );
};

export default Nav;
