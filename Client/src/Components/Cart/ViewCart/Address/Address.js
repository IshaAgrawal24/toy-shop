import React, { useContext, useEffect, useState } from "react";
import "./Address.css";
import CartContext from "../../../../Context";
import TotalPrice from "../TotalPrice/TotalPrice";
import { loadStripe } from "@stripe/stripe-js";
import { AlertCircle } from "react-feather";

const Address = (_props) => {
  const { addCart } = useContext(CartContext);
  const { setActiveStep, activeStep } = _props;

  const [formDetails, setFormDetails] = useState({
    name: "",
    mobile: "",
    pincode: "",
    address: "",
    town: "",
    city: "",
    state: "",
  });
  const { name, mobile, pincode, address, town, city, state } = formDetails;
  const [loader, setLoader] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState("");

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  const checkValidation = () => {
    if (
      name === "" ||
      mobile === "" ||
      pincode === "" ||
      address === "" ||
      town === "" ||
      city === "" ||
      state === ""
    ) {
      setShowErrorAlert("Fill all the fields");
      return false;
    } else {
      setShowErrorAlert("");
      return true;
    }
  };

  const continueFunc = async () => {
    const validation = checkValidation();
    if (validation) {
      setLoader(true);
      const stripe = await loadStripe(
        "pk_test_51OKlNvSBkaXgGHW4HvYKLQXpkfIZ7tbtwXiPmIlyr66AekEbMtTaHNTR3appNPEJS98OzyyBUpMyNwbLGYLQiCRU00Sry3a3n7"
      );
      const body = {
        products: addCart,
      };

      const headers = {
        "Content-Type": "application/json",
      };
      const response = await fetch(
        "http://localhost:7000/api/create-checkout-session",
        { method: "POST", headers: headers, body: JSON.stringify(body) }
      );

      const session = await response.json();
      const result = stripe.redirectToCheckout({
        sessionId: session.id,
      });
      if (result.error) {
        console.log(result.error);
      }

      setActiveStep(activeStep + 1);
      setLoader(false);
    }
  };
  return (
    <div className="address__main">
      {showErrorAlert && (
        <p id="alert-msg">
          <span style={{ paddingRight: "10px" }}>
            <AlertCircle size={16} color="#b81c23" />
          </span>
          Fill all the required fields!
        </p>
      )}
      <div className="address__container">
        <div className="address__form--container">
          <h4>Select Delivery Address</h4>
          <div className="address__form--details">
            <div className="address-details">
              <h6>Contact Details</h6>
              <div>
                <input
                  type="text"
                  name="Name"
                  id="Name"
                  placeholder="Name*"
                  required
                  value={formDetails.name}
                  onChange={(event) => {
                    if (event.target.value.match("^[a-zA-Z\\s]*$")) {
                      setFormDetails({
                        ...formDetails,
                        name: event.target.value,
                      });
                    }
                  }}
                  onBlur={(event) => {
                    if (name === "") {
                      console.log("helo");
                    }
                  }}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="mobile"
                  id="mobile"
                  placeholder="Mobile No.*"
                  required
                  value={formDetails.mobile}
                  onChange={(event) => {
                    console.log(event.target.value);
                    if (event.target.value.match("^[0-9]")) {
                      setFormDetails({
                        ...formDetails,
                        mobile: event.target.value,
                      });
                    }
                  }}
                />
              </div>
            </div>
            <div className="address-details">
              <h6>Address</h6>
              <div>
                <input
                  type="text"
                  name="pincode"
                  id="pincode"
                  placeholder="Pin Code*"
                  required
                  value={formDetails.pincode}
                  onChange={(event) =>
                    setFormDetails({
                      ...formDetails,
                      pincode: event.target.value,
                    })
                  }
                />
              </div>
              <div>
                <input
                  type="text"
                  name="area"
                  id="area"
                  placeholder="Address (House No, Building, Street, Area)*"
                  required
                  value={formDetails.address}
                  onChange={(event) =>
                    setFormDetails({
                      ...formDetails,
                      address: event.target.value,
                    })
                  }
                />
              </div>
              <div>
                <input
                  type="text"
                  name="town"
                  id="town"
                  placeholder="Locality / Town*"
                  required
                  value={formDetails.town}
                  onChange={(event) =>
                    setFormDetails({
                      ...formDetails,
                      town: event.target.value,
                    })
                  }
                />
              </div>
              <div id="address-state">
                <input
                  type="text"
                  name="city"
                  id="city"
                  placeholder="City / District*"
                  value={formDetails.city}
                  onChange={(event) =>
                    setFormDetails({
                      ...formDetails,
                      city: event.target.value,
                    })
                  }
                />
                <input
                  type="text"
                  name="state"
                  id="state"
                  placeholder="State*"
                  value={formDetails.state}
                  onChange={(event) =>
                    setFormDetails({
                      ...formDetails,
                      state: event.target.value,
                    })
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <div className="address__delievery--estimates">
          <h6>Delivery Estimates</h6>
          <div className="address__delievery--date">
            {addCart.map((item, index) => {
              return (
                <div className="address__delievery--single" key={index}>
                  <div className="address__img">{item.image}</div>
                  <span>
                    Estimated Delivery in <b>2 days</b>
                  </span>
                </div>
              );
            })}
          </div>
          <div className="address__price--details">
            <TotalPrice />
            <div className="bag__total-place-order">
              <button className="txt-uppercase" onClick={() => continueFunc()}>
                {loader ? "Loading..." : "Continue"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
