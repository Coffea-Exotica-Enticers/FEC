import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../../App';

describe('search bar functionality', () => {
  it('should render the search bar', () => {
    render(<App />);
    expect(screen.queryByPlaceholderText('Have a question? Search for answers...')).toBeTruthy();
  });
});

describe('add question functionality', () => {
  it('should render the Ask Your Question button', () => {
    render(<App />);
    expect(screen.queryByRole('button', { name: 'Ask Your Question' })).toBeTruthy();
  });
});
