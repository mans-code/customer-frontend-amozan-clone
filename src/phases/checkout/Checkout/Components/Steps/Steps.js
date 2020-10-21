import React from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import "./Steps.css";

function getSteps() {
  return ["Address", "Review", "Payment", "Sammary"];
}

export default function StepsNav({currentStep}) {
  const steps = getSteps();
  return (
    <Stepper activeStep={currentStep - 1}>
      {steps.map((label) => {
        const stepProps = {};
        const labelProps = {};
        return (
          <Step key={label} {...stepProps}>
            <StepLabel {...labelProps} >{label}</StepLabel>
          </Step>
        );
      })}
    </Stepper>
  );
}
