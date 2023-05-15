import React from 'react';
import QuestionListEntry from './QuestionListEntry';
import AnswerList from './AnswerList';

export default function QuestionList({ qArray }) {
  return (
    <div className="qa-container">
      {
        qArray.map((q) => (
          <div className="qa-entry" key={q.question_id}>
            <QuestionListEntry question={q} />
            <AnswerList id={q.question_id} />
          </div>
        ))
      }
    </div>
  );
}
