import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../../App';
import QuestionListEntry from '../questionList/QuestionListEntry';

describe('search bar functionality', () => {
  it('should render the search bar', () => {
    render(<App />);
    expect(screen.getByPlaceholderText('Have a question? Search for answers...')).toBeTruthy();
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
  test('renders a question', () => {
    render(<QuestionListEntry question={testQuestion} />);
  });
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
});

describe('add question functionality', () => {
  it('should render the Ask Your Question button', () => {
    render(<App />);
    expect(screen.getByRole('button', { name: 'Ask Your Question' })).toBeTruthy();
  });
});