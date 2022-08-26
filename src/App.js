import "./App.css";
import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./Context";
import Home from "./Components/Home";
import Shop from "./Components/Shop";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import Placeorder from "./Components/Placeorder";
import Wishlist from "./Components/Wishlist";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
function App() {
  return (
    <div className="App">
      <CartProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/wishlist" element={<Wishlist />}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/checkout" element={<Checkout />}/>
          <Route path="/placeorder" element={<Placeorder />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<Signup />}/>
        </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
