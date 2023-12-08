import React, { useEffect } from "react";
import "./Contact.css";
import Nav from "../Navbar/Nav";
import { Mail, MapPin, Phone } from "react-feather";
import Footer from "../Footer/Footer";

const Contact = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="contact-main">
      <div id="navFixed">
        <Nav />
      </div>
      <div className="head__breadcrumb">
        <h1>Contact us</h1>
      </div>
      <div className="contact__container">
        <div className="contact__container-form">
          <h3>Send us a message</h3>
          <div className="contact__form">
            <div className="form__input-box">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your name.."
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your email.."
              />
            </div>
            <div className="form__textarea">
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="Your message.."
              ></textarea>
            </div>
            <div className="contact__btn">
              <button>Send</button>
            </div>
          </div>
        </div>
        <div className="contact__container-info">
          <h3>Contact us</h3>
          <div className="contact__container__boxes">
            <div className="store__address contact__boxes-flex">
              <MapPin size={16} />
              <div className="contact__boxes-info">
                <h4>Our store</h4>
                <p>58 A, East Madison Street, Baltimore</p>
              </div>
            </div>
            <div className="phone__number contact__boxes-flex">
              <Phone size={16} />
              <div className="contact__boxes-info">
                <h4>Phone</h4>
                <p>+91-0512-383800</p>
              </div>
            </div>
            <div className="email__address contact__boxes-flex">
              <Mail size={16} />
              <div className="contact__boxes-info">
                <h4>Email</h4>
                <p>kido@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
