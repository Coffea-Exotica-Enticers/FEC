import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AnswerListEntry from './AnswerListEntry';

// eslint-disable-next-line react/prop-types
export default function AnswerList({ id }) {
  const [answers, setAnswers] = useState([]);
  const [showAnswers, setShowAnswers] = useState([]);

  function getAllAnswers() {
    let dataArray = [];

    function getAnswerLoop(currentPage) {
      axios.get('/qa/answers', {
        params: {
          // eventually put id here. for now just use this for testing purposes
          id: 645139,
          count: 10,
          page: currentPage,
        },
      })
        .then((answerData) => answerData.data.results)
        .then((data) => {
          dataArray = ([...dataArray, ...data]);
          return data;
        })
        .then((data) => {
          if (data.length > 0) {
            getAnswerLoop(currentPage + 1);
          } else {
            setAnswers(dataArray);
            setShowAnswers(dataArray.slice(0, 2));
          }
        })
        .catch((err) => console.error('There was an error retrieving question data', err));
    }
    getAnswerLoop(1);
  }

  function showMoreAnswers() {
    setShowAnswers(answers.slice(0, 2 + showAnswers.length));
  }

  useEffect(() => {
    getAllAnswers();
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      { showAnswers.length > 0
        ? (
          <>
            {
              showAnswers.map((a) => <AnswerListEntry answer={a} key={a.answer_id} />)
            }
            {
              showAnswers.length < answers.length
                ? (
                  <form onSubmit={(e) => {
                    e.preventDefault();
                    showMoreAnswers();
                  }}
                  >
                    <button type="submit">More Answers</button>
                  </form>
                )
                : 'No More Answers'
            }
          </>
        )
        : 'Answers Loading'}
    </>
  );
}
