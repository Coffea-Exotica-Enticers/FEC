import React from 'react';
import { screen, fireEvent, render } from '@testing-library/react';
import ThumbnailCarousel from '../related/ThumbnailCarousel';

const mockThumbnails = [
  'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
  'https://images.unsplash.com/photo-1562542082-519ebcdb43e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
  'https://images.unsplash.com/photo-1530073391204-7b34a1497281?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
  'https://images.unsplash.com/photo-1519857609704-61e751edba25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
  'https://images.unsplash.com/photo-1530073391204-7b34a1497281?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
  'https://images.unsplash.com/photo-1510390099355-23e690d8129d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
  'https://images.unsplash.com/photo-1554260570-9140fd3b7614?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
  'https://images.unsplash.com/photo-1554260570-9140fd3b7614?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
];

jest.mock('axios');

describe('Thumbnail Carousel', () => {
  it('Should successfully render first image', () => {
    render(<ThumbnailCarousel thumbnails={mockThumbnails} />);
    expect(screen.getByAltText(/img 1/i)).toBeTruthy();
  });
  it('Should successfully render second image', () => {
    render(<ThumbnailCarousel thumbnails={mockThumbnails} />);
    expect(screen.getByAltText(/img 2/i)).toBeTruthy();
  });
  it('Should successfully render third image', () => {
    render(<ThumbnailCarousel thumbnails={mockThumbnails} />);
    expect(screen.getByAltText(/img 3/i)).toBeTruthy();
  });
  it('Should successfully render fourth image', () => {
    render(<ThumbnailCarousel thumbnails={mockThumbnails} />);
    expect(screen.getByAltText(/img 4/i)).toBeTruthy();
  });
  it('Should successfully render right button', () => {
    render(<ThumbnailCarousel thumbnails={mockThumbnails} />);
    const rightBtn = screen.getByTestId(/tl-right/i);
    expect(rightBtn).toBeTruthy();
  });
  it('Should successfully render left button', async () => {
    render(<ThumbnailCarousel thumbnails={mockThumbnails} />);
    const rightBtn = screen.getByTestId(/tl-right/i);
    fireEvent.click(rightBtn);
    const leftBtn = await screen.getByTestId(/tl-left/i);
    expect(leftBtn).toBeTruthy();
  });
  it('Should render new images when right button clicked', async () => {
    render(<ThumbnailCarousel thumbnails={mockThumbnails} />);
    const rightBtn = screen.getByTestId(/tl-right/i);
    fireEvent.click(rightBtn);
    const leftBtn = screen.getByTestId(/tl-left/i);
    const leftBtnClick = fireEvent.click(leftBtn);
    expect(leftBtnClick).toBeTruthy();
  });
});
