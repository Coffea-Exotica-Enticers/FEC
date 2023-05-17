import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Recommend from '../Recommend';

let mockRecommend = false;
let mockSetRecommend = jest.fn((bool) => { mockRecommend = bool; return undefined; });

const setup = () => render(<Recommend setRecommend={mockSetRecommend} />);

describe('Recommend', () => {
  test('Render radio buttons', () => {
    setup();
    const radioButtons = screen.queryAllByRole('radio');
    expect(radioButtons).toBeTruthy();
    const yesRadio = screen.queryByRole('radio', { name: 'Yes' });
    const noRadio = screen.queryByRole('radio', { name: 'No' });
    expect(yesRadio).toBeTruthy();
    expect(noRadio).toBeTruthy();
    expect(radioButtons.length).toBe(2);
  });
  test('Clicking radio buttons updates Recommend', () => {
    setup();
    expect(mockRecommend).toBe(false);
    const yesRadio = screen.getByRole('radio', { name: 'Yes' });
    const noRadio = screen.getByRole('radio', { name: 'No' });
    fireEvent.click(yesRadio);
    expect(mockRecommend).toBe(true);
    fireEvent.click(noRadio);
    expect(mockRecommend).toBe(false);
  });
});
