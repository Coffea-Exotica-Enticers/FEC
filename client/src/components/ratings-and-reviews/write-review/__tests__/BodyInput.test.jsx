import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BodyInput from '../BodyInput';

let mockBody = '';
const mockSetBody = jest.fn((string) => { mockBody = string; return undefined; });

const setup = () => render(<BodyInput setBody={mockSetBody} />);

describe('BodyInput', () => {
  test('Render textbox', () => {
    setup();
    const textbox = screen.queryByRole('textbox');
    expect(textbox).toBeTruthy();
  });
  test('Typing into textbox updates summary', () => {
    setup();
    const textbox = screen.getByRole('textbox');
    fireEvent.change(textbox, { target: { value: 'hello' } });
    expect(mockBody).toBe('hello');
  });
  test('Typing more than 50 characters displays "Minimum reached"', () => {
    setup();
    const textbox = screen.getByRole('textbox');
    fireEvent.change(textbox, { target: { value: 'Nunc faucibus a pellentesque sit amet porttitor eget. Id aliquet risus feugiat in ante metus.' } });
    expect(mockBody).toBe('Nunc faucibus a pellentesque sit amet porttitor eget. Id aliquet risus feugiat in ante metus.');
    const minimumReached = screen.getByText('Minimum reached');
    expect(minimumReached).toBeTruthy();
  });
});
