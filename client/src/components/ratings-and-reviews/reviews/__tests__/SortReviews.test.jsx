import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SortReviews from '../SortReviews';

const mockSetSort = jest.fn();
const mockReviewsCache = [
  {
    review_id: 111,
    rating: 1,
    summary: 'This is the summary title for review 1',
    recommend: true,
    response: 'This is a response from the seller',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At imperdiet dui accumsan sit amet nulla facilisi. Donec adipiscing tristique risus nec feugiat in fermentum posuere. Arcu cursus vitae congue mauris rhoncus aenean. Nullam non nisi est sit amet.',
    date: '2011-10-25T14:48:00.000Z',
    reviewer_name: 'test-user',
    helpfulness: 1,
    photos: [],
  },
  {
    review_id: 222,
    rating: 2,
    summary: 'This is the summary title for review 2',
    recommend: false,
    response: 'This is a response from the seller',
    body: 'Nunc faucibus a pellentesque sit amet porttitor eget. Id aliquet risus feugiat in ante metus. In arcu cursus euismod quis. Ut tortor pretium viverra suspendisse potenti nullam. Pellentesque dignissim enim sit amet venenatis urna cursus eget nunc. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna. Sociis natoque penatibus et magnis dis parturient montes nascetur. At volutpat diam ut venenatis tellus in. In mollis nunc sed id semper. Pharetra sit amet aliquam id diam maecenas. Sed nisi lacus sed viverra tellus in hac. Egestas sed tempus urna et. Arcu odio ut sem nulla pharetra diam sit amet. Tempus quam pellentesque nec nam aliquam sem et tortor consequat. Fames ac turpis egestas integer eget.',
    date: '2011-10-25T14:48:00.000Z',
    reviewer_name: 'test-user',
    helpfulness: 2,
    photos: [
      {
        id: 2458844,
        url: 'https://res.cloudinary.com/dlbnwlpoq/image/upload/v1684061481/p8ws58xsyzuqptegnt8a.jpg',
      },
      {
        id: 2458846,
        url: 'https://res.cloudinary.com/dlbnwlpoq/image/upload/v1684061486/woj1rgsqzdinhgflhc48.jpg',
      },
    ],
  },
];

const setup = () => render(<SortReviews reviewsCache={mockReviewsCache} setSort={mockSetSort} />);

describe('SortReviews', () => {
  test('Renders sort dropdown box', () => {
    setup();
    const sortDropdown = screen.queryByRole('combobox');
    expect(sortDropdown).toBeTruthy();
  });
  test('Dropdown box selection can be changed', () => {
    setup();
    const sortDropdown = screen.getByRole('combobox');
    expect(sortDropdown.value).toBe('relevant');
    fireEvent.change(sortDropdown, { target: { value: 'newest' } });
    expect(sortDropdown.value).toBe('newest');
  });
});
