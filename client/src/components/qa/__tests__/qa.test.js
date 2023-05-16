import React from 'react';
import { render, screen } from '@testing-library/react';
import QAModule from '../QAModule';
import QuestionList from '../questionList/QuestionList';
import AnswerList from '../questionList/AnswerList';
import QuestionListEntry from '../questionList/QuestionListEntry';
import AnswerListEntry from '../questionList/AnswerListEntry';
import ImageList from '../imageList/ImageList';
import ImageListEntry from '../imageList/ImageListEntry';
import AddQuestion from '../addQuestion/AddQuestion';
import AddAnswer from '../addAnswer/AddAnswer';

describe('module renders its own components properly', () => {
  it('should render the search bar', () => {
    render(<QAModule />);
    expect(screen.getByPlaceholderText('Search your question...')).toBeTruthy();
  });
  it('should render the Ask Your Question button', () => {
    render(<QAModule />);
    expect(screen.getByRole('button', { name: 'Ask Your Question' })).toBeTruthy();
  });
});

describe('renders question list', () => {
  test('question list is rendered properly', () => {
    render(<QuestionList qArray={[]} />);
    expect(screen.getByTestId('question-list')).toBeTruthy();
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

describe('renders answer list', () => {
  test('answer list is rendered properly', () => {
    render(<AnswerList id={40349} />);
    expect(screen.getByTestId('answer-list')).toBeTruthy();
  });
});

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

const testPhotos = [
  {
    id: 5347675,
    url: 'http://res.cloudinary.com/fec-cars/image/upload/v1676073715/eaokljdt8oimivi0rk1b.jpg',
  },
  {
    id: 5347679,
    url: 'http://res.cloudinary.com/fec-cars/image/upload/v1676074347/hz09yvlenfgf9s66tlsh.jpg',
  },
];

describe('image list properly renders', () => {
  test('image list should render', () => {
    render(<ImageList photos={testPhotos} />);
    expect(screen.getByTestId('image-list')).toBeTruthy();
  });
  test('image entry should have a length of 2 if given test array', () => {
    render(<ImageList photos={testPhotos} />);
    expect(screen.getAllByTestId('image-entry')).toHaveLength(2);
  });
});

const testPhoto = {
  id: 5347675,
  url: 'http://res.cloudinary.com/fec-cars/image/upload/v1676073715/eaokljdt8oimivi0rk1b.jpg',
};

describe('properly renders an image list entry', () => {
  test('it renders a photo', () => {
    render(<ImageListEntry photo={testPhoto} />);
    const getPhoto = screen.getByAltText('5347675');
    expect(getPhoto).toBeTruthy();
  });
});

describe('buttons for modal windows properly render', () => {
  test('Add question button renders', () => {
    render(<AddQuestion product={40349} />);
    const button = screen.getByRole('button', { name: 'Ask Your Question' });
    expect(button).toBeTruthy();
  });
  test('Add answer button renders', () => {
    render(<AddAnswer id={328752} />);
    const button = screen.getByRole('button', { name: 'Add Your Answer' });
    expect(button).toBeTruthy();
  });
});
