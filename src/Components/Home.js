import React from "react";
import { Link } from "react-router-dom";
import CartContext from "../Context";
import { useContext } from "react";
import "./Home.css";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";

const Home = () => {
  const { list } = useContext(CartContext);
  return (
    <div className="home">
      <Nav />
      <Header />

      {/* BENEFIT  */}
      <div className="benefit">
        <div className="singleBenefit">
          <div className="benefit-icon">
            <i class="fa-brands fa-cc-amazon-pay"></i>
          </div>
          <div className="benefit-content">
            <h4>Fast Payment</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
        <div className="singleBenefit">
          <div className="benefit-icon">
            <i class="fa-solid fa-arrow-right-arrow-left"></i>
          </div>
          <div className="benefit-content">
            <h4>Return & Exchange</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
        <div className="singleBenefit">
          <div className="benefit-icon">
            <i class="fa-solid fa-truck"></i>
          </div>
          <div className="benefit-content">
            <h4>Fast Delivery</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
      </div>

      {/* OFFERS  */}
      <div className="offers">
        <h2>Grab it Now!</h2>
        <div className="offer-container">
          <div className="container1">
            <img src="/images/offer1.png" alt="" />
            <p className="mainOffer">Flat 40% OFF</p>
            <p className="offerFor">Club Members</p>
          </div>
          <div className="container1">
            <img src="/images/offer2.png" alt="" />
            <p className="mainOffer">Flat 35% OFF</p>
            <p className="offerFor">For All Members</p>
          </div>
          <div className="container-last">
            <img src="/images/offer3.jpg" alt="" />
            <div>30% OFF</div>
          </div>
        </div>
      </div>

      {/* BEST SELLER  */}
      <div className="BestSellersMain">
        <h2>Best Sellers</h2>
        <div className="bestSeller">
          {list.map((item, index) => {
            return (
              <>
                {index < 4 ? (
                  <Link to="/shop">
                    <div className="bestSellerSingle" key={index}>
                      <div className="bestSingleImg">
                        {" "}
                        <img src={item.image} alt="" />
                      </div>
                      <h4>{item.name}</h4>
                      <p>&#8377;{item.price}.00</p>
                    </div>
                  </Link>
                ) : null}
              </>
            );
          })}
        </div>
      </div>

      {/* TESTIMONIALS  */}
      <div className="testimonial">
        <h2>Testimonials</h2>
        <div className="testimonial-section">
          <div className="testimonialChild">  
            <div className="testimonialImage">
              <img src="/images/girlImage.png" alt="" />
            </div>
            <p>
              "Lorem Ipsum is simply dummy text of the printing and type setting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book."
            </p>
            <span>~Kusum Sharma</span>
          </div>
          <div className="testimonialChild">
            <div className="testimonialImage">
              <img src="/images/boyImage.webp" alt="" />
            </div>
            <p>
              "Lorem Ipsum is simply dummy text of the printing and type setting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book."
            </p>
            <span>~Shyam Arora</span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
