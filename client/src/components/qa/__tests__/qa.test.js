import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../../App';
import QuestionListEntry from '../questionList/QuestionListEntry';
import AnswerListEntry from '../questionList/AnswerListEntry';

describe('search bar functionality', () => {
  it('should render the search bar', () => {
    render(<App />);
    expect(screen.getByPlaceholderText('Have a question? Search for answers...')).toBeTruthy();
  });
});

describe('add question functionality', () => {
  it('should render the Ask Your Question button', () => {
    render(<App />);
    expect(screen.getByRole('button', { name: 'Ask Your Question' })).toBeTruthy();
  });
});

const testQuestion = {
  question_id: 328752,
  question_body: 'Quia eum incidunt dolorum numquam.',
  question_date: '2021-04-13T00:00:00.000Z',
  asker_name: 'Harley_Wunsch49',
  question_helpfulness: 28,
  reported: false,
};

describe('properly renders a question', () => {
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

const testAnswer = {
  answer_id: 5990787,
  body: 'hello world',
  date: '2023-02-11T00:00:00.000Z',
  answerer_name: 'answerdemo',
  helpfulness: 0,
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

describe('properly renders an answer', () => {
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
    render(<AnswerListEntry question={testAnswer} />);
    const helpfulness = screen.getByText(/0/);
    expect(helpfulness).toBeTruthy();
  });
  test('renders report button', () => {
    render(<AnswerListEntry question={testAnswer} />);
    const report = screen.getByText(/Report/);
    expect(report).toBeTruthy();
  });
});
