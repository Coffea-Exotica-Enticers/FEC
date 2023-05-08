import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import ReviewTile from '../ReviewTile';

const testReview = {
  review_id: 420,
  rating: 3,
  summary: 'This is the summary title it should be a max of 60 character',
  recommend: true,
  response: 'This is a response from the seller',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At imperdiet dui accumsan sit amet nulla facilisi. Donec adipiscing tristique risus nec feugiat in fermentum posuere. Arcu cursus vitae congue mauris rhoncus aenean. Nullam non nisi est sit amet.',
  date: '2011-10-25T14:48:00.000Z',
  reviewer_name: 'test-user',
  helpfulness: 6,
  photos: [],
};

describe('Properly render a review tile', () => {
  test('loads and displays a review tile', () => {
    render(<ReviewTile review={testReview} />);
  });
  test('renders review summary', () => {
    render(<ReviewTile review={testReview} />);
    const summary = screen.getByText(/summary title/i);
    expect(summary).toBeTruthy();
  });
  test('renders review body', () => {
    render(<ReviewTile review={testReview} />);
    const body = screen.getByText(/lorem ipsum/i);
    expect(body).toBeTruthy();
  });
  test('renders recommend label', () => {
    render(<ReviewTile review={testReview} />);
    const recommendLabel = screen.getByText(/recommend/i);
    expect(recommendLabel).toBeTruthy();
  });
  test('renders username', () => {
    render(<ReviewTile review={testReview} />);
    const username = screen.getByText(/test-user/i);
    expect(username).toBeTruthy();
  });
  test('renders date', () => {
    render(<ReviewTile review={testReview} />);
    const year = screen.getByText(/2011/i);
    const month = screen.getByText(/October/i);
    const day = screen.getByText(/25/i);
    expect(year).toBeTruthy();
    expect(month).toBeTruthy();
    expect(day).toBeTruthy();
  });
  test('renders star rating', () => {
    const { container } = render(<ReviewTile review={testReview} />);
    expect(container.querySelectorAll('svg').length).toBe(5);
  });
  test('renders helpfulness component', () => {
    render(<ReviewTile review={testReview} />);
    const helpfulness = screen.getByText(/Helpful?/i);
    expect(helpfulness).toBeTruthy();
  });
  test('renders seller reponse', () => {
    render(<ReviewTile review={testReview} />);
    const sellerResponse = screen.getByText(/response from the seller/i);
    expect(sellerResponse).toBeTruthy();
  });
});
