import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import RateProduct from '../RateProduct';

let mockRating = 0;
const mockSetRating = jest.fn((num) => { mockRating = num; return undefined; });

const setup = () => render(<RateProduct rating={mockRating} setRating={mockSetRating} />);

describe('RateProduct', () => {
  test('Render stars', () => {
    setup();
    const stars = screen.queryAllByLabelText(/star/);
    const label = screen.queryByText('Please rate this item*');
    expect(stars.length).toBe(5);
    expect(label).toBeTruthy();
  });
  test('Click 1 star', () => {
    setup();
    const oneStar = screen.getByLabelText('1 star');
    expect(oneStar).toBeTruthy();
    fireEvent.click(oneStar);
    expect(mockRating).toBe(1);
  });
  test('Click 2 star', () => {
    setup();
    const twoStar = screen.getByLabelText('2 star');
    expect(twoStar).toBeTruthy();
    fireEvent.click(twoStar);
    expect(mockRating).toBe(2);
  });
  test('Click 3 star', () => {
    setup();
    const threeStar = screen.getByLabelText('3 star');
    expect(threeStar).toBeTruthy();
    fireEvent.click(threeStar);
    expect(mockRating).toBe(3);
  });
  test('Click 4 star', () => {
    setup();
    const fourStar = screen.getByLabelText('4 star');
    expect(fourStar).toBeTruthy();
    fireEvent.click(fourStar);
    expect(mockRating).toBe(4);
  });
  test('Click 5 star', () => {
    setup();
    const fiveStar = screen.getByLabelText('5 star');
    expect(fiveStar).toBeTruthy();
    fireEvent.click(fiveStar);
    expect(mockRating).toBe(5);
  });
});
