import React, { useState } from 'react';
import axios from 'axios';

// eslint-disable-next-line react/prop-types
export default function QuestionListEntry({ question }) {
  const [marked, setMarked] = useState(false);
  const [helpful, setHelpful] = useState(question.question_helpfulness);
  const [reported, setReported] = useState(question.reported);

  function markQuestionHelpful() {
    axios.put('/qa/questions/helpful', { id: question.question_id })
      .then(() => {
        setMarked(true);
        setHelpful(helpful + 1);
        console.log('Report question successful');
      })
      .catch((err) => {
        console.log('Error in reporting question:', err);
      });
  }

  function reportQuestion() {
    axios.put('/qa/questions/report', { id: question.question_id })
      .then(() => {
        setReported(true);
        console.log('Report question successful');
      })
      .catch((err) => {
        console.log('Error in reporting question:', err);
      });
  }

  return (
    <>
      <div>
        Q:
        {' '}
        {question.question_body}
      </div>
      <div>
        by
        {' '}
        {question.asker_name}
      </div>
      <div>
        {' '}
        {question.question_date}
      </div>
      <form onSubmit={(e) => {
        e.preventDefault();
        markQuestionHelpful();
      }}
      >
        <div>
          {helpful}
          {' '}
          people found this question helpful.
        </div>
        {
          marked
            ? (
              <div>You marked this question as helpful.</div>
            )
            : <button type="submit">Mark This Question as Helpful</button>
        }
      </form>
      <form onSubmit={(e) => {
        e.preventDefault();
        reportQuestion();
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
