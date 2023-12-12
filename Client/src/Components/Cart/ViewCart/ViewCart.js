import React, { useState } from "react";
import "./ViewCart.css";
import Nav from "../../Navbar/Nav";
import { Step, StepLabel, Stepper } from "@mui/material";
import Bag from "./Bag/Bag";
import Address from "./Address/Address";
import Payment from "./Payment/Payment";
import Footer from "../../Footer/Footer";

const ViewCart = () => {
  const steps = ["Bag", "Address", "Payment"];
  const [activeStep, setActiveStep] = useState(0);
  const [allStepsCompleted, setAllStepsCompleted] = useState(false);

  const currentStep = () => {
    switch (activeStep) {
      case 0:
        return <Bag setActiveStep={setActiveStep} activeStep={activeStep} />;
      case 1:
        return (
          <Address setActiveStep={setActiveStep} activeStep={activeStep} />
        );
      case 2:
        return (
          <Payment setActiveStep={setActiveStep} activeStep={activeStep} />
        );
    }
  };
  return (
    <div className="viewCart-main">
      <div id="navFixed">
        <Nav />
      </div>
      <div className="viewCart__stepper">
        <Stepper activeStep={activeStep}>
          {steps.map((item, index) => {
            return (
              <Step key={item}>
                <StepLabel>{item}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </div>
      <div className="viewCart__tabs">
        {allStepsCompleted ? "" : currentStep()}
      </div>
      <Footer />
    </div>
  );
};

export default ViewCart;
