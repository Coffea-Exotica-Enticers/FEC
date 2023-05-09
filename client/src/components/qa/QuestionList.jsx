import React from 'react';
import QuestionListEntry from './QuestionListEntry';
import AnswerList from './AnswerList';

// eslint-disable-next-line react/prop-types
export default function QuestionList({ qArray }) {
  return (
    <>
      {
        // eslint-disable-next-line react/prop-types
        qArray.map((q) => (
          <div key={q.question_id}>
            <QuestionListEntry question={q} />
            <AnswerList id={q.question_id} />
          </div>
        ))
      }
    </>
  );
}
