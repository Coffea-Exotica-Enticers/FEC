import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AnswerListEntry from './AnswerListEntry';

// eslint-disable-next-line react/prop-types
export default function AnswerList({ id }) {
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    axios.get('/qa/answers', { params: { id: 645139 } })
      .then((answerData) => {
        console.log('answerData is', answerData.data.results);
        setAnswers(answerData.data.results);
      })
      .catch((err) => console.error('There was an error retrieving question data', err));
  }, []);

  return (
    <>
      {
        answers.map((a) => <AnswerListEntry answer={a} key={a.answer_id} />)
      }
    </>
  );
}
