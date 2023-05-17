import React from 'react';
import { render, screen, within } from '@testing-library/react';
import StarRatings from '../StarRatings';

describe('StarRatings', () => {
  test('Show 5 stars', () => {
    render(<StarRatings rating={5} />);
    const starsContainer = screen.queryByLabelText('Rating: 5 out of 5 stars');
    expect(starsContainer).toBeTruthy();
    const stars = within(starsContainer).queryAllByRole('presentation', { hidden: true });
    expect(stars.length).toBe(5);
  });
  test('Renders partially filled stars', () => {
    render(<StarRatings rating={3.5} />);
    const starsContainer = screen.queryByLabelText('Rating: 3.5 out of 5 stars');
    expect(starsContainer).toBeTruthy();
  });
});
