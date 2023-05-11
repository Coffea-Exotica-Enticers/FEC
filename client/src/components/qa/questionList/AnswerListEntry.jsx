import React, { useState } from 'react';
import axios from 'axios';

// eslint-disable-next-line react/prop-types
export default function AnswerListEntry({ answer }) {
  const [marked, setMarked] = useState(false);
  const [helpful, setHelpful] = useState(answer.helpfulness);
  const [reported, setReported] = useState(answer.reported);
  const dateOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  function markAnswerHelpful() {
    axios.put('/qa/answers/helpful', { id: answer.answer_id })
      .then(() => {
        setMarked(true);
        setHelpful(helpful + 1);
        console.log('Report answer successful');
      })
      .catch((err) => {
        console.log('Error in reporting answer:', err);
      });
  }

  function reportAnswer() {
    axios.put('/qa/answers/report', { id: answer.answer_id })
      .then(() => {
        setReported(true);
        console.log('Report answer successful');
      })
      .catch((err) => {
        console.log('Error in reporting answer:', err);
      });
  }

  return (
    <>
      <div>
        A:
        {' '}
        {answer.body}
      </div>
      <div>
        {answer.answerer_name}
        {', '}
        {new Date(answer.date).toLocaleDateString('en-us', dateOptions)}
      </div>
      <form onSubmit={(e) => {
        e.preventDefault();
        markAnswerHelpful();
      }}
      >
        <div>
          {helpful}
          {' '}
          people found this answer helpful.
        </div>
        {
          marked
            ? (
              <div>You marked this answer as helpful.</div>
            )
            : <button type="submit">Mark This Answer as Helpful</button>
        }
      </form>
      <form onSubmit={(e) => {
        e.preventDefault();
        reportAnswer();
      }}
      >
        {
          reported
            ? (
              <div>Reported</div>
            )
            : <button type="submit">Report</button>
        }
      </form>
    </>
  );
}
