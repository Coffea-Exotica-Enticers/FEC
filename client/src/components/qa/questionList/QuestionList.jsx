import React from 'react';
import QuestionListEntry from './QuestionListEntry';
import AnswerList from './AnswerList';
import AddAnswer from '../addAnswer/AddAnswer';

// eslint-disable-next-line react/prop-types
export default function QuestionList({ qArray }) {
  return (
    <div className="qa-container">
      {
        qArray.map((q) => (
          <div key={q.question_id}>
            <QuestionListEntry question={q} />
            <AnswerList id={q.question_id} />
            <AddAnswer id={q.question_id} />
          </div>
        ))
      }
    </div>
  );
}
