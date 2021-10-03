import { UserData } from "./interfaces";

const findInputSource = (e: any, prevState: UserData) => {
  const inputName: string = e.target.name;
  const inputValue: number = parseInt(e.target.value);
  if (inputName === "principal") {
    return {
      ...prevState,
      principal: inputValue,
    };
  } else if (inputName === "annual-contribution") {
    return {
      ...prevState,
      annualContribution: inputValue,
    };
  } else if (inputName === "time-span") {
    return {
      ...prevState,
      timeSpan: inputValue,
    };
  } else if (inputName === "rate-of-return") {
    return {
      ...prevState,
      rateOfReturn: inputValue,
    };
  }
  return prevState;
};

export default findInputSource;
