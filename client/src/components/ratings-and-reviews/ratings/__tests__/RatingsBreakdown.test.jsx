import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import RatingsBreakdown from '../RatingsBreakdown';

const mockRatings = {
  1: '145',
  2: '204',
  3: '321',
  4: '311',
  5: '694',
};
const mockRecommended = {
  false: '424',
  true: '1251',
};
let mockRatingsFilter = [];
const mockSetRatingsFilter = jest.fn((arr) => {
  mockRatingsFilter = arr;
  return undefined;
});
const setup = () => render(
  <RatingsBreakdown
    ratings={mockRatings}
    recommended={mockRecommended}
    ratingsFilter={mockRatingsFilter}
    setRatingsFilter={mockSetRatingsFilter}
  />,
);

afterEach(() => {
  mockRatingsFilter = [];
});

describe('RatingsBreakdown', () => {
  test('Render 5 breakdown meters', () => {
    setup();
    const meters = screen.queryAllByRole('img', { name: /% of reviews are/i });
    expect(meters.length).toBe(5);
  });
  test('Render clear all button if filters are active', () => {
    mockRatingsFilter = [2, 3];
    setup();
    const clearAllButton = screen.queryByRole('button', { name: 'Clear All' });
    expect(clearAllButton).toBeTruthy();
  });
  test('clicking Clear All, clears filters', () => {
    mockRatingsFilter = [2, 3];
    setup();
    const clearAllButton = screen.getByRole('button', { name: 'Clear All' });
    fireEvent.click(clearAllButton);
    expect(mockRatingsFilter.length).toBe(0);
  });
  test('clicking button for filter, clears that filter', () => {
    mockRatingsFilter = [2, 3];
    setup();
    expect(mockRatingsFilter).toEqual([2, 3]);
    const clearThree = screen.getByRole('button', { name: '3' });
    fireEvent.click(clearThree);
    expect(mockRatingsFilter).toEqual([2]);
  });
});
