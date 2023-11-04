import "./App.css";
import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./Context";
import Checkout from "./Components/Checkout";
import Placeorder from "./Components/Placeorder";
import Wishlist from "./Components/Wishlist/Wishlist";
import Login from "./Components/Auth/Login/Login";
import Signup from "./Components/Auth/Signup/Signup";
import Home from "./Components/Panel/Home";
import Shop from "./Components/Shop/Shop";
import About from "./Components/AboutUs/About";
import Contact from "./Components/Contact/Contact";
import Cart from "./Cart/Cart";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/placeorder" element={<Placeorder />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
