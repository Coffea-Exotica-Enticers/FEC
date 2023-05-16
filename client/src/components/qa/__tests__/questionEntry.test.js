import React from 'react';
import axios from 'axios';
import { render, fireEvent, screen } from '@testing-library/react';
import QuestionListEntry from '../questionList/QuestionListEntry';

jest.mock('axios');

const testQuestion = {
  question_id: 328752,
  question_body: 'Quia eum incidunt dolorum numquam.',
  question_date: '2021-04-13T00:00:00.000Z',
  asker_name: 'Harley_Wunsch49',
  question_helpfulness: 28,
  reported: false,
};

describe('properly renders a question list entry', () => {
  test('renders question body', () => {
    render(<QuestionListEntry question={testQuestion} />);
    const body = screen.getByText(/Quia eum/);
    expect(body).toBeTruthy();
  });
  test('renders question asker', () => {
    render(<QuestionListEntry question={testQuestion} />);
    const asker = screen.getByText(/Harley_Wunsch49/);
    expect(asker).toBeTruthy();
  });
  test('renders date', () => {
    render(<QuestionListEntry question={testQuestion} />);
    const date = screen.getByText(/April 12, 2021/);
    expect(date).toBeTruthy();
  });
  test('renders helpfulness count', () => {
    render(<QuestionListEntry question={testQuestion} />);
    const helpfulness = screen.getByText(/28/);
    expect(helpfulness).toBeTruthy();
  });
  test('renders report button', () => {
    render(<QuestionListEntry question={testQuestion} />);
    const report = screen.getByText(/Report/);
    expect(report).toBeTruthy();
  });
});

describe('properly marks question as helpful', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  axios.put.mockResolvedValue({
    data: {},
    status: 200,
  });

  test('click event', () => {
    render(<QuestionListEntry question={testQuestion} />);
    fireEvent.click(screen.getByText(/Yes/));
    expect(axios.put).toHaveBeenCalledTimes(1);
  });
});

describe('properly reports question', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  axios.put.mockResolvedValue({
    data: {},
    status: 200,
  });

  test('click event', () => {
    render(<QuestionListEntry question={testQuestion} />);
    fireEvent.click(screen.getByText(/Report/));
    expect(axios.put).toHaveBeenCalledTimes(1);
  });
});
