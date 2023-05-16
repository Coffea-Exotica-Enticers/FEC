import React from 'react';
import axios from 'axios';
import { render, fireEvent, screen } from '@testing-library/react';
import QAModule from '../QAModule';
import AddQuestion from '../addQuestion/AddQuestion';
import AddAnswer from '../addAnswer/AddAnswer';

describe('module renders its own components properly', () => {
  it('should render the search bar', () => {
    render(<QAModule />);
    expect(screen.getByPlaceholderText('Search your question...')).toBeTruthy();
  });
  it('should render the Ask Your Question button', () => {
    render(<QAModule />);
    expect(screen.getByRole('button', { name: 'Ask Your Question' })).toBeTruthy();
  });
});

describe('buttons for modal windows properly render', () => {
  test('Add question button renders', () => {
    render(<AddQuestion product={40349} />);
    const button = screen.getByRole('button', { name: 'Ask Your Question' });
    expect(button).toBeTruthy();
  });
  test('Add answer button renders', () => {
    render(<AddAnswer id={328752} />);
    const button = screen.getByRole('button', { name: 'Add Your Answer' });
    expect(button).toBeTruthy();
  });
});
