import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchReviews from '../SearchReviews';

const mockSetSearch = jest.fn();

const setup = () => render(<SearchReviews setSearch={mockSetSearch} />);
describe('SearchReviews', () => {
  test('Renders search bar', () => {
    setup();
    const searchBar = screen.queryByRole('textbox');
    expect(searchBar).toBeTruthy();
  });
  test('Search bar can by typed into', () => {
    setup();
    const searchBar = screen.getByRole('textbox');
    fireEvent.change(searchBar, { target: { value: 'hello' } });
    expect(searchBar.value).toBe('hello');
  });
});
