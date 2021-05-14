import React, { useCallback, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import InvestmentForm from "./Components/InvestmentForm";
import calculateCompound from "./utils/Calculator";
import findInputSource from "./utils/findInputSource";
import validateInputs from "./utils/validateInputs";
import { fieldErrors } from "./utils/interfaces";

function App() {
  const [inputs, setInputs] = useState({
    principal: 10000,
    annualContribution: 100,
    timeSpan: 5,
    rateOfReturn: 10,
  });
  const [total, setTotal] = useState<number>(0);
  const [fieldErrors, setFieldErrors] = useState<fieldErrors>({
    principal: null,
    annualContribution: null,
    timeSpan: null,
    rateOfReturn: null,
  });

    const handleFormChange = useCallback(
    (e: any) => {
      validateInputs(inputs, setFieldErrors);
      setInputs(prevState => {
        return findInputSource(e, prevState);
      });
      setTotal(calculateCompound(inputs));
    },
    [inputs]
  );

  useEffect(() => {
    handleFormChange({ target: { name: "" } });
  }, [handleFormChange]);

  const investmentFormProps = { handleFormChange, inputs };

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
