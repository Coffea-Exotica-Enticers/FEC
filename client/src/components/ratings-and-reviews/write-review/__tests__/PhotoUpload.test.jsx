import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PhotoUpload from '../PhotoUpload';

const mockPhotos = [];
const mockSetPhotos = jest.fn();
const setup = () => render(<PhotoUpload photos={mockPhotos} setPhotos={mockSetPhotos} />);

describe('PhotoUpload', () => {
  test('Render photo upload', () => {
    setup();
    const uploadButton = screen.getByRole('button', { name: 'photo upload button' });
    expect(uploadButton).toBeTruthy();
  });
});
