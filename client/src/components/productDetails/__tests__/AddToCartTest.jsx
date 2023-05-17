import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import axios from 'axios';
import AddToCart from '../AddToCart';
import { ProductContext } from '../Product';

jest.mock('axios');

const selectedStyle = {
  style_id: 240500,
  name: 'Forest Green & Black',
  original_price: '140.00',
  sale_price: null,
  'default?': true,
  photos: [
    {
      thumbnail_url: 'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
      url: 'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
    },
    {
      thumbnail_url: 'https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
      url: 'https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80',
    },
    {
      thumbnail_url: 'https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
      url: 'https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2775&q=80',
    },
    {
      thumbnail_url: 'https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      url: 'https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
    },
    {
      thumbnail_url: 'https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
      url: 'https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
    },
    {
      thumbnail_url: 'https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
      url: 'https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
    },
  ],
  skus: {
    1394769: {
      quantity: 8,
      size: 'XS',
    },
    1394770: {
      quantity: 16,
      size: 'S',
    },
    1394771: {
      quantity: 17,
      size: 'M',
    },
    1394772: {
      quantity: 10,
      size: 'L',
    },
    1394773: {
      quantity: 15,
      size: 'XL',
    },
    1394774: {
      quantity: 4,
      size: 'XL',
    },
  },
};

axios.post.mockImplementation((url) => {
  if (url === 'cart') {
    return Promise.resolve();
  }
  return Promise.reject(new Error('Error in Axios mock call for Add to Cart Post request'));
});

describe('Should render size dropdown button', () => {
  test('Add to Cart component should render size dropdown button', async () => {
    render(
      <ProductContext.Provider value={{ selectedStyle }}>
        <AddToCart />
      </ProductContext.Provider>,
    );
    const name = screen.getByRole('button', { name: 'size-button' });
    expect(name).toBeTruthy();
  });

  test('Add to Cart component should render quantity dropdown button', async () => {
    render(
      <ProductContext.Provider value={{ selectedStyle }}>
        <AddToCart />
      </ProductContext.Provider>,
    );
    const qName = screen.getByRole('button', { name: 'quantity-button' });
    expect(qName).toBeTruthy();
  });
});
