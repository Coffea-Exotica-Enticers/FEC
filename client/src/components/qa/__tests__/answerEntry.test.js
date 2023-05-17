import React from 'react';
import axios from 'axios';
import { render, fireEvent, screen } from '@testing-library/react';
import AnswerListEntry from '../questionList/AnswerListEntry';

jest.mock('axios');

const testAnswer = {
  answer_id: 5990787,
  body: 'hello world',
  date: '2023-02-11T00:00:00.000Z',
  answerer_name: 'answerdemo',
  helpfulness: 12,
  reported: false,
  photos: [
    {
      id: 5347675,
      url: 'http://res.cloudinary.com/fec-cars/image/upload/v1676073715/eaokljdt8oimivi0rk1b.jpg',
    },
    {
      id: 5347679,
      url: 'http://res.cloudinary.com/fec-cars/image/upload/v1676074347/hz09yvlenfgf9s66tlsh.jpg',
    },
  ],
};

describe('properly renders an answer list entry', () => {
  test('renders answer body', () => {
    render(<AnswerListEntry answer={testAnswer} />);
    const body = screen.getByText(/hello world/);
    expect(body).toBeTruthy();
  });
  test('renders answerer name', () => {
    render(<AnswerListEntry answer={testAnswer} />);
    const name = screen.getByText(/answerdemo/);
    expect(name).toBeTruthy();
  });
  test('renders date', () => {
    render(<AnswerListEntry answer={testAnswer} />);
    const date = screen.getByText(/February 10, 2023/);
    expect(date).toBeTruthy();
  });
  test('renders helpfulness count', () => {
    render(<AnswerListEntry answer={testAnswer} />);
    const helpfulness = screen.getByText(/12/);
    expect(helpfulness).toBeTruthy();
  });
  test('renders report button', () => {
    render(<AnswerListEntry answer={testAnswer} />);
    const report = screen.getByRole('button', { name: 'Report' });
    expect(report).toBeTruthy();
  });
});

describe('properly marks answer as helpful', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  axios.put.mockResolvedValue({
    data: {},
    status: 200,
  });

  test('click event', () => {
    render(<AnswerListEntry answer={testAnswer} />);
    fireEvent.click(screen.getByText(/Yes/));
    expect(axios.put).toHaveBeenCalledTimes(1);
  });
});

describe('properly reports answer', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  axios.put.mockResolvedValue({
    data: {},
    status: 500,
  });

  test('click event', () => {
    render(<AnswerListEntry answer={testAnswer} />);
    fireEvent.click(screen.getByText(/Report/));
    expect(axios.put).toHaveBeenCalledTimes(1);
  });
});
