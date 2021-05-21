import React, { useCallback, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import InvestmentForm from "./Components/InvestmentForm";
import calculateCompound from "./utils/Calculator";
import findInputSource from "./utils/findInputSource";
import validateInputs from "./utils/validateInputs";
import { fieldErrors } from "./utils/interfaces";
import { Container } from "react-bootstrap";
import numeral from "numeral";

function App() {
  const [inputs, setInputs] = useState({
    principal: 10000,
    annualContribution: 100,
    timeSpan: 5,
    rateOfReturn: 10,
  });
  const [total, setTotal] = useState<number>(0);
  const [fieldErrors, setFieldErrors] = useState<fieldErrors>({
    principal: "",
    annualContribution: "",
    timeSpan: "",
    rateOfReturn: "",
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

  const investmentFormProps = { handleFormChange, inputs, fieldErrors };

  return (
    <Container className='app'>
      <h1 className='text-center'>Levi's Compound Interest Calculator</h1>
      <h2 className='future-balance'>Future Balance</h2>
      <h2 className='total'>${numeral(total).format("0,0")}</h2>
      <InvestmentForm {...investmentFormProps} />
    </Container>
  );
}

export default App;
