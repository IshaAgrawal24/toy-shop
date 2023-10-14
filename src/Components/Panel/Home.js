import React from "react";
import "./Home.css";
import Nav from "../Navbar/Nav";
import Benefit from "./PanelComponent/Benefit/Benefit";
import Offers from "./PanelComponent/Offers";
import Category from "./PanelComponent/Category/Category";
import Advertisement from "./PanelComponent/Advertisement/Advertisement";
import LookBook from "./PanelComponent/LookBook/LookBook";
import Testimonial from "./PanelComponent/Testimonial/Testimonial";
import Footer from "../Footer/Footer";
import Header from "./PanelComponent/Header/Header";
import BestSeller from "./PanelComponent/BestSeller/BestSeller";

const Home = () => {
  return (
    <div className="home">
      <Nav />
      <div className="header">
        <Header />
      </div>
      <Category />
      <Offers />
      <BestSeller />
      <Advertisement />
      <Benefit />
      <LookBook />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Home;
