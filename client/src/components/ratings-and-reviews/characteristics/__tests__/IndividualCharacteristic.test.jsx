import React from 'react';
import { render, screen } from '@testing-library/react';
import IndividualCharacteristic from '../IndividualCharacteristic';

const mockCharName1 = 'Size';
const mockCharName2 = 'Width';
const mockCharName3 = 'Comfort';
const mockCharName4 = 'Quality';
const mockCharName5 = 'Length';
const mockCharName6 = 'Fit';
const mockCharData = {
  id: 135219,
  value: '3.2741935483870968',
};

describe('IndividualCharacteristic', () => {
  test('Render Size meter', () => {
    render(<IndividualCharacteristic charName={mockCharName1} characteristic={mockCharData} />);
    const label = screen.getByText('Size');
    const meter = screen.getByRole('img', { name: 'Size characteristic meter' });
    const description1 = screen.getByText('A size too small');
    const description2 = screen.getByText('Perfect');
    const description3 = screen.getByText('A size too big');
    expect(meter).toBeTruthy();
    expect(label).toBeTruthy();
    expect(description1).toBeTruthy();
    expect(description2).toBeTruthy();
    expect(description3).toBeTruthy();
  });
  test('Render Width meter', () => {
    render(<IndividualCharacteristic charName={mockCharName2} characteristic={mockCharData} />);
    const label = screen.getByText('Width');
    const meter = screen.getByRole('img', { name: 'Width characteristic meter' });
    const description1 = screen.getByText('Too narrow');
    const description2 = screen.getByText('Perfect');
    const description3 = screen.getByText('Too wide');
    expect(meter).toBeTruthy();
    expect(label).toBeTruthy();
    expect(description1).toBeTruthy();
    expect(description2).toBeTruthy();
    expect(description3).toBeTruthy();
  });
  test('Render Comfort meter', () => {
    render(<IndividualCharacteristic charName={mockCharName3} characteristic={mockCharData} />);
    const label = screen.getByText('Comfort');
    const meter = screen.getByRole('img', { name: 'Comfort characteristic meter' });
    const description1 = screen.getByText('Uncomfortable');
    const description2 = screen.getByText('Ok');
    const description3 = screen.getByText('Perfect');
    expect(meter).toBeTruthy();
    expect(label).toBeTruthy();
    expect(description1).toBeTruthy();
    expect(description2).toBeTruthy();
    expect(description3).toBeTruthy();
  });
  test('Render Quality meter', () => {
    render(<IndividualCharacteristic charName={mockCharName4} characteristic={mockCharData} />);
    const label = screen.getByText('Quality');
    const meter = screen.getByRole('img', { name: 'Quality characteristic meter' });
    const description1 = screen.getByText('Poor');
    const description2 = screen.getByText('What I expected');
    const description3 = screen.getByText('Perfect');
    expect(meter).toBeTruthy();
    expect(label).toBeTruthy();
    expect(description1).toBeTruthy();
    expect(description2).toBeTruthy();
    expect(description3).toBeTruthy();
  });
  test('Render Length meter', () => {
    render(<IndividualCharacteristic charName={mockCharName5} characteristic={mockCharData} />);
    const label = screen.getByText('Length');
    const meter = screen.getByRole('img', { name: 'Length characteristic meter' });
    const description1 = screen.getByText('Runs short');
    const description2 = screen.getByText('Perfect');
    const description3 = screen.getByText('Runs long');
    expect(meter).toBeTruthy();
    expect(label).toBeTruthy();
    expect(description1).toBeTruthy();
    expect(description2).toBeTruthy();
    expect(description3).toBeTruthy();
  });
  test('Render Fit meter', () => {
    render(<IndividualCharacteristic charName={mockCharName6} characteristic={mockCharData} />);
    const label = screen.getByText('Fit');
    const meter = screen.getByRole('img', { name: 'Fit characteristic meter' });
    const description1 = screen.getByText('Runs tight');
    const description2 = screen.getByText('Perfect');
    const description3 = screen.getByText('Runs long');
    expect(meter).toBeTruthy();
    expect(label).toBeTruthy();
    expect(description1).toBeTruthy();
    expect(description2).toBeTruthy();
    expect(description3).toBeTruthy();
  });
});
