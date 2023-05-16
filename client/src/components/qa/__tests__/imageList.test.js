import React from 'react';
import { render, screen } from '@testing-library/react';
import ImageList from '../imageList/ImageList';
import ImageListEntry from '../imageList/ImageListEntry';

const testPhotos = [
  {
    id: 5347675,
    url: 'http://res.cloudinary.com/fec-cars/image/upload/v1676073715/eaokljdt8oimivi0rk1b.jpg',
  },
  {
    id: 5347679,
    url: 'http://res.cloudinary.com/fec-cars/image/upload/v1676074347/hz09yvlenfgf9s66tlsh.jpg',
  },
];

describe('image list properly renders', () => {
  test('image list should render', () => {
    render(<ImageList photos={testPhotos} />);
    expect(screen.getByTestId('image-list')).toBeTruthy();
  });
  test('image entry should have a length of 2 if given test array', () => {
    render(<ImageList photos={testPhotos} />);
    expect(screen.getAllByTestId('image-entry')).toHaveLength(2);
  });
  test('image list should not be present if given an empty array', () => {
    render(<ImageList photos={[]} />);
    expect(screen.queryByTestId('image-list')).toBeNull();
  });
});

const testPhoto = {
  id: 5347675,
  url: 'http://res.cloudinary.com/fec-cars/image/upload/v1676073715/eaokljdt8oimivi0rk1b.jpg',
};

describe('properly renders an image list entry', () => {
  test('it renders a photo', () => {
    render(<ImageListEntry photo={testPhoto} />);
    const getPhoto = screen.getByAltText('5347675');
    expect(getPhoto).toBeTruthy();
  });
});
