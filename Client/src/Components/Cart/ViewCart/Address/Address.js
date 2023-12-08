import React, { useContext, useEffect, useState } from "react";
import "./Address.css";
import CartContext from "../../../../Context";
import TotalPrice from "../TotalPrice/TotalPrice";
import { loadStripe } from "@stripe/stripe-js";

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
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  const continueFunc = async () => {
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
    setLoader(false);
    setActiveStep(activeStep + 1);
  };
  return (
    <div className="address__main">
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
                  onChange={(event) =>
                    setFormDetails({ ...formDetails, name: event.target.value })
                  }
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
                  onChange={(event) =>
                    setFormDetails({
                      ...formDetails,
                      mobile: event.target.value,
                    })
                  }
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
              <button
                className="txt-uppercase"
                onLoad={true}
                loader={true}
                onClick={() => continueFunc()}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
