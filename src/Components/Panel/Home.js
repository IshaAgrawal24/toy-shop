import React from "react";
import "./Home.css";
import Header from "./PanelComponent/Header";
import Nav from "../Navbar/Nav";
import Footer from "../Footer";
import Benefit from "./PanelComponent/Benefit";
import BestSeller from "./PanelComponent/BestSeller";
import Offers from "./PanelComponent/Offers";
import Testimonial from "./PanelComponent/Testimonial";

const Home = () => {
  
  return (
    <div className="home">
      <Nav />
      <Header />
      {/* BENEFIT  */}
      <Benefit />
      {/* OFFERS  */}
      <Offers />
      {/* BEST SELLER  */}
      <BestSeller />
      {/* TESTIMONIALS  */}
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Home;
