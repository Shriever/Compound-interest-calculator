import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';
import { BrowserRouter } from 'react-router-dom';

test('renders a form with default values', async () => {
  const screen = render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  expect(screen.getByTestId('header')).toBeInTheDocument();
  const total = await screen.findByTestId('total');
  expect(total).toBeInTheDocument();
  expect(total.textContent).toEqual('$16,777');

  const form = await screen.findByTestId('form');
  expect(form).toBeInTheDocument();

  const principalInput = await screen.findByTestId('principal');
  const annualContributionInput = await screen.findByTestId(
    'annual-contribution'
  );
  const timeSpanInput = await screen.findByTestId('time-span');
  const rateOfReturnInput = await screen.findByTestId('rate-of-return');

  expect(principalInput).toBeInTheDocument();
  expect(annualContributionInput).toBeInTheDocument();
  expect(timeSpanInput).toBeInTheDocument();
  expect(rateOfReturnInput).toBeInTheDocument();
});
