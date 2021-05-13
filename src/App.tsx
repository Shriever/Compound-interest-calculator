import React, { useCallback, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import InvestmentForm from "./Components/InvestmentForm";
import calculateCompound from "./utils/Calculator";
// import { userData } from "./utils/Calculator";

function App() {
  const [state, setState] = useState({
    principal: 10000,
    annualContribution: 100,
    timeSpan: 5,
    rateOfReturn: 10,
  });
  const [total, setTotal] = useState<number>(0);

  const findInputSource = (e: any, prevState: any) => {
    const inputName: string = e.target.name;
    const inputValue: number = e.target.value;
    if (inputName === "principal") {
      return {
        ...prevState,
        principal: Number(inputValue),
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

  const handleFormChange = useCallback(
    (e: any) => {
      setState(prevState => {
        return findInputSource(e, prevState);
      });
      setTotal(calculateCompound(state));
    },
    [state]
  );

  useEffect(() => {
    handleFormChange({ target: { name: "" } });
  }, [handleFormChange]);

  const investmentFormProps = { handleFormChange, state };

  return (
    <div className='App'>
      <h1 className='text-center'>Stylish Compound Interest Calculator</h1>
      <h2>future balance</h2>
      <h2>${total}</h2>
      <InvestmentForm {...investmentFormProps} />
    </div>
  );
}

export default App;
