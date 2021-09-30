import { FieldErrors, UserData } from "./interfaces";

const validatePrincipal = (principal: number) => {
  if (principal <= 0) return "Please enter an investment amount above 0";
  return "";
};

const validateAnnualContributions = (annualContribution: number) => {
  if (annualContribution < 0) return "Contribution amount cannot be negative";
  return "";
};

const validateTimeSpan = (timeSpan: number) => {
  if (timeSpan <= 0) return "Please enter a time span above 0";
  return "";
};

const validateRateOfReturn = (rateOfReturn: number) => {
  if (rateOfReturn <= 0) return "Please enter a rate of return above 0";
  return "";
};

export const validateInputs = (inputs: UserData) => {
  const newFieldErrors: FieldErrors = {
    principal: "",
    annualContribution: "",
    timeSpan: "",
    rateOfReturn: "",
  };

  newFieldErrors.principal = validatePrincipal(inputs.principal);
  newFieldErrors.annualContribution = validateAnnualContributions(
    inputs.annualContribution
  );
  newFieldErrors.timeSpan = validateTimeSpan(inputs.timeSpan);
  newFieldErrors.rateOfReturn = validateRateOfReturn(inputs.rateOfReturn);

  return newFieldErrors;
};
