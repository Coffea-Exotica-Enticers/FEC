import React from 'react';
import axios from 'axios';
import { screen, fireEvent, render } from '@testing-library/react';
import ClosetList from '../outfit/ClosetList';
import RelatedProductCard from '../related/RelatedProductCard';
import { mockStyle, mockMeta, mockProduct1 } from './mockdata';

jest.mock('axios');
describe('Your Outfit', () => {
  // beforeEach(() => {
  //   axios.all.mockResolvedValue([{ data: mockStyle }, { data: mockMeta }]);
  // });
  it('Should successfully render the title', async () => {
    render(<ClosetList product={mockProduct1} />);
    const title = await screen.getByText(/your outfit/i);
    expect(title).toBeTruthy();
  });
  // it('Should successfully add product', () => {
  //   render(<ClosetList product={mockProduct1} />);
  //   const addBtn = screen.getByTestId(/closet-addbtn/i);
  //   const click = fireEvent.click(addBtn);
  //   expect(click).toBeTruthy();
  // });
});
