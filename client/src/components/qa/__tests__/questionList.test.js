import React from 'react';
import { render, screen } from '@testing-library/react';
import QuestionList from '../questionList/QuestionList';

const testQuestionList = [
  {
    question_id: 328752,
    question_body: 'Quia eum incidunt dolorum numquam.',
    question_date: '2021-04-13T00:00:00.000Z',
    asker_name: 'Harley_Wunsch49',
    question_helpfulness: 28,
    reported: false,
  },
  {
    question_id: 328753,
    question_body: 'Quia eum incidunt dolorum numquam.',
    question_date: '2021-04-13T00:00:00.000Z',
    asker_name: 'Harley_Wunsch49',
    question_helpfulness: 29,
    reported: false,
  },
];

describe('renders question list', () => {
  test('question list is rendered properly', () => {
    render(<QuestionList qArray={[]} />);
    expect(screen.getByTestId('question-list')).toBeTruthy();
  });
  test('question-entry should appear twice if given an array with 2 questions', () => {
    render(<QuestionList qArray={testQuestionList} />);
    expect(screen.getAllByTestId('question-entry')).toHaveLength(2);
  });
});
