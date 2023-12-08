import React, { useEffect } from "react";
import "./Home.css";
import Nav from "../Navbar/Nav";
import Benefit from "./PanelComponent/Benefit/Benefit";
import Offers from "./PanelComponent/Offers";
import Category from "./PanelComponent/Category/Category";
import Advertisement from "./PanelComponent/Advertisement/Advertisement";
import LookBook from "./PanelComponent/LookBook/LookBook";
import Footer from "../Footer/Footer";
import Header from "./PanelComponent/Header/Header";

const Home = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="home">
      <Nav />
      <div className="header">
        <Header />
      </div>
      <Category />
      <Offers />
      <Advertisement />
      <Benefit />
      <LookBook />
      <Footer />
    </div>
  );
};

export default Home;
