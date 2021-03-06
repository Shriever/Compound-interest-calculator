import { useCallback, useEffect, useState } from "react";
import { Switch, Route, Redirect, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import "./index.scss";

import InvestmentForm from "./Components/InvestmentForm";
import About from "./Components/About";

import calculateCompound from "./utils/Calculator";
import findInputSource from "./utils/findInputSource";
import { validateInputs } from "./utils/validateInputs";
import { FieldErrors } from "./utils/interfaces";

const App = () => {
  const [inputs, setInputs] = useState({
    principal: 10000,
    annualContribution: 100,
    timeSpan: 5,
    rateOfReturn: 10,
  });
  const [total, setTotal] = useState<number>(0);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({
    principal: "",
    annualContribution: "",
    timeSpan: "",
    rateOfReturn: "",
  });

  const handleFormChange = useCallback(
    (e: InputEvent | any) => {
      const errors = validateInputs(inputs);
      setFieldErrors(errors)
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

  const investmentFormProps = { handleFormChange, inputs, fieldErrors, total };

  return (
    <Container className='app'>
      <Link to='/' className='link'>
        Calculator
      </Link>
      <Link to='/about' className='link'>
        About
      </Link>
      <h1 data-testid="header" className='text-center'>Levi's Compound Interest Calculator</h1>
      <Switch>
        <Route exact path='/'>
          <InvestmentForm {...investmentFormProps} />
        </Route>
        <Route exact path='/about' component={About} />
        <Route path='*'>
          <Redirect to='/' />
        </Route>
      </Switch>
    </Container>
  );
};

export default App;
