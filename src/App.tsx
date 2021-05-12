import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import InvestmentForm from "./Components/InvestmentForm";
import Value from "./Components/Value/Value";
import calculateCompound from "./utils/Calculator";
import {userData} from "./utils/Calculator";

const dummyData = {
  principal: 10000,
  annualContribution: 0,
  timeSpan: 1,
  rateOfReturn: 10,
};
function App() {
  const [state, setState] = useState<userData>({
    principal: 10000,
    annualContribution: 100,
    timeSpan: 5,
    rateOfReturn: 10,
  });
  const [total, setTotal] = useState<number>(0);

  const handleFormChange = (e: any) => {
    const inputName: string = e.target.name;
    setState((prevState: userData) => {
      if (inputName === "principal") {
        return {
          ...prevState,
          principal: Number(e.target.value),
        };
      }
      return prevState;
    });
    setTotal(calculateCompound(state));
  };
  const investmentFormProps = { handleFormChange, state };
  return (
    <div className='App'>
      <h1 className='text-center'>Stylish Compound Interest Calculator</h1>
      <h2>future balance</h2>
      <Value total={total} />
      <InvestmentForm {...investmentFormProps} />
    </div>
  );
}

export default App;
