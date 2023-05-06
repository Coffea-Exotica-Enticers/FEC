import React from 'react';

// eslint-disable-next-line react/prop-types
export default function AnswerListEntry({ answer }) {
  return (
    <>
      <div>
        A:
        {' '}
        {answer.body}
      </div>
      <div>
        by
        {' '}
        {answer.answerer_name}
      </div>
      <div>
        {answer.date}
      </div>
      <div>
        Helpful?
        {' '}
        <button type="button">
          Yes
          {' '}
          {answer.helpfulness}
        </button>
      </div>
      <button type="button">
        Report
      </button>
    </>
  );
}
