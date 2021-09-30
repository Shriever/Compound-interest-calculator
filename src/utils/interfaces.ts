export interface userData {
  principal: number;
  annualContribution: number;
  timeSpan: number;
  rateOfReturn: number;
}

export interface fieldErrors {
  principal: string | null | undefined;
  annualContribution: string | null | undefined;
  timeSpan: string | null | undefined;
  rateOfReturn: string | null | undefined;
}

export interface Props {
  handleFormChange: (e: any) => void;
  inputs: userData;
  fieldErrors: fieldErrors;
  total: number;
}
