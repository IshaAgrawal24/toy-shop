import React, { useEffect, useState } from "react";
import "./Footer.css";
import { ArrowRight, Mail, Phone } from "react-feather";

const Footer = () => {
  const [date, setDate] = useState();

  useEffect(() => {
    const dateTemp = new Date();
    const year = dateTemp.getFullYear();
    setDate(year);
  }, []);
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer-connect">
          <h4>Contact us</h4>
          <p>
            Do you have questions about your order or a product of your choice ?
          </p>
          <div className="footer-connect__contact">
            <div className="footer-connect__phone">
              <div className="contact__icon">
                <Phone size={12} />
              </div>
              <div className="phone">
                <p>+91-0512-383800</p>
                <p>(Mon - Fri, 8AM - 4PM)</p>
              </div>
            </div>
            <div className="footer-connect__email">
              <span className="contact__icon">
                <Mail size={12} />
              </span>
              <span>kido@gmail.com</span>
            </div>
          </div>
        </div>
        <div className="newsletter">
          <h3>Newsletter</h3>
          <p>
            Subscribe to receive updates, access to exclusive <br /> deals, and
            more!
          </p>
          <div className="newsletter__email">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your email.."
            />
            <button>
              <ArrowRight size={18} strokeWidth="2px" />
            </button>
          </div>
        </div>
        <div className="extras">
          <h3>Extras</h3>
          <ul>
            <li>
              <a href="/about">About us</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/wishlist">Wishlist</a>
            </li>
            <li>
              <a href="/shop">All Collections</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-copyright">
        &copy; {date} All Copyright reserved | <span>KIDO</span>
      </div>

      <div className="footer-img">
        <img src={require("../../Utils/Footer/bear.png")} alt="bear-img" />
      </div>
    </div>
  );
};

export default Footer;
