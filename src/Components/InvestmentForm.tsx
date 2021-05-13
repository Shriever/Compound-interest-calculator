import React from "react";
import { Form } from "react-bootstrap";

interface Props {
  handleFormChange: (e: any) => void;
  state: {
    principal: number;
    annualContribution: number;
    timeSpan: number;
    rateOfReturn: number;
  };
}

const InvestmentForm = (props: Props) => {
  const { handleFormChange, state } = props;
  return (
    <Form className='bt-1'>
      <Form.Group controlId='formBasicPrincipal'>
        <Form.Label>Initial Investment</Form.Label>
        <Form.Control
          min='100'
          type='number'
          name='principal'
          value={state.principal}
          onChange={handleFormChange}
        />
      </Form.Group>
      <Form.Group controlId='formBasicContributions'>
        <Form.Label>Contributions</Form.Label>
        <Form.Control
          min='0'
          type='number'
          name='annual-contribution'
          value={state.annualContribution}
          onChange={handleFormChange}
        />
      </Form.Group>
      <Form.Group controlId='formBasicTimeSpan'>
        <Form.Label>Investment Time Span in Years</Form.Label>
        <Form.Control
          min='0'
          type='number'
          name='time-span'
          value={state.timeSpan}
          onChange={handleFormChange}
        />
      </Form.Group>
      <Form.Group controlId='formBasicRateOfReturn'>
        <Form.Label>Annual Rate of Return</Form.Label>
        <Form.Control
          min='1'
          max='1000'
          type='number'
          name='rate-of-return'
          value={state.rateOfReturn}
          onChange={handleFormChange}
        />
      </Form.Group>
    </Form>
  );
};

export default InvestmentForm;
