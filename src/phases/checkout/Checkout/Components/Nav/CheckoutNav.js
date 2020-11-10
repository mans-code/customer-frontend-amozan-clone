import React from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";

import "./CheckoutNav.css";

function getSteps() {
  return ["Address", "Review", "Payment", "Sammary"];
}

function CheckoutNav({ stepNum }) {
  const steps = getSteps();
  return (
    <Stepper activeStep={stepNum} alternativeLabel>
      {steps.map((label) => {
        const stepProps = {};
        const labelProps = {};
        return (
          <Step key={label} {...stepProps}>
            <StepLabel {...labelProps}>{label}</StepLabel>
          </Step>
        );
      })}
    </Stepper>
  );
}

export default CheckoutNav;
