import React from 'react';
import QuestionListEntry from './QuestionListEntry';
import AnswerList from './AnswerList';

// eslint-disable-next-line react/prop-types
export default function QuestionList({ qArray }) {
  return (
    <>
      {
        qArray.map((q) => (
          <>
            <QuestionListEntry question={q} key={q.question_id} />
            <AnswerList answers={q.answers} />
          </>
        ))
      }
    </>
  );
}
