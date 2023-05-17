import React from 'react';
import axios from 'axios';
import {
  screen, fireEvent, render, waitFor,
} from '@testing-library/react';
import RelatedProductCard from '../related/RelatedProductCard';
import RelatedProductsList from '../related/RelatedProductsList';
import { mockRelated, mockProduct, mockMeta } from './mockdata';

jest.mock('axios');

beforeEach(() => {
  axios.get.mockImplementation((url) => {
    if (url === '/products/40346/styles') {
      return Promise.resolve({ data: mockProduct });
    }
    if (url === '/reviews/meta') {
      return Promise.resolve({ data: mockMeta });
    }
    if (url === '/products/40346/related') {
      return Promise.resolve({ data: mockRelated });
    }
  });
});

describe('Related Products List', () => {
  it('Should successfully render the component', () => {
    render(<RelatedProductsList product={mockProduct} />);
    expect(screen.getByTestId(/rp-component/i)).toBeTruthy();
  });

  it("Should be titled 'Related Products List'", () => {
    render(<RelatedProductsList product={mockProduct} />);
    expect(screen.getByText(/related products list/i)).toBeTruthy();
  });
  // it('Should contain a right arrow button', async () => {
  //   render(<RelatedProductsList product={mockProduct} />);
  //   // await waitFor(() => expect(axios.get).toHaveBeenCalled());
  //   axios.get.mockResolvedValueOnce({ data: mockMeta });
  //   const rightBtn = screen.getByTestId('rpl-right');
  //   expect(rightBtn).toBeTruthy();
  // });
});
