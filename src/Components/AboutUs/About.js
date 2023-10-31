import React from "react";
import "./About.css";
import Nav from "../Navbar/Nav";
import Footer from "../Footer/Footer";

const About = () => {
  return (
    <div className="about">
      <div id="navFixed">
        <Nav />
      </div>
      <div className="head__breadcrumb">
        <h1>About us</h1>
      </div>
      <div className="about__container">
        <div className="about-container__furniture">
          <div className="about-furniture__img">
            <img
              src={require("../../Utils/About/furniture-img.jpg")}
              alt="children's room furniture"
            />
          </div>
          <div className="about-furniture__content">
            <h2>Children's room furniture</h2>
            <p>
              When it comes to children’s playroom interior design, our
              designers have tons of cool and unique ideas, sure any child will
              be happy if you help your child have his or her own entertainment.
            </p>
            <p>
              This is not time to great, you have to be happy play that you
              don’t have any limitation.
            </p>
          </div>
        </div>

        <div className="about__features">
          <h2>Notes when buying newborn</h2>
          <h2>baby clothes!</h2>
          <div className="about__features-icons">
            <div className="single-icon">
              <i
                class="fa-solid fa-thumbs-up"
                style={{
                  color: "#4176d2",
                  fontSize: "26px",
                }}
              ></i>
              <h4>About the material</h4>
              <p>Choose clothes made of cotton</p>
            </div>
            <div className="single-icon">
              <i
                class="fa-solid fa-bag-shopping"
                style={{
                  color: "#4176d2",
                  fontSize: "26px",
                }}
              ></i>
              <h4>About the brand</h4>
              <p>Choose reputable and famous brands</p>
            </div>
            <div className="single-icon">
              <i
                class="fa-solid fa-palette"
                style={{
                  color: "#4176d2",
                  fontSize: "26px",
                }}
              ></i>
              <h4>About the color</h4>
              <p>Should choose light and netural colors</p>
            </div>
          </div>
        </div>
        <div className="about-container__furniture">
          <div className="about-furniture__content">
            <h2>Children's room furniture</h2>
            <p>
              Children’s room decor with toys, our designers have tons of unique
              and interesting ideas, sure that any child will be very happy if
              you keep your child entertained.
            </p>
          </div>
          <div className="about-furniture__img">
            <img
              src={require("../../Utils/About/furniture-img-2.jpg")}
              alt="children's room furniture"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
