import { UserData } from "./interfaces";

const calculateCompound = (data: UserData) => {
  const { principal, annualContribution, timeSpan, rateOfReturn } = data;

  const rate = rateOfReturn / 100;

  const investmentTotal = calculateCompoundPrincipal(principal, rate, timeSpan);

  const contributionTotal = calculateCompoundSeries(
    annualContribution,
    rate,
    timeSpan
  );

  const total = investmentTotal + contributionTotal;

  return Math.ceil(total);
};

const calculateCompoundSeries = (
  contribution: number,
  rate: number,
  timeSpan: number
) => {
  const total: number =
    contribution * (((1 + rate) ** timeSpan - 1) / rate) * (1 + rate);

  return total;
};

const calculateCompoundPrincipal = (
  principal: number,
  rate: number,
  timeSpan: number
) => {
  const total: number = principal * (1 + rate) ** timeSpan;

  return total;
};

export default calculateCompound;
