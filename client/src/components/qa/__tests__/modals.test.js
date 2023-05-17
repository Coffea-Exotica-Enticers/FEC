import React from 'react';
import axios from 'axios';
import { render, fireEvent, screen } from '@testing-library/react';
import AddQuestion from '../addQuestion/AddQuestion';
import AddQModal from '../addQuestion/AddQModal';
import AddAnswer from '../addAnswer/AddAnswer';
import AddAnsModal from '../addAnswer/AddAnsModal';

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
