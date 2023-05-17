import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import RateCharacteristic from '../RateCharacteristic';

const mockCharName1 = 'Size';
const mockCharName2 = 'Width';
const mockCharName3 = 'Comfort';
const mockCharName4 = 'Quality';
const mockCharName5 = 'Length';
const mockCharName6 = 'Fit';
const mockCharId = 123;
const mockRateChar = jest.fn();

describe('RateCharacteristic', () => {
  test('Render radio buttons for Size', () => {
    render(
      <RateCharacteristic charName={mockCharName1} charId={mockCharId} rateChar={mockRateChar} />,
    );
    const radioButtons = screen.queryAllByRole('radio');
    const radio1 = screen.queryByRole('radio', { name: 'A size too small' });
    const radio2 = screen.queryByRole('radio', { name: '1/2 a size too small' });
    const radio3 = screen.queryByRole('radio', { name: 'Perfect' });
    const radio4 = screen.queryByRole('radio', { name: '1/2 a size too big' });
    const radio5 = screen.queryByRole('radio', { name: 'A size too big' });
    expect(radioButtons.length).toBe(5);
    expect(radio1).toBeTruthy();
    expect(radio2).toBeTruthy();
    expect(radio3).toBeTruthy();
    expect(radio4).toBeTruthy();
    expect(radio5).toBeTruthy();
  });
  test('Render radio buttons for Width', () => {
    render(
      <RateCharacteristic charName={mockCharName2} charId={mockCharId} rateChar={mockRateChar} />,
    );
    const radio1 = screen.queryByRole('radio', { name: 'Too narrow' });
    const radio2 = screen.queryByRole('radio', { name: 'Slightly narrow' });
    const radio3 = screen.queryByRole('radio', { name: 'Perfect' });
    const radio4 = screen.queryByRole('radio', { name: 'Slightly wide' });
    const radio5 = screen.queryByRole('radio', { name: 'Too wide' });
    expect(radio1).toBeTruthy();
    expect(radio2).toBeTruthy();
    expect(radio3).toBeTruthy();
    expect(radio4).toBeTruthy();
    expect(radio5).toBeTruthy();
  });
  test('Render radio buttons for Comfort', () => {
    render(
      <RateCharacteristic charName={mockCharName3} charId={mockCharId} rateChar={mockRateChar} />,
    );
    const radio1 = screen.queryByRole('radio', { name: 'Uncomfortable' });
    const radio2 = screen.queryByRole('radio', { name: 'Slightly uncomfortable' });
    const radio3 = screen.queryByRole('radio', { name: 'Ok' });
    const radio4 = screen.queryByRole('radio', { name: 'Comfortable' });
    const radio5 = screen.queryByRole('radio', { name: 'Perfect' });
    expect(radio1).toBeTruthy();
    expect(radio2).toBeTruthy();
    expect(radio3).toBeTruthy();
    expect(radio4).toBeTruthy();
    expect(radio5).toBeTruthy();
  });
  test('Render radio buttons for Quality', () => {
    render(
      <RateCharacteristic charName={mockCharName4} charId={mockCharId} rateChar={mockRateChar} />,
    );
    const radio1 = screen.queryByRole('radio', { name: 'Poor' });
    const radio2 = screen.queryByRole('radio', { name: 'Below average' });
    const radio3 = screen.queryByRole('radio', { name: 'What I expected' });
    const radio4 = screen.queryByRole('radio', { name: 'Pretty great' });
    const radio5 = screen.queryByRole('radio', { name: 'Perfect' });
    expect(radio1).toBeTruthy();
    expect(radio2).toBeTruthy();
    expect(radio3).toBeTruthy();
    expect(radio4).toBeTruthy();
    expect(radio5).toBeTruthy();
  });
  test('Render radio buttons for Length', () => {
    render(
      <RateCharacteristic charName={mockCharName5} charId={mockCharId} rateChar={mockRateChar} />,
    );
    const radio1 = screen.queryByRole('radio', { name: 'Runs short' });
    const radio2 = screen.queryByRole('radio', { name: 'Runs slightly short' });
    const radio3 = screen.queryByRole('radio', { name: 'Perfect' });
    const radio4 = screen.queryByRole('radio', { name: 'Runs slightly long' });
    const radio5 = screen.queryByRole('radio', { name: 'Runs long' });
    expect(radio1).toBeTruthy();
    expect(radio2).toBeTruthy();
    expect(radio3).toBeTruthy();
    expect(radio4).toBeTruthy();
    expect(radio5).toBeTruthy();
  });
  test('Render radio buttons for Fit', () => {
    render(
      <RateCharacteristic charName={mockCharName6} charId={mockCharId} rateChar={mockRateChar} />,
    );
    const radio1 = screen.queryByRole('radio', { name: 'Runs tight' });
    const radio2 = screen.queryByRole('radio', { name: 'Runs slightly tight' });
    const radio3 = screen.queryByRole('radio', { name: 'Perfect' });
    const radio4 = screen.queryByRole('radio', { name: 'Runs slightly long' });
    const radio5 = screen.queryByRole('radio', { name: 'Runs long' });
    expect(radio1).toBeTruthy();
    expect(radio2).toBeTruthy();
    expect(radio3).toBeTruthy();
    expect(radio4).toBeTruthy();
    expect(radio5).toBeTruthy();
  });
  test('Clicking radio buttons runs function', () => {
    render(
      <RateCharacteristic charName={mockCharName6} charId={mockCharId} rateChar={mockRateChar} />,
    );
    const radio1 = screen.getByRole('radio', { name: 'Runs tight' });
    const radio2 = screen.getByRole('radio', { name: 'Runs slightly tight' });
    const radio3 = screen.getByRole('radio', { name: 'Perfect' });
    const radio4 = screen.getByRole('radio', { name: 'Runs slightly long' });
    const radio5 = screen.getByRole('radio', { name: 'Runs long' });
    fireEvent.click(radio1);
    fireEvent.click(radio2);
    fireEvent.click(radio3);
    fireEvent.click(radio4);
    fireEvent.click(radio5);
    expect(mockRateChar).toHaveBeenCalledTimes(5);
  });
});
