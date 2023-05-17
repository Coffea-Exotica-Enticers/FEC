import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import IndividualRating from '../IndividualRating';

const mockRating = 5;
const mockRatingCount = 100;
const mockTotalRatings = 400;
let mockRatingsFilter = [];
const mockSetRatingsFilter = jest.fn((arr) => {
  mockRatingsFilter = arr;
  return undefined;
});
const setup = () => render(
  <IndividualRating
    rating={mockRating}
    ratingCount={mockRatingCount}
    totalRatings={mockTotalRatings}
    ratingsFilter={mockRatingsFilter}
    setRatingsFilter={mockSetRatingsFilter}
  />,
);

afterEach(() => {
  mockRatingsFilter = [];
});

describe('IndividualRating', () => {
  test('Render single ratings bar', () => {
    setup();
    const ratingMeter = screen.queryByRole('img', { name: '25% of reviews are 5 stars' });
    expect(ratingMeter).toBeTruthy();
  });
  test('Render button', () => {
    setup();
    const filterButton = screen.queryByRole('button');
    expect(filterButton).toBeTruthy();
  });
  test('Clicking button adds rating to filter', () => {
    setup();
    const filterButton = screen.getByRole('button');
    fireEvent.click(filterButton);
    expect(mockRatingsFilter).toEqual([5]);
  });
  test('Clicking button removes rating from filter', () => {
    mockRatingsFilter = [5];
    setup();
    const filterButton = screen.getByRole('button');
    fireEvent.click(filterButton);
    expect(mockRatingsFilter).toEqual([]);
  });
});
