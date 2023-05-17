import React from 'react';
import { render, screen } from '@testing-library/react';
import CharacteristicsBreakdown from '../CharacteristicsBreakdown';

const mockCharacteristics = {
  Size: {
    id: 1,
    value: '3.2',
  },
  Width: {
    id: 2,
    value: '1.2',
  },
  Comfort: {
    id: 3,
    value: '2.4',
  },
  Quality: {
    id: 4,
    value: '4.4',
  },
  Length: {
    id: 5,
    value: '1.6',
  },
  Fit: {
    id: 6,
    value: '3.9',
  },
};

describe('CharacteristicsBreakdown', () => {
  test('Render all characteristics ratings for a product', () => {
    render(<CharacteristicsBreakdown characteristics={mockCharacteristics} />);
    const meters = screen.getAllByLabelText(/characteristic meter/);
    expect(meters.length).toBe(6);
  });
});
