import React, { useState } from "react";
import { Form } from "react-bootstrap";

interface state {
  inputs: {
    principal: number;
    contributions: number;
    timeSpan: number;
    rateOfReturn: number;
  };
}

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

  return (
    <Form onSubmit={handleSubmit} className='bt-1'>
      <Form.Group controlId='formBasicPrincipal'>
        <Form.Label>Initial Investment</Form.Label>
        <Form.Control
          min='0'
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
        <Form.Group className='radio-buttons'>
          <Form.Check id='monthly' name='time' type='radio' value='Monthly' />
          <Form.Label htmlFor='monthly'>Monthly</Form.Label>

          <Form.Check id='annually' name='time' type='radio' value='annually' />
          <Form.Label htmlFor='annually'>Annually</Form.Label>
        </Form.Group>
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
      <Form.Group
        controlId='formBasicCompoundFrequency'
        className='radio-buttons'
      >
        <Form.Check id='daily' name='time' type='radio' value='daily' />
        <Form.Label htmlFor='daily'>Daily</Form.Label>
        <Form.Check id='monthly' name='time' type='radio' value='Monthly' />
        <Form.Label htmlFor='monthly'>Monthly</Form.Label>

        <Form.Check id='annually' name='time' type='radio' value='annually' />
        <Form.Label htmlFor='annually'>Annually</Form.Label>
      </Form.Group>
    </Form>
  );
};

export default InvestmentForm;
