import React, { useState } from "react";
import "./Filter.css";
import CartContext from "../Context";
import { useContext } from "react";

const Filter = () => {
  const { list, selectList, setSelectList } = useContext(CartContext);

  // const [price, setPrice] = useState();

  const select = (event) => {
    if (event.currentTarget.value === "Teddy") {
      setSelectList(
        list.filter((item) => {
          return item.name.includes(event.currentTarget.value);
        })
      );
      document.getElementById("age").value = "null";
      document.getElementById("price").value = "null";
    } else if (event.currentTarget.value === "Elephant") {
      setSelectList(
        list.filter((item) => {
          return item.name.includes(event.currentTarget.value);
        })
      );
      document.getElementById("age").value = "null";
      document.getElementById("price").value = "null";
    } else if (event.currentTarget.value === "Pig") {
      setSelectList(
        list.filter((item) => {
          return item.name.includes(event.currentTarget.value);
        })
      );
      document.getElementById("age").value = "null";
      document.getElementById("price").value = "null";
    } else if (event.currentTarget.value === "Lion") {
      setSelectList(
        list.filter((item) => {
          return item.name.includes(event.currentTarget.value);
        })
      );
      document.getElementById("age").value = "null";
      document.getElementById("price").value = "null";
    } else if (
      event.currentTarget.value === "All" ||
      event.currentTarget.value === "null"
    ) {
      setSelectList(list);
      document.getElementById("price").value = "null";
      document.getElementById("age").value = "null";
      // setPrice();
      // setOption(event.currentTarget.value);
    }
  };

  // CATEGORY AGE WISE
  const age = (event) => {
    if (event.currentTarget.value === "2") {
      setSelectList(
        list.filter((item) => {
          return item.age.includes(event.currentTarget.value);
        })
      );
      document.getElementById("type").value = "null";
      document.getElementById("price").value = "null";
    } else if (event.currentTarget.value === "4") {
      setSelectList(
        list.filter((item) => {
          return item.age.includes(event.currentTarget.value);
        })
      );
      document.getElementById("type").value = "null";
      document.getElementById("price").value = "null";
    } else if (event.currentTarget.value === "5") {
      setSelectList(
        list.filter((item) => {
          return item.age.includes(event.currentTarget.value);
        })
      );
      document.getElementById("type").value = "null";
      document.getElementById("price").value = "null";
    } else if (event.currentTarget.value === "8") {
      setSelectList(
        list.filter((item) => {
          return item.age.includes(event.currentTarget.value);
        })
      );
      document.getElementById("type").value = "null";
      document.getElementById("price").value = "null";
    } else if (event.currentTarget.value === "null") {
      setSelectList(list);
      // setPrice();
    }
  };
  const selectPrice = (event) => {
    if (event.currentTarget.value == "low") {
      selectList.sort((a, b) => {
        return a.price - b.price;
      });
      setSelectList([...selectList]);

      // setPrice(event.currentTarget.value);
    } else if (event.currentTarget.value == "high") {
      selectList.sort((a, b) => {
        return b.price - a.price;
      });
      // setPrice(event.currentTarget.value);
      setSelectList([...selectList]);
    }
  };
  return (
    <div className="filter">
      <select name="Age" id="age" onChange={age}>
        <option value="null">Age</option>
        <option value="2">0-2 Years</option>
        <option value="4">0-4 Years</option>
        <option value="5">3-5 Years</option>
        <option value="8">5-8 Years</option>
      </select>

      <select name="brands" id="type" onChange={select}>
        <option value="null">Type</option>
        <option value="Teddy">Teddy Bear</option>
        <option value="Elephant">Elephant</option>
        <option value="Pig">Peppa Pig</option>
        <option value="Lion">Lion</option>
        <option value="All">All</option>
      </select>

      <select name="Age" id="price" onChange={selectPrice}>
        <option value="null">Price</option>
        <option value="high">High to Low</option>
        <option value="low">Low to High</option>
      </select>
    </div>
  );
};

export default Filter;
