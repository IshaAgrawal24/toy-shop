import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import product from "./Components/Data";
const CartContext = createContext();

export function CartProvider({ children }) {
  let navigate = useNavigate();
  const [display, setDisplay] = useState({
    prev: "none",
    next: "block",
  });
  const [list, setList] = useState(product["Products"]);
  const [selectList, setSelectList] = useState(product["Products"]);
  const [addCart, setAddCart] = useState([]);
  const [amount, setAmount] = useState(0);
  const [number, setNumber] = useState(0);
  const [isSubmit, setIsSubmit] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [userArr, setUserArr] = useState([]);
  const [loggedUser, setLoggedUser] = useState("");
  const [count, setCount] = useState(1);
  const [inputs, setInputs] = useState("");
  // const [wishlist, setWishlist] = useState([]);

  const search = (event) => {
    event.preventDefault();
    navigate("/shop");
    if (inputs == "") {
      setSelectList(list);
    } else {
      // setIsSubmit(true);
      setSelectList(
        list.filter((item) => {
          return item.name.toLowerCase().includes(inputs);
        })
      );
    }
  };
  // console.log(selectList);

  return (
    <CartContext.Provider
      value={{
        list,
        setList,
        selectList,
        setSelectList,
        addCart,
        setAddCart,
        amount,
        setAmount,
        number,
        setNumber,
        isSubmit,
        setIsSubmit,
        isLogged,
        setIsLogged,
        userArr,
        setUserArr,
        loggedUser,
        setLoggedUser,
        count,
        setCount,
        inputs,
        setInputs,
        search,
        display,
        setDisplay,
        // wishlist,
        // setWishlist,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
export default CartContext;
