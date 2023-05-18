import React, { useState } from 'react';
import axios from 'axios';

export default function QuestionListEntry({ question }) {
  const [marked, setMarked] = useState(false);
  const [helpful, setHelpful] = useState(question.question_helpfulness);
  const [reported, setReported] = useState(question.reported);
  const dateOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

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
    <div className="question-entry" data-testid="question-entry">
      <div className="q-symbol">Q</div>
      <div className="qa-body-asker">
        <div>
          {question.question_body}
        </div>
        <div className="name-and-date">
          {question.asker_name}
          {', '}
          {new Date(question.question_date).toLocaleDateString('en-us', dateOptions)}
        </div>
      </div>
      <div className="helpful-report-container">
        <div className="helpful-report">
          <div>
            Helpful?
            {' '}
          </div>
          <form onSubmit={(e) => {
            e.preventDefault();
            markQuestionHelpful();
          }}
          >
            {
              marked
                ? (
                  <div>
                    {' '}
                    Thanks!
                    {' '}
                  </div>
                )
                : <button type="submit" className="qa-helpful">Yes</button>
            }
          </form>
          (
          {helpful}
          )
          {' |'}
          <form onSubmit={(e) => {
            e.preventDefault();
            reportQuestion();
          }}
          >
            {
              reported
                ? (
                  <div> Reported</div>
                )
                : <button type="submit" className="qa-report">Report</button>
            }
          </form>
        </div>
      </div>
    </div>
  );
}
