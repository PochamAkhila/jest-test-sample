import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MyComponent from '../component/MyComponent';

test('MyComponent renders correctly and behaves as expected', () => {
  render(<MyComponent />);

  const heading = screen.getByRole('heading', { name: /my component/i });
  expect(heading).toBeInTheDocument();

  const button = screen.getByRole('button', { name: /click me/i });
  userEvent.click(button);
  const output = screen.getByText('You clicked the button!');
  expect(output).toBeInTheDocument();
});
