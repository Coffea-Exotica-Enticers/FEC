import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import HelpfulnessDisplay from '../HelpfulnessDisplay';

jest.mock('axios');

const testReview = {
  review_id: 420,
  helpfulness: 6,
};

const setup = () => render(
  <HelpfulnessDisplay id={testReview.review_id} helpfulness={testReview.helpfulness} />,
);

describe('Helpfulness Display', () => {
  test('Renders "Helpful?" text', () => {
    setup();
    const helpfulnessDisplay = screen.queryByText(/Helpful?/i);
    expect(helpfulnessDisplay).toBeTruthy();
  });
  test('Renders button', () => {
    setup();
    const button = screen.queryByRole('button', { name: 'Yes' });
    expect(button).toBeTruthy();
  });
  test('Renders helpfulness count', () => {
    setup();
    const helpfulnessCount = screen.queryByText('(6)');
    const wrongCount = screen.queryByText('(10)');
    expect(helpfulnessCount).toBeTruthy();
    expect(wrongCount).toBe(null);
  });
  test('Increment helpfulness count by one upon clicking button', () => {
    setup();
    const beforeClick = screen.queryByText('(6)');
    const button = screen.getByRole('button', { name: 'Yes' });

    expect(beforeClick).toBeTruthy();

    fireEvent.click(button);

    const afterClick = screen.queryByText('(7)');

    expect(afterClick).toBeTruthy();
  });
  test('Disables button after first click', () => {
    setup();
    const button = screen.getByRole('button', { name: 'Yes' });

    const beforeClick = screen.queryByText('(6)');
    expect(beforeClick).toBeTruthy();

    fireEvent.click(button);

    const afterClick = screen.queryByText('(7)');
    expect(afterClick).toBeTruthy();

    fireEvent.click(button);

    const afterSecondClick = screen.queryByText('(8)');
    expect(afterSecondClick).toBe(null);
  });
});
