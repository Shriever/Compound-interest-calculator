import { fieldErrors, userData } from "./interfaces";

const validatePrincipal = (principal: number) => {
  return null;
};

const validateAnnualContributions = (annualContributions: number) => {
  return null;
};

const validateTimeSpan = (timeSpan: number) => {
  return null;
};

const validateRateOfReturn = (rateOfReturn: number) => {
  return null;
};

const validateInputs = (inputs: userData, setFieldErrors: any) => {
  const newFieldErrors: fieldErrors = {
    principal: null,
    annualContribution: null,
    timeSpan: null,
    rateOfReturn: null,
  };
  newFieldErrors.principal = validatePrincipal(inputs.principal);
  newFieldErrors.annualContribution = validateAnnualContributions(
    inputs.annualContribution
  );
  newFieldErrors.timeSpan = validateTimeSpan(inputs.timeSpan);
  newFieldErrors.rateOfReturn = validateRateOfReturn(inputs.rateOfReturn);

  setFieldErrors(newFieldErrors);
};

export default validateInputs;
