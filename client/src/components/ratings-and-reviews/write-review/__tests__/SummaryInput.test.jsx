import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SummaryInput from '../SummaryInput';

let mockSummary = '';
const mockSetSummary = jest.fn((string) => { mockSummary = string; return undefined; });

const setup = () => render(<SummaryInput setSummary={mockSetSummary} />);

describe('SummaryInput', () => {
  test('Render textbox', () => {
    setup();
    const textbox = screen.queryByRole('textbox');
    expect(textbox).toBeTruthy();
  });
  test('Typing into textbox updates summary', () => {
    setup();
    const textbox = screen.getByRole('textbox');
    fireEvent.change(textbox, { target: { value: 'hello' } });
    expect(mockSummary).toBe('hello');
  });
});
