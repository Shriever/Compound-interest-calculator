export interface UserData {
  principal: number;
  annualContribution: number;
  timeSpan: number;
  rateOfReturn: number;
}

type FieldError = string | null | undefined;

export interface FieldErrors {
  principal: FieldError;
  annualContribution: FieldError;
  timeSpan: FieldError;
  rateOfReturn: FieldError;
}

export interface Props {
  handleFormChange: (e: any) => void;
  inputs: UserData;
  fieldErrors: FieldErrors;
  total: number;
}
