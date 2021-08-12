import { useCallback, useEffect, useState } from "react";
import { Switch, Route, Redirect, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import InvestmentForm from "./Components/InvestmentForm";
import About from "./Components/About";
import calculateCompound from "./utils/Calculator";
import findInputSource from "./utils/findInputSource";
import validateInputs from "./utils/validateInputs";
import { fieldErrors } from "./utils/interfaces";
import { Container } from "react-bootstrap";

const App = () => {
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

  const investmentFormProps = { handleFormChange, inputs, fieldErrors, total };

  return (
    <Container className='app'>
      <Link to='/Compound-interest-calculator' className='link'>
        Calculator
      </Link>
      <Link to='/about' className='link'>
        About
      </Link>
      <h1 className='text-center'>Levi's Compound Interest Calculator</h1>
      <Switch>
        <Route exact path='/Compound-interest-calculator'>
          <InvestmentForm {...investmentFormProps} />
        </Route>
        <Route exact path='/about' component={About} />
        <Route path='*'>
          <Redirect to='/Compound-interest-calculator' />
        </Route>
      </Switch>
    </Container>
  );
};

export default App;
