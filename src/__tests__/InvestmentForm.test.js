import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import InvestmentForm from '../Components/InvestmentForm';

const sampleProps = {
  fieldErrors: {
    principal: '',
    annualContribution: '',
    timeSpan: '',
    rateOfReturn: '',
  },
  inputs: {
    principal: 10000,
    annualContribution: 100,
    timeSpan: 5,
    rateOfReturn: 10,
  },
  total: 1000,
  handleFormChange: e => null,
};
test('works', () => {
  const screen = render(<InvestmentForm {...sampleProps} />);

  expect(screen.getByText('Future Balance')).toBeInTheDocument();
});