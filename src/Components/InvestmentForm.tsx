import React, { useState } from "react";
import { Form } from "react-bootstrap";
import calculateCompound from "./../utils/Calculator";

interface state {
  inputs: {
    principal: number;
    contributions: number;
    timeSpan: number;
    rateOfReturn: number;
  };
}
const dummyData = {
  initialDeposit: 10000,
  contributions: { amount: 0, rate: "annually" },
  timeSpan: 1,
  rateOfReturn: 10,
  compoundFrequency: "annually",
};

const InvestmentForm: React.FC = () => {
  const [state, setState] = useState<state>({
    inputs: {
      principal: 10000,
      contributions: 100,
      timeSpan: 5,
      rateOfReturn: 10,
    },
  });
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };
  console.log(calculateCompound(dummyData));

  return (
    <Form onSubmit={handleSubmit} className='bt-1'>
      <Form.Group controlId='formBasicPrincipal'>
        <Form.Label>Initial Investment</Form.Label>
        <Form.Control
          min='100'
          type='number'
          name='principal'
          value={state.inputs.principal}
          onChange={e =>
            setState(prevState => {
              return {
                ...prevState,
                inputs: {
                  ...prevState.inputs,
                  principal: Number(e.target.value),
                },
              };
            })
          }
        />
      </Form.Group>
      <Form.Group controlId='formBasicContributions'>
        <Form.Label>Contributions</Form.Label>
        <Form.Control
          min='0'
          type='number'
          name='contributions'
          value={state.inputs.contributions}
          onChange={e =>
            setState(prevState => {
              return {
                ...prevState,
                inputs: {
                  ...prevState.inputs,
                  contributions: Number(e.target.value),
                },
              };
            })
          }
        />
        <Form.Group className='radio-buttons'>
          <Form.Check id='monthly' name='time' type='radio' value='Monthly' />
          <Form.Label htmlFor='monthly'>Monthly</Form.Label>

          <Form.Check id='annually' name='time' type='radio' value='annually' />
          <Form.Label htmlFor='annually'>Annually</Form.Label>
        </Form.Group>
      </Form.Group>
      <Form.Group controlId='formBasicTimeSpan'>
        <Form.Label>Investment Time Span in Years</Form.Label>
        <Form.Control
          min='0'
          type='number'
          name='timeSpan'
          value={state.inputs.timeSpan}
          onChange={e =>
            setState(prevState => {
              return {
                ...prevState,
                inputs: {
                  ...prevState.inputs,
                  timeSpan: Number(e.target.value),
                },
              };
            })
          }
        />
      </Form.Group>
      <Form.Group controlId='formBasicRateOfReturn'>
        <Form.Label>Annual Rate of Return</Form.Label>
        <Form.Control
          min='0'
          max='1000'
          type='number'
          name='rateOfReturn'
          value={state.inputs.rateOfReturn}
          onChange={e =>
            setState(prevState => {
              return {
                ...prevState,
                inputs: {
                  ...prevState.inputs,
                  rateOfReturn: Number(e.target.value),
                },
              };
            })
          }
        />
      </Form.Group>
      <Form.Group controlId='formBasicCompoundRate' className='radio-buttons'>
        <Form.Label className='group-title'>Compound Frequency</Form.Label>
        <Form.Check id='daily' name='compoundRate' type='radio' value='daily' />
        <Form.Label htmlFor='daily'>Daily</Form.Label>
        <Form.Check
          id='monthly-comp'
          name='compoundRate'
          type='radio'
          value='Monthly'
        />
        <Form.Label htmlFor='monthly-comp'>Monthly</Form.Label>

        <Form.Check
          id='annually-comp'
          name='compoundRate'
          type='radio'
          value='annually'
        />
        <Form.Label htmlFor='annually-comp'>Annually</Form.Label>
      </Form.Group>
    </Form>
  );
};

export default InvestmentForm;
