import axios from 'axios';
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import ReportButton from '../ReportButton';

jest.mock('axios');
const testId = 1234;
const setup = () => render(<ReportButton id={testId} />);

afterEach(() => {
  axios.put.mockClear();
});

describe('ReportButton', () => {
  test('Renders report button', () => {
    setup();
    const button = screen.queryByRole('button', { name: 'Report' });
    expect(button).toBeTruthy();
  });
  test('Clicking button sends report', () => {
    setup();
    const button = screen.getByRole('button', { name: 'Report' });
    expect(button).toBeTruthy();
    fireEvent.click(button);
    const updatedButton = screen.queryByRole('button', { name: 'Reported' });
    expect(updatedButton).toBeTruthy();
  });
  test('Clicking button more than once does not do anything', () => {
    setup();
    const button = screen.getByRole('button', { name: 'Report' });
    expect(button).toBeTruthy();
    fireEvent.click(button);
    expect(axios.put).toHaveBeenCalledTimes(1);
    const updatedButton = screen.queryByRole('button', { name: 'Reported' });
    expect(updatedButton).toBeTruthy();
    fireEvent.click(updatedButton);
    const sameButton = screen.queryByRole('button', { name: 'Reported' });
    expect(sameButton).toBeTruthy();
    expect(axios.put).toHaveBeenCalledTimes(1);
  });
});
