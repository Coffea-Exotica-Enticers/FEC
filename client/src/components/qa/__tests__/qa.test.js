import React from 'react';
import axios from 'axios';
import { render, fireEvent, screen } from '@testing-library/react';
import QAModule from '../QAModule';

jest.mock('axios');

describe('QA Module Functionality', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  axios.get.mockResolvedValue({
    product_id: '40320',
    results: [
      {
        question_id: 328752,
        question_body: 'Quia eum incidunt dolorum numquam.',
        question_date: '2021-04-13T00:00:00.000Z',
        asker_name: 'Harley_Wunsch49',
        question_helpfulness: 28,
        reported: false,
        answers: {
          3071375: {
            id: 3071375,
            body: 'Dicta reiciendis consequatur pariatur repellat est.',
            date: '2021-03-12T00:00:00.000Z',
            answerer_name: 'Tamara91',
            helpfulness: 8,
            photos: [
              'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
            ],
          },
        },
      },
      {
        question_id: 328753,
        question_body: 'Quia eum incidunt dolorum numquam.',
        question_date: '2021-04-13T00:00:00.000Z',
        asker_name: 'Harley_Wunsch49',
        question_helpfulness: 28,
        reported: false,
        answers: {
          3071375: {
            id: 3071375,
            body: 'Dicta reiciendis consequatur pariatur repellat est.',
            date: '2021-03-12T00:00:00.000Z',
            answerer_name: 'Tamara91',
            helpfulness: 8,
            photos: [
              'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
            ],
          },
        },
      },
      {
        question_id: 328754,
        question_body: 'Quia eum incidunt dolorum numquam.',
        question_date: '2021-04-13T00:00:00.000Z',
        asker_name: 'Harley_Wunsch49',
        question_helpfulness: 28,
        reported: false,
        answers: {
          3071375: {
            id: 3071375,
            body: 'Dicta reiciendis consequatur pariatur repellat est.',
            date: '2021-03-12T00:00:00.000Z',
            answerer_name: 'Tamara91',
            helpfulness: 8,
            photos: [
              'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
            ],
          },
        },
      },
    ],
  });

  test('axios get request should occur', () => {
    render(<QAModule product={40349} />);
    expect(axios.get).toHaveBeenCalledTimes(1);
  });
  test('pressing the More Questions button should show more questions', () => {
    render(<QAModule product={40349} />);
    fireEvent.click(screen.getByText(/More Questions/));
    // findBy methods use waitFor, which means it will wait until an assertion is true
    expect(screen.findAllByTestId).toHaveLength(3);
  });
});
