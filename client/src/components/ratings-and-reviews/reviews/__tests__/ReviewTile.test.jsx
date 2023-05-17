import React from 'react';
import {
  render,
  fireEvent,
  screen,
  within,
} from '@testing-library/react';
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
const anotherReview = {
  review_id: 111,
  rating: 2,
  summary: 'This summary title is longer than 60 characters and will be cut off at the end',
  recommend: false,
  response: '',
  body: 'Nunc faucibus a pellentesque sit amet porttitor eget. Id aliquet risus feugiat in ante metus. In arcu cursus euismod quis. Ut tortor pretium viverra suspendisse potenti nullam. Pellentesque dignissim enim sit amet venenatis urna cursus eget nunc.',
  date: '2011-10-25T14:48:00.000Z',
  reviewer_name: 'fake-user2',
  helpfulness: 0,
  photos: [
    {
      id: 2458844,
      url: 'https://res.cloudinary.com/dlbnwlpoq/image/upload/v1684061481/p8ws58xsyzuqptegnt8a.jpg',
    },
    {
      id: 2458846,
      url: 'https://res.cloudinary.com/dlbnwlpoq/image/upload/v1684061486/woj1rgsqzdinhgflhc48.jpg',
    },
    {
      id: 2458847,
      url: 'https://res.cloudinary.com/dlbnwlpoq/image/upload/v1684061490/bpiys5nrvxm9w8awawp8.jpg',
    },
    {
      id: 2458845,
      url: 'https://res.cloudinary.com/dlbnwlpoq/image/upload/v1684061484/xnhhcccgigf6s6r2n6ku.jpg',
    },
  ],
};
const testSearch = '';

const setup = () => render(<ReviewTile review={testReview} search={testSearch} />);
const anotherSetup = () => render(<ReviewTile review={anotherReview} search={testSearch} />);

describe('ReviewTile', () => {
  test('Renders star ratings', () => {
    setup();
    const starsContainer = screen.queryByLabelText('Rating: 3 out of 5 stars');
    const stars = within(starsContainer).queryAllByRole('presentation', { hidden: true });
    expect(stars.length).toBe(5);
  });
  test('Renders reviewer name', () => {
    setup();
    const username = screen.queryByText('test-user,');
    expect(username).toBeTruthy();
  });
  test('Renders date', () => {
    setup();
    const date = screen.queryByText('October 25, 2011');
    expect(date).toBeTruthy();
  });
  test('Renders summary', () => {
    setup();
    const summary = screen.queryByText('This is the summary title it should be a max of 60 character');
    expect(summary).toBeTruthy();
  });
  test('Only shows first 60 characters of summary for long summary titles', () => {
    anotherSetup();
    const summary = screen.queryByText(/This summary title/);
    expect(summary).toBeTruthy();
    expect(summary.textContent.length).toBe(63);
  });
  test('Renders body', () => {
    setup();
    const body = screen.queryByText(/At imperdiet dui/);
    expect(body).toBeTruthy();
  });
  test('Renders whole body for reviews under 250 characters', () => {
    anotherSetup();
    const body = screen.queryByText(/Nunc faucibus/);
    expect(body).toBeTruthy();
    expect(body.textContent.length).toBe(246);
  });
  test('Only shows first 250 characters of body for long reviews', () => {
    setup();
    const body = screen.queryByText(/Lorem ipsum/);
    expect(body).toBeTruthy();
    expect(body.textContent.length).toBe(253);
  });
  test('Renders show more button for long reviews', () => {
    setup();
    const showMoreButton = screen.queryByRole('button', { name: 'Show more' });
    expect(showMoreButton).toBeTruthy();
  });
  test('Does not render show more button for short reviews', () => {
    anotherSetup();
    const showMoreButton = screen.queryByRole('button', { name: 'Show more' });
    expect(showMoreButton).toBe(null);
  });
  test('Clicking show more button reveals whole body', () => {
    setup();
    const shortenedBodyText = screen.queryByText(/Lorem ipsum/);
    expect(shortenedBodyText.textContent.length).toBe(253);
    const showMoreButton = screen.queryByRole('button', { name: 'Show more' });
    expect(showMoreButton).toBeTruthy();
    fireEvent.click(showMoreButton);
    const fullBodyText = screen.queryByText(/Lorem ipsum/);
    expect(fullBodyText).toBeTruthy();
    expect(fullBodyText.textContent.length).toBe(319);
    const showMoreButtonGone = screen.queryByRole('button', { name: 'Show more' });
    expect(showMoreButtonGone).toBe(null);
  });
  test('Render recommend label if reviewer recommends product', () => {
    setup();
    const checkmark = screen.queryByText(/I recommend this product/);
    expect(checkmark).toBeTruthy();
  });
  test('Does not render recommend label if reviewer does not recommend product', () => {
    anotherSetup();
    const checkmark = screen.queryByText(/I recommend this product/);
    expect(checkmark).toBe(null);
  });
  test('Renders review photos', () => {
    anotherSetup();
    const photos = screen.queryAllByRole('img', { name: 'thumbnail' });
    expect(photos.length).toBe(4);
  });
  test('renders seller reponse', () => {
    setup();
    const sellerResponse = screen.queryByText(/response from the seller/i);
    expect(sellerResponse).toBeTruthy();
  });
});
