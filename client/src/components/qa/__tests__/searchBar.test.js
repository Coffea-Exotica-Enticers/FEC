import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import QAModule from '../QAModule';

describe('search bar: as a component of QA Module', () => {
  test('QA Module should render the search bar', () => {
    render(<QAModule product={40349} />);
    expect(screen.getByPlaceholderText('Search your question...')).toBeTruthy();
  });
  test('should allow string to be typed into input field', () => {
    render(<QAModule product={40349} />);
    const inputField = screen.getByPlaceholderText('Search your question...');
    fireEvent.change(inputField, { target: { value: 'Tis I, the Frenchiest Fry' } });
    expect(inputField.value).toBe('Tis I, the Frenchiest Fry');
  });
});
