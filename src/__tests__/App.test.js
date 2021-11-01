import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

test('works', () => {
  const screen = render(<App />);

  expect(screen.getByTestId('header')).toBeInTheDocument();
});
