export interface UserData {
  principal: number;
  annualContribution: number;
  timeSpan: number;
  rateOfReturn: number;
}

export interface FieldErrors {
  principal: string | null | undefined;
  annualContribution: string | null | undefined;
  timeSpan: string | null | undefined;
  rateOfReturn: string | null | undefined;
}

export interface Props {
  handleFormChange: (e: any) => void;
  inputs: UserData;
  fieldErrors: FieldErrors;
  total: number;
}
