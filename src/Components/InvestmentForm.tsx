import React from "react";
import { Form } from "react-bootstrap";
import { Props } from "./../utils/interfaces";

const InvestmentForm = (props: Props) => {
  const { handleFormChange, inputs } = props;
  return (
    <Form className='bt-1'>
      <Form.Group controlId='formBasicPrincipal'>
        <Form.Label>Initial Investment</Form.Label>
        <Form.Control
          min='100'
          type='number'
          name='principal'
          value={inputs.principal}
          onChange={handleFormChange}
        />
      </Form.Group>
      <Form.Group controlId='formBasicContributions'>
        <Form.Label>Contributions</Form.Label>
        <Form.Control
          min='0'
          type='number'
          name='annual-contribution'
          value={inputs.annualContribution}
          onChange={handleFormChange}
        />
      </Form.Group>
      <Form.Group controlId='formBasicTimeSpan'>
        <Form.Label>Investment Time Span in Years</Form.Label>
        <Form.Control
          min='0'
          type='number'
          name='time-span'
          value={inputs.timeSpan}
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
          value={inputs.rateOfReturn}
          onChange={handleFormChange}
        />
      </Form.Group>
    </Form>
  );
};

export default InvestmentForm;
