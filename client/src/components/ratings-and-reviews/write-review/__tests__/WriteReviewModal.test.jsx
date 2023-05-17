import axios from 'axios';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import WriteReviewModal from '../WriteReviewModal';

jest.mock('axios');

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
const mockProduct = {
  id: 123,
  name: 'blah',
};
const mockSetShowModal = jest.fn();

describe('WriteReviewModal', () => {
  test('Renders modal', () => {
    render(
      <WriteReviewModal
        product={mockProduct}
        characteristics={mockCharacteristics}
        setShowModal={mockSetShowModal}
      />,
    );
    const header = screen.queryByText('Write Your Review');
    expect(header).toBeTruthy();
  });
  test('submits form', () => {
    axios.post.mockResolvedValue(null);
    render(
      <WriteReviewModal
        product={mockProduct}
        characteristics={mockCharacteristics}
        setShowModal={mockSetShowModal}
      />,
    );
    const fourStar = screen.getByLabelText('4 star');
    fireEvent.click(fourStar);
    const yesRadio = screen.getByRole('radio', { name: 'Yes' });
    fireEvent.click(yesRadio);
    const nameInput = screen.getByPlaceholderText('Example: jackson11!');
    fireEvent.change(nameInput, { target: { value: 'jackson11' } });
    const emailInput = screen.getByPlaceholderText('Example: jackson11@gmail.com');
    fireEvent.change(emailInput, { target: { value: 'fake@email.com' } });
    const summaryInput = screen.getByPlaceholderText('Example: Best purchase ever!');
    fireEvent.change(summaryInput, { target: { value: 'summary text' } });
    const bodyInput = screen.getByPlaceholderText('Why did you like the product or not?');
    fireEvent.change(bodyInput, { target: { value: 'Nunc faucibus a pellentesque sit amet porttitor eget. Id aliquet risus feugiat in ante metus.' } });
    const radio1 = screen.getByRole('radio', { name: 'A size too small' });
    const radio2 = screen.getByRole('radio', { name: 'Too narrow' });
    const radio3 = screen.getByRole('radio', { name: 'Uncomfortable' });
    const radio4 = screen.getByRole('radio', { name: 'Poor' });
    const radio5 = screen.getByRole('radio', { name: 'Runs short' });
    const radio6 = screen.getByRole('radio', { name: 'Runs tight' });
    fireEvent.click(radio1);
    fireEvent.click(radio2);
    fireEvent.click(radio3);
    fireEvent.click(radio4);
    fireEvent.click(radio5);
    fireEvent.click(radio6);
    const submitButton = screen.getByRole('button', { name: 'submit' });
    fireEvent.click(submitButton);
    expect(axios.post).toHaveBeenCalled();
  });
});
