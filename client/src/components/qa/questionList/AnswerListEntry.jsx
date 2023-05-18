import React, { useState } from 'react';
import axios from 'axios';
import ImageList from '../imageList/ImageList';

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
      <div className="answer-entry">
        <div className="a-symbol">A</div>
        <div className="qa-body-asker">
          <div>
            {answer.body}
          </div>
          <div className="name-and-date">
            {answer.answerer_name}
            {', '}
            {new Date(answer.date).toLocaleDateString('en-us', dateOptions)}
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
              markAnswerHelpful();
            }}
            >
              {
                marked
                  ? (
                    <div> Thanks! </div>
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
              reportAnswer();
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
      <div>
        <ImageList photos={answer.photos} />
      </div>
    </>
  );
}
