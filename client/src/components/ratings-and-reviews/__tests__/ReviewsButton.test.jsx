import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ReviewsButtons from '../ReviewsButtons';

const mockShownReviews = ['review1', 'review2'];
const mockShownReviews2 = ['review1', 'review2', 'review3', 'review4', 'review5'];
const mockReviewsCache = ['review1', 'review2', 'review3', 'review4', 'review5'];
let mockShowCount = 2;
const mockSetShowCount = jest.fn((num) => { mockShowCount = num; return undefined; });
let mockShowModal = false;
const mockSetShowModal = jest.fn((boolean) => { mockShowModal = boolean; return undefined; });

const setup = () => render(
  <ReviewsButtons
    shownReviews={mockShownReviews}
    reviewsCache={mockReviewsCache}
    setShowCount={mockSetShowCount}
    showCount={mockShowCount}
    setShowModal={mockSetShowModal}
  />,
);
const anotherSetup = () => render(
  <ReviewsButtons
    shownReviews={mockShownReviews2}
    reviewsCache={mockReviewsCache}
    setShowCount={mockSetShowCount}
    showCount={mockShowCount}
    setShowModal={mockSetShowModal}
  />,
);

describe('ReviewsButtons', () => {
  test('Render buttons', () => {
    setup();
    const buttons = screen.queryAllByRole('button');
    expect(buttons.length).toBe(2);
    const moreReviewsButton = screen.queryByRole('button', { name: 'More Reviews' });
    const addReviewButton = screen.queryByRole('button', { name: 'Add A Review' });
    expect(moreReviewsButton).toBeTruthy();
    expect(addReviewButton).toBeTruthy();
  });
  test('Hides "More Reviews" button when all reviews are displayed', () => {
    anotherSetup();
    const buttons = screen.queryAllByRole('button');
    expect(buttons.length).toBe(1);
    const moreReviewsButton = screen.queryByRole('button', { name: 'More Reviews' });
    const addReviewButton = screen.queryByRole('button', { name: 'Add A Review' });
    expect(moreReviewsButton).toBe(null);
    expect(addReviewButton).toBeTruthy();
  });
  test('Clicking "More Reviews" button increases show count', () => {
    setup();
    expect(mockShowCount).toBe(2);
    const moreReviewsButton = screen.getByRole('button', { name: 'More Reviews' });
    fireEvent.click(moreReviewsButton);
    expect(mockShowCount).toBe(4);
  });
  test('Clicking "Add A Review" button sets modal to true', () => {
    setup();
    expect(mockShowModal).toBe(false);
    const addReviewButton = screen.getByRole('button', { name: 'Add A Review' });
    fireEvent.click(addReviewButton);
    expect(mockShowModal).toBe(true);
  });
});
