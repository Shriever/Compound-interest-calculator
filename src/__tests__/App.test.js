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
});
