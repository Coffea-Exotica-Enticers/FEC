import React from 'react';
import axios from 'axios';
import { screen, fireEvent, render, waitFor } from '@testing-library/react';
import RelatedProductCard from '../related/RelatedProductCard';
import StarRatings from '../../shared/StarRatings';
import ThumbnailCarousel from '../related/ThumbnailCarousel';
import {
  mockProduct1, mockProduct2, mockMeta, mockRelated, mockStyle,
} from './mockdata';

jest.mock('axios');

describe('Related Product Card', () => {
  beforeEach(async () => {
    axios.all.mockResolvedValueOnce([{ data: mockStyle }, { data: mockMeta }]);
    await axios.spread.mockResolvedValueOnce({ data: mockStyle }, { data: mockMeta });
  });

  it('Should successfully render preview', () => {
    render(<RelatedProductCard item={mockProduct1} product={mockProduct2} />);
    expect(screen.getByTestId(/rpc-preview/i)).toBeTruthy();
  });
  it('Should successfully render category', () => {
    render(<RelatedProductCard item={mockProduct1} product={mockProduct2} />);
    expect(screen.getByText(/jackets/i)).toBeTruthy();
  });
  it('Should successfully render product name', () => {
    render(<RelatedProductCard item={mockProduct1} product={mockProduct2} />);
    expect(screen.getByText(/camo onesie/i)).toBeTruthy();
  });
  it('Should successfully render product price', () => {
    render(<RelatedProductCard item={mockProduct1} product={mockProduct2} />);
    expect(screen.getByText(/140.00/i)).toBeTruthy();
  });
  it('Should successfully render a modal button', () => {
    render(<RelatedProductCard item={mockProduct1} product={mockProduct2} />);
    expect(screen.getByTestId(/modal-btn/i)).toBeTruthy();
  });
  // it('Should successfully render a default image', async () => {
  //   render(<RelatedProductCard item={mockProduct1} product={mockProduct2} />);
  //   await waitFor(() => expect(axios.all).toHaveBeenCalled());
  //   const getDefault = await screen.getByAltText(/default/i);
  //   expect(getDefault).toBeTruthy();
  // });

  // it('Number of ratings should be 257', () => {
  //   render(<RelatedProductCard item={mockProduct1} product={mockProduct2} />);
  //   expect(screen.getByText(/257/i)).toBeTruthy();
  // })
});
