import React from 'react';
import { render, screen } from '@testing-library/react';
import ReviewsList from '../ReviewsList';

const mockReviews = [
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

const mockSearch = '';

const setup = () => render(<ReviewsList shownReviews={mockReviews} search={mockSearch} />);
const noReviewsSetup = () => render(<ReviewsList shownReviews={[]} search={mockSearch} />);

describe('ReviewsList', () => {
  test('Renders list of reviews', () => {
    setup();
    const reviews = screen.queryAllByLabelText('review');
    expect(reviews.length).toBe(2);
  });
  test('Renders no reviews if there are no reviews', () => {
    noReviewsSetup();
    const reviews = screen.queryAllByLabelText('review');
    expect(reviews.length).toBe(0);
    const noReviewsText = screen.queryByText('No Reviews...');
    expect(noReviewsText).toBeTruthy();
  });
});
