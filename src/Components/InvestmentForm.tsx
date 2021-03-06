import { Form, Alert } from "react-bootstrap";
import { Props } from "./../utils/interfaces";
import numeral from "numeral";

const InvestmentForm = (props: Props) => {
  const { handleFormChange, inputs, total } = props;
  const formattedTotal = numeral(total).format("0,0");
  return (
    <>
      <h2 className='future-balance'>Future Balance</h2>
      <h2 data-testid='total' className='total'>
        ${formattedTotal}
      </h2>

      <Form data-testid='form' className='bt-1 investment-form'>
        <Form.Group controlId='formBasicPrincipal'>
          <Form.Label>Initial Investment</Form.Label>
          <Form.Control
            className='form-input'
            min='100'
            type='number'
            name='principal'
            data-testid='principal'
            value={inputs.principal}
            onChange={handleFormChange}
          />
          {props.fieldErrors.principal && (
            <Alert variant='danger' className='form-error'>
              {props.fieldErrors.principal}
            </Alert>
          )}
        </Form.Group>
        <Form.Group controlId='formBasicContributions'>
          <Form.Label>Annual Contribution</Form.Label>
          <Form.Control
            className='form-input'
            min='0'
            type='number'
            name='annual-contribution'
            data-testid='annual-contribution'
            value={inputs.annualContribution}
            onChange={handleFormChange}
          />
          {props.fieldErrors.annualContribution && (
            <Alert variant='danger' className='form-error'>
              {props.fieldErrors.annualContribution}
            </Alert>
          )}
        </Form.Group>
        <Form.Group controlId='formBasicTimeSpan'>
          <Form.Label>Investment Time Span in Years</Form.Label>
          <Form.Control
            className='form-input'
            min='0'
            type='number'
            name='time-span'
            data-testid='time-span'
            value={inputs.timeSpan}
            onChange={handleFormChange}
          />
          {props.fieldErrors.timeSpan && (
            <Alert variant='danger' className='form-error'>
              {props.fieldErrors.timeSpan}
            </Alert>
          )}
        </Form.Group>
        <Form.Group controlId='formBasicRateOfReturn'>
          <Form.Label>Annual Rate of Return</Form.Label>
          <Form.Control
            className='form-input'
            min='1'
            max='1000'
            type='number'
            name='rate-of-return'
            data-testid='rate-of-return'
            value={inputs.rateOfReturn}
            onChange={handleFormChange}
          />
          {props.fieldErrors.rateOfReturn && (
            <Alert variant='danger' className='form-error'>
              {props.fieldErrors.rateOfReturn}
            </Alert>
          )}
        </Form.Group>
      </Form>
    </>
  );
};

export default InvestmentForm;
