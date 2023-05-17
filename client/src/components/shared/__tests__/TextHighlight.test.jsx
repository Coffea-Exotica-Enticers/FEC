import React from 'react';
import { render, screen } from '@testing-library/react';
import TextHighlight from '../TextHighlight';

const testText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec adipiscing tristique risus nec feugiat. Mattis nunc sed blandit libero volutpat. A arcu cursus vitae congue mauris. Vel orci porta non pulvinar neque laoreet suspendisse interdum.';

const testSearch = 'Donec adipiscing';

describe('TextHighlight', () => {
  test('Renders text', () => {
    render(<TextHighlight text={testText} search="" />);
    const text = screen.queryByText(/Lorem ipsum/i);
    expect(text).toBeTruthy();
  });
  test('Highlights text matching search query', () => {
    render(<TextHighlight text={testText} search={testSearch} />);
    const text = screen.queryByTestId('highlighted');
    expect(text).toBeTruthy();
  });
});
