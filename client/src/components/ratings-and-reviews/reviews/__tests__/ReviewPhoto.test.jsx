import React from 'react';
import {
  render,
  fireEvent,
  screen,
  within,
} from '@testing-library/react';
import ReviewPhoto from '../ReviewPhoto';

const testPhoto = 'https://fastly.picsum.photos/id/167/1000/1000.jpg?hmac=7UpK36PxU5YGSkv8Sigv03p0lxXvnXT6gkrzkxt9Wi4';
const wrongPhoto = 'https://fastly.picsum.photos/id/143/1000/1000.jpg?hmac=3LZcQhqlJFt0edofbPIW8TuPgneqcRep9ke00SKEzkI';

const setup = () => render(<ReviewPhoto url={testPhoto} />);

describe('ReviewPhoto', () => {
  test('Show photo thumbnail', () => {
    setup();
    const photo = screen.queryByRole('img');
    expect(photo.src).toBe(testPhoto);
    expect(photo.className).toBe('review-photo-thumbnail');
    expect(photo.height).toBe(100);
    expect(photo.src).not.toBe(wrongPhoto);
  });
  test('Photo is a button', () => {
    setup();
    const button = screen.queryByRole('button');
    const insideButton = within(button).queryByRole('img');
    expect(insideButton).toBeTruthy();
    expect(insideButton.src).toBe(testPhoto);
    expect(insideButton.src).not.toBe(wrongPhoto);
  });
  test('Photo expands when clicked', () => {
    setup();
    const button = screen.getByRole('button');
    fireEvent.click(button);
    const closeButton = screen.queryByRole('button', { name: 'close' });
    const photos = screen.queryAllByRole('img');
    expect(closeButton).toBeTruthy();
    expect(photos.length).toBe(2);
    expect(photos[0].src).toBe(testPhoto);
    expect(photos[1].src).toBe(testPhoto);
    expect(photos[0].className).toBe('review-photo-thumbnail');
    expect(photos[1].className).toBe('review-photo-expanded');
  });
  test('Clicking close button hides expanded photo', () => {
    setup();
    const button = screen.getByRole('button');
    fireEvent.click(button);
    const closeButton = screen.queryByRole('button', { name: 'close' });
    const photos = screen.queryAllByRole('img');
    expect(closeButton).toBeTruthy();
    expect(photos.length).toBe(2);
    fireEvent.click(closeButton);
    const currentPhotos = screen.queryAllByRole('img');
    const closeButtonGone = screen.queryByRole('button', { name: 'close' });
    expect(currentPhotos.length).toBe(1);
    expect(closeButtonGone).toBe(null);
  });
});
