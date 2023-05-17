import React from 'react';
import { render, screen } from '@testing-library/react';
import DisplayErrors from '../DisplayErrors';

describe('DisplayErrors', () => {
  test('Render errors', () => {
    render(<DisplayErrors rating={0} email="blah@blah" />);
    const errorHeader = screen.getByText('You must enter the following:');
    const rateError = screen.getByText('Please rate this product.');
    const emailError = screen.getByText('Please enter a correct email.');
    expect(errorHeader).toBeTruthy();
    expect(rateError).toBeTruthy();
    expect(emailError).toBeTruthy();
  });
  test('Does not render errors if no errors', () => {
    render(<DisplayErrors rating={1} email="fake@email.com" />);
    const errorHeader = screen.queryByText('You must enter the following:');
    const rateError = screen.queryByText('Please rate this product.');
    const emailError = screen.queryByText('Please enter a correct email.');
    expect(errorHeader).toBe(null);
    expect(rateError).toBe(null);
    expect(emailError).toBe(null);
  });
});
